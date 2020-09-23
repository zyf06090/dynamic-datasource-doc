# 集成HikariCP

## 基础介绍

- HikariCP Github <https://github.com/brettwooldridge/HikariCP>
- HikariCP 文档 <https://github.com/brettwooldridge/HikariCP/wiki>

## 集成方法

项目引入 `HikariCP` 依赖。
<a href="http://mvnrepository.com/artifact/com.zaxxer/HikariCP" target="_blank">
<img src="https://img.shields.io/maven-central/v/com.zaxxer/HikariCP.svg" ></a>

```xml
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>3.4.5</version>
</dependency>
```

::: tip
```SpringBoot2.x.x```默认引入了HikariCP，除非对版本有要求无需再次引入。

```SpringBoot 1.5.x```需手动引入，对应的版本请根据自己环境和HikariCP官方文档自行选择。
:::

## 参数配置

- 如果参数都未配置，则保持原组件默认值。
- 如果配置了全局参数，则每一个数据源都会继承对应参数。
- 每一个数据源可以单独设置参数覆盖全局参数。

```yaml
spring:
  datasource:
    dynamic:
      hikari:  # 全局hikariCP参数，所有值和默认保持一致。(现已支持的参数如下,不清楚含义不要乱设置)
        catalog:
        connection-timeout:
        validation-timeout:
        idle-timeout:
        leak-detection-threshold:
        max-lifetime:
        max-pool-size:
        min-idle:
        initialization-fail-timeout:
        connection-init-sql:
        connection-test-query:
        dataSource-class-name:
        dataSource-jndi-name:
        schema:
        transaction-isolation-name:
        is-auto-commit:
        is-read-only:
        is-isolate-internal-queries:
        is-register-mbeans:
        is-allow-pool-suspension:
        data-source-properties: #以下属性仅为演示（默认不会引入）
          serverTimezone: Asia/Shanghai
          characterEncoding: utf-8
          useUnicode: true
          useSSL: false
          autoReconnect: true
          cachePrepStmts: true
          prepStmtCacheSize: 250
          prepStmtCacheSqlLimit: 2048
          useServerPrepStmts: true
          useLocalSessionState: true
          rewriteBatchedStatements: true
          cacheResultSetMetadata: true
          cacheServerConfiguration: true
          elideSetAutoCommits: true
          maintainTimeStats: false
          allowPublicKeyRetrieval: true
        health-check-properties:
      datasource:
        master:
          username: root
          password: 123456
          driver-class-name: com.mysql.jdbc.Driver
          url: jdbc:mysql://xx.xx.xx.xx:3306/dynamic?characterEncoding=utf8&useSSL=false
          hikari: # 以下参数针对每个库可以重新设置hikari参数
            max-pool-size:
            idle-timeout:
#           ......
```

## 核心源码

`HikariCP数据源创建器` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/creator/HikariDataSourceCreator.java>

`HikariCP参数配置类` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/spring/boot/autoconfigure/hikari/HikariCpConfig.java>