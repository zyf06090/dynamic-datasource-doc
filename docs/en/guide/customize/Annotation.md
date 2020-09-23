# 自定义注解

## 基础介绍

如果你只有几个确定的库，可以尝试自定义注解替换掉`@DS`。

建议从3.2.1版本开始使用自定义注解，另外组件自带了`@Master`和`@Slave`注解。

## 使用方法

下面我们自定义一个产品库的注解，方便我们后面程序的使用。

1. 需要自己定义一个注解并继承自DS。

```java
import com.baomidou.dynamic.datasource.annotation.DS;
import java.lang.annotation.*;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@DS("product")
public @interface Product {
}
```

2. 注解在需要切换数据源的方法上或类上。

```java
@Service
@Product
public class ProductServiceImpl implements ProductService {

    @Product
    public List selectAll() {
      return  jdbcTemplate.queryForList("select * from products");
    }
}
```