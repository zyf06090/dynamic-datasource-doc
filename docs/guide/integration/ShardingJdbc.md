# 集成ShardingJdbc

## 基础介绍

- shardingsphere Github <https://github.com/apache/shardingsphere>
- shardingsphere 文档 <https://shardingsphere.apache.org/>
- shardingsphere 示例 <https://github.com/apache/shardingsphere/tree/master/examples>

---

多数据源与shardingsphere集成的场景：部分表比较大需要分表由shardingsphere完成，同时又有多库的需求。

## 使用方法

1. 项目引入 `shardingsphere` 依赖。
<a href="http://mvnrepository.com/artifact/org.apache.shardingsphere/sharding-jdbc-spring-boot-starter" target="_blank">
<img src="https://img.shields.io/maven-central/v/org.apache.shardingsphere/sharding-jdbc-spring-boot-starter.svg" ></a>

```xml
<dependency>
    <groupId>org.apache.shardingsphere</groupId>
    <artifactId>sharding-jdbc-spring-boot-starter</artifactId>
    <version>4.1.1</version>
</dependency>
<dependency>
    <groupId>org.apache.shardingsphere</groupId>
    <artifactId>sharding-jdbc-spring-namespace</artifactId>
    <version>4.1.1</version>
</dependency>
```

2. 分别配置shardingjdbc和多数据源。

```yml
spring:
  # shardingjdbc 配置
  shardingsphere:
    datasource:
      names: shardingmaster,shardingslave0,shardingslave1
      shardingmaster:
        type: com.zaxxer.hikari.HikariDataSource
        driver-class-name: org.h2.Driver
        jdbc-url: jdbc:h2:mem:test
        username: sa
        password: ""
      shardingslave0:
        type: com.zaxxer.hikari.HikariDataSource
        driver-class-name: org.h2.Driver
        jdbc-url: jdbc:h2:mem:test
        username: sa
        password: ""
      shardingslave1:
        type: com.zaxxer.hikari.HikariDataSource
        driver-class-name: org.h2.Driver
        jdbc-url: jdbc:h2:mem:test
        username: sa
        password: ""
    masterslave:
      name: ms
      load-balance-algorithm-type: round_robin
      master-data-source-name: shardingmaster
      slave-data-source-names: shardingslave0,shardingslave1
    sharding:
      tables:
        t_order:
          actualDataNodes: shardingmaster.t_order${0..1}
          tableStrategy:
            inline:
              shardingColumn: order_id
              algorithmExpression: t_order${order_id % 2}
          keyGenerator:
            type: SNOWFLAKE
            column: order_id
  # 动态数据源配置
  datasource:
    dynamic:
      datasource:
        master:
          username: sa
          password: ""
          url: jdbc:h2:mem:master
          driver-class-name: org.h2.Driver
          schema: db/schema.sql
        test:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
          schema: db/schema.sql
```

3. 通过自定义DynamicDataSourceProvider完成与shardingsphere的集成。

```java
@Configuration
@AutoConfigureBefore({DynamicDataSourceAutoConfiguration.class, SpringBootConfiguration.class})
public class MyDataSourceConfiguration {
    @Resource
    private DynamicDataSourceProperties properties;

    /**
     * 未使用分片, 脱敏的名称(默认): shardingDataSource
     * shardingjdbc使用了主从: masterSlaveDataSource
     */
    @Lazy
    @Resource(name = "masterSlaveDataSource")
    private DataSource masterSlaveDataSource;

    @Bean
    public DynamicDataSourceProvider dynamicDataSourceProvider() {
        Map<String, DataSourceProperty> datasourceMap = properties.getDatasource();
        return new AbstractDataSourceProvider() {
            @Override
            public Map<String, DataSource> loadDataSources() {
                Map<String, DataSource> dataSourceMap = createDataSourceMap(datasourceMap);
                dataSourceMap.put("sharding", masterSlaveDataSource);
                //打开下面的代码可以把 shardingjdbc 管理的数据源也交给动态数据源管理 (根据自己需要选择开启)
                //dataSourceMap.putAll(((MasterSlaveDataSource) masterSlaveDataSource).getDataSourceMap());
                return dataSourceMap;
            }
        };
    }

    /**
     * 将动态数据源设置为首选的
     * 当spring存在多个数据源时, 自动注入的是首选的对象
     * 设置为主要的数据源之后，就可以支持shardingjdbc原生的配置方式了
     */
    @Primary
    @Bean
    public DataSource dataSource(DynamicDataSourceProvider dynamicDataSourceProvider) {
        DynamicRoutingDataSource dataSource = new DynamicRoutingDataSource();
        dataSource.setPrimary(properties.getPrimary());
        dataSource.setStrict(properties.getStrict());
        dataSource.setStrategy(properties.getStrategy());
        dataSource.setProvider(dynamicDataSourceProvider);
        dataSource.setP6spy(properties.getP6spy());
        dataSource.setSeata(properties.getSeata());
        return dataSource;
    }
}
```