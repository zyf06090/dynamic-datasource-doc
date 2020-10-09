# 集成Quartz

## 基础介绍

- Quartz Github <https://github.com/quartz-scheduler/quartz>
- Quartz 文档 <http://www.quartz-scheduler.org/>

---
Quartz是一个定时任务框架，常常用于解决分布式系统下的定时任务协调问题。

Quartz常常需要独立运行在主业务数据库外,在springboot场景中可以以下面方式运行。

## 使用方法

1. 项目引用 `quartz-starter` 。
<a href="http://mvnrepository.com/artifact/org.quartz-scheduler/quartz" target="_blank">
<img src="https://img.shields.io/maven-central/v/org.quartz-scheduler/quartz.svg" ></a>

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

2. 创建SchedulerFactoryBeanCustomizer来配置Quartz的个性化配置。

配置独立数据源的参数。

```yml
spring:
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://39.108.158.138:3306/quartz
    driver-class-name: com.mysql.cj.jdbc.Driver
```

3. 自定义SchedulerFactoryBeanCustomizer来指定使用独立创建出来的数据源和事务。

```java
public class MyQuartzAutoConfiguration {
    @Autowired
    private DataSourceProperties dataSourceProperties;

    @Order(1)
    @Bean
    public SchedulerFactoryBeanCustomizer schedulerFactoryBeanCustomizer() {
        DataSource dataSource = dataSourceProperties.initializeDataSourceBuilder().build();
        return schedulerFactoryBean -> {
            schedulerFactoryBean.setDataSource(dataSource);
            schedulerFactoryBean.setTransactionManager(new DataSourceTransactionManager(dataSource));
        };
    }
}
```
