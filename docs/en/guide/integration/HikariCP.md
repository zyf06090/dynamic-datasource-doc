# Integrating HikariCP

## Introduction

- HikariCP Github <https://github.com/brettwooldridge/HikariCP>
- HikariCP Document <https://github.com/brettwooldridge/HikariCP/wiki>

## How to use

use `HikariCP` dependency.
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
```SpringBoot2.x.x```Hikaricp is introduced by default, unless there is a requirement for the version, there is no need to introduce it again.

```SpringBoot 1.5.x```It needs to be imported manually. The corresponding version should be selected according to your own environment and official document of hikaricp.
:::

## Configurate parameters

1. :heart: If none of the parameters are configured, the default value of the original component is maintained.
2. :yellow_heart: If global parameters are configured, each data source inherits the corresponding parameters.
3. :blue_heart: Each datasource can set parameters separately to override global parameters.

```yaml
spring:
  datasource:
    dynamic:
      hikari:  # global hikariCP parameter
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
        data-source-properties:
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
          hikari: # The following are independent parameters that can be reset for each db
            max-pool-size:
            idle-timeout:
#           ......
```

## Core source code

`HikariDataSourceCreator` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/creator/HikariDataSourceCreator.java>

`HikariCpConfig` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/spring/boot/autoconfigure/hikari/HikariCpConfig.java>