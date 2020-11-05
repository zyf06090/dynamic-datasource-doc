# Integrating Quartz

## Introduction

- Quartz Github <https://github.com/quartz-scheduler/quartz>
- Quartz Document <http://www.quartz-scheduler.org/>

---
Quartz is a timing task framework, which is often used to solve the problem of timing task coordination in distributed system.

Quartz often needs to run independently of the main business database, and in a springboot scenario you can do the following.

## How to use

1. use `quartz-starter` dependency.
<a href="http://mvnrepository.com/artifact/org.quartz-scheduler/quartz" target="_blank">
<img src="https://img.shields.io/maven-central/v/org.quartz-scheduler/quartz.svg" ></a>

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

2. create SchedulerFactoryBeanCustomizer to config Quartz.

```yml
spring:
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://39.108.158.138:3306/quartz
    driver-class-name: com.mysql.cj.jdbc.Driver
```

3. Customizing SchedulerFactoryBeanCustomizer to specify the use of independently created data sources and transactions。

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
