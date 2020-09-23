# 手动创建数据源

知道了如何动态增减数据源，但不知道如何解析自己数据源，来动态创建一个DataSource。

`com.baomidou.dynamic.datasource.DataSourceCreator`   是一个数据源创建BEAN，对外提供了简便的创建不同类型数据源的需求。

熟悉spring的朋友也可以直接调用原生的DataSourceBuilder来创建简单数据源。

```java
//核心源码简述
public class DataSourceCreator {

//最外层创建数据源方法，一般直接调用这个就可以
public DataSource createDataSource(DataSourceProperty dataSourceProperty)
  
//项目只对druid和hikari做了特殊处理，支持一些参数和配置，其他的类型只能调用这个
public DataSource createBasicDataSource(DataSourceProperty dataSourceProperty)

//创建jndi数据源，只要配置参数设置了jndiName就会创建，优先级最高
public DataSource createJNDIDataSource(String jndiName)

//创建druid数据源,如果未指定type,druid的优先于hikari
public DataSource createDruidDataSource(DataSourceProperty dataSourceProperty)

//创建hikari数据源
public DataSource createHikariDataSource(DataSourceProperty dataSourceProperty)
    
}
```