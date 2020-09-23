# 集成Seata

## 基础介绍

- seata Github地址 <https://github.com/seata/seata>
- seata 文档 <https://seata.io/zh-cn/docs/overview/what-is-seata.html>
- seata 示例 <https://github.com/seata/seata-samples>
- seata 最新版本 
<a href="http://mvnrepository.com/artifact/io.seata/seata-all" target="_blank">
<img src="https://img.shields.io/maven-central/v/io.seata/seata-all.svg" ></a> 。

> PS：一般需要分布式事务的场景大多数都是微服务化，个人并不建议在单体项目引入多数据源+分布式事务，有能力尽早拆开，可为过度方案。

## 注意事项

`dynamic-datasource-sring-boot-starter` 组件内部开启seata后会自动使用DataSourceProxy来包装DataSource,所以需要以下方式来保持兼容。

1.如果你引入的是seata-all,请不要使用@EnableAutoDataSourceProxy注解。

2.如果你引入的是seata-spring-boot-starter 请关闭自动代理。

```yaml
seata:
  enable-auto-data-source-proxy: false
```

## 示例项目

此工程为 多数据源+druid+seata+mybatisPlus的版本。

模拟用户下单，扣商品库存，扣用户余额，初步可分为订单服务+商品服务+用户服务。

### 环境准备

为了快速演示相关环境都采用docker部署，生产上线请参考seata官方文档使用。

1. 准备seata-server。

```shell
docker run --name seata-server -p 8091:8091 -d seataio/seata-server
```

2. 准备mysql数据库，账户root密码123456。

```shell
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```

3. 创建相关数据库。

创建 `seata-order`  `seata-product`  `seata-account`  模拟连接不同的数据库。

```mysql
CREATE DATABASE IF NOT EXIST seata-order;
CREATE DATABASE IF NOT EXIST seata-product;
CREATE DATABASE IF NOT EXIST seata-account;
```

4. 准备相关数据库脚本。

每个数据库下脚本相关的表，seata需要undo_log来监测和回滚。

相关的脚本不用自行准备，本工程已在resources/db下面准备好，另外配合多数据源的自动执行脚本功能，应用启动后会自动执行。

### 工程准备

1. 引入相关依赖，seata+druid+mybatisPlus+dynamic-datasource+mysql+lombok。

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifactId>seata-spring-boot-starter</artifactId>
    <version>1.3.0</version>
</dependency>
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>dynamic-datasource-spring-boot-starter</artifactId>
    <version>3.2.1</version>
</dependency>
# 省略，查看示例项目
```

2. 编写相关yaml配置。

```yaml
spring:
  application:
    name: dynamic
  datasource:
    dynamic:
      primary: order
      strict: true
      seata: true    #开启seata代理，开启后默认每个数据源都代理，如果某个不需要代理可单独关闭
      seata-mode: AT #支持XA及AT模式,默认AT
      datasource:
        order:
          username: root
          password: 123456
          url: jdbc:mysql://39.108.158.138:3306/seata_order?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&useSSL=false
          driver-class-name: com.mysql.cj.jdbc.Driver
          schema: classpath:db/schema-order.sql
        account:
          username: root
          password: 123456
          url: jdbc:mysql://39.108.158.138:3306/seata_account?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&useSSL=false
          driver-class-name: com.mysql.cj.jdbc.Driver
          schema: classpath:db/schema-account.sql
        product:
          username: root
          password: 123456
          url: jdbc:mysql://39.108.158.138:3306/seata_product?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&useSSL=false
          driver-class-name: com.mysql.cj.jdbc.Driver
          schema: classpath:db/schema-product.sql
        test:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
          seata: false #这个数据源不需要seata
seata:
  enabled: true
  application-id: applicationName
  tx-service-group: my_test_tx_group
  enable-auto-data-source-proxy: false   #一定要是false
  service:
    vgroup-mapping:
      my_test_tx_group: default  #key与上面的tx-service-group的值对应
    grouplist:
      default: 39.108.158.138:8091 #seata-server地址仅file注册中心需要
  config:
    type: file
  registry:
    type: file
```

### 代码编写

参考工程下面的代码完成controller,service,maaper,entity,dto等。

订单服务

```java
@Slf4j
@Service
public class OrderServiceImpl implements OrderService {

  @Resource
  private OrderDao orderDao;
  @Autowired
  private AccountService accountService;
  @Autowired
  private ProductService productService;
  
  @DS("order")//每一层都需要使用多数据源注解切换所选择的数据库
  @Override
  @Transactional
  @GlobalTransactional //重点 第一个开启事务的需要添加seata全局事务注解
  public void placeOrder(PlaceOrderRequest request) {
    log.info("=============ORDER START=================");
    Long userId = request.getUserId();
    Long productId = request.getProductId();
    Integer amount = request.getAmount();
    log.info("收到下单请求,用户:{}, 商品:{},数量:{}", userId, productId, amount);

    log.info("当前 XID: {}", RootContext.getXID());

    Order order = Order.builder()
        .userId(userId)
        .productId(productId)
        .status(OrderStatus.INIT)
        .amount(amount)
        .build();

    orderDao.insert(order);
    log.info("订单一阶段生成，等待扣库存付款中");
    // 扣减库存并计算总价
    Double totalPrice = productService.reduceStock(productId, amount);
    // 扣减余额
    accountService.reduceBalance(userId, totalPrice);

    order.setStatus(OrderStatus.SUCCESS);
    order.setTotalPrice(totalPrice);
    orderDao.updateById(order);
    log.info("订单已成功下单");
    log.info("=============ORDER END=================");
  }
}
```

商品服务

```java
@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

  @Resource
  private ProductDao productDao;

  /**
   * 事务传播特性设置为 REQUIRES_NEW 开启新的事务  重要！！！！一定要使用REQUIRES_NEW
   */
  @DS("product")
  @Transactional(propagation = Propagation.REQUIRES_NEW)
  @Override
  public Double reduceStock(Long productId, Integer amount) {
    log.info("=============PRODUCT START=================");
    log.info("当前 XID: {}", RootContext.getXID());

    // 检查库存
    Product product = productDao.selectById(productId);
    Integer stock = product.getStock();
    log.info("商品编号为 {} 的库存为{},订单商品数量为{}", productId, stock, amount);

    if (stock < amount) {
      log.warn("商品编号为{} 库存不足，当前库存:{}", productId, stock);
      throw new RuntimeException("库存不足");
    }
    log.info("开始扣减商品编号为 {} 库存,单价商品价格为{}", productId, product.getPrice());
    // 扣减库存
    int currentStock = stock - amount;
    product.setStock(currentStock);
    productDao.updateById(product);
    double totalPrice = product.getPrice() * amount;
    log.info("扣减商品编号为 {} 库存成功,扣减后库存为{}, {} 件商品总价为 {} ", productId, currentStock, amount, totalPrice);
    log.info("=============PRODUCT END=================");
    return totalPrice;
  }
}
```

用户服务

```java
@Slf4j
@Service
public class AccountServiceImpl implements AccountService {

  @Resource
  private AccountDao accountDao;

  /**
   * 事务传播特性设置为 REQUIRES_NEW 开启新的事务    重要！！！！一定要使用REQUIRES_NEW
   */
  @DS("account")
  @Override
  @Transactional(propagation = Propagation.REQUIRES_NEW)
  public void reduceBalance(Long userId, Double price) {
    log.info("=============ACCOUNT START=================");
    log.info("当前 XID: {}", RootContext.getXID());

    Account account = accountDao.selectById(userId);
    Double balance = account.getBalance();
    log.info("下单用户{}余额为 {},商品总价为{}", userId, balance, price);

    if (balance < price) {
      log.warn("用户 {} 余额不足，当前余额:{}", userId, balance);
      throw new RuntimeException("余额不足");
    }
    log.info("开始扣减用户 {} 余额", userId);
    double currentBalance = account.getBalance() - price;
    account.setBalance(currentBalance);
    accountDao.updateById(account);
    log.info("扣减用户 {} 余额成功,扣减后用户账户余额为{}", userId, currentBalance);
    log.info("=============ACCOUNT END=================");
  }

}
```

### 测试

在schema自动执行的脚本里，默认设置了商品价格为10，商品总数量为20，用户余额为50。

启动项目后通过命令行执行。

1. 模拟正常下单，买一个商品。

```shell
curl -X POST \
  http://localhost:8080/order/placeOrder \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": 1,
    "productId": 1,
    "amount": 1
}'
```

2. 模拟库存不足，事务回滚。

```shell
curl -X POST \
  http://localhost:8080/order/placeOrder \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": 1,
    "productId": 1,
    "amount": 22
}'
```

3. 模拟用户余额不足，事务回滚。

```shell
curl -X POST \
  http://localhost:8080/order/placeOrder \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": 1,
    "productId": 1,
    "amount": 6
}'
```

注意观察运行日志，至此分布式事务集成案例全流程完毕。