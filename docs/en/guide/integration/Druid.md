# Integrating Druid

## Introduction

- Druid Github <https://github.com/alibaba/druid>
- Druid Document <https://github.com/alibaba/druid/wiki>

This component is ```simple and efficient ``` :cherry_blossom:  in integrating Druid and diversifying its parameters

::: tip

1. Each db can connect to a pool using a different database driver, such as master using Druid and slave use HikariCP.

2. If the project has both Druid and HikariCP and the connection pool type is not configured, the default is that** Druid takes precedence over HikariCP**.
:::

## How to use

1. use `druid-spring-boot-starter` dependency.
<a href="http://mvnrepository.com/artifact/com.alibaba/druid" target="_blank">
<img src="https://img.shields.io/maven-central/v/com.alibaba/druid.svg" ></a>

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.2.1</version>
</dependency>
```

2. Exclude the native Druid quick configuration class. :sweat_drops:

```java
@SpringBootApplication(exclude = DruidDataSourceAutoConfigure.class)
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
```

3. Some springBoot versions may not exclude, you can try this.

```yaml
spring:
  autoconfigure:
    exclude: com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceAutoConfigure
```

## Configurate parameters

1. :heart: If none of the parameters are configured, the default value of the original component is maintained.
2. :yellow_heart: If global parameters are configured, each data source inherits the corresponding parameters.
3. :blue_heart: Each datasource can set parameters separately to override global parameters.

```yaml
spring:
  datasource:
    druid:
      stat-view-servlet:
        enabled: true
        loginUsername: admin
        loginPassword: 123456
    dynamic:
      druid: #The following are the supported global parameters
        initial-size:
        max-active:
        min-idle:
        max-wait:
        time-between-eviction-runs-millis:
        time-between-log-stats-millis:
        stat-sqlmax-size:
        min-evictable-idle-time-millis:
        max-evictable-idle-time-millis:
        test-while-idle:
        test-on-borrow:
        test-on-return:
        validation-query:
        validation-query-timeout:
        use-global-datasource-stat:
        async-init:
        clear-filters-enable:
        reset-stat-enable:
        not-full-timeout-retry-count:
        max-wait-thread-count:
        fail-fast:
        phyTimeout-millis:
        keep-alive:
        pool-prepared-statements:
        init-variants:
        init-global-variants:
        use-unfair-lock:
        kill-when-socket-read-timeout:
        connection-properties:
        max-pool-prepared-statement-per-connection-size:
        init-connection-sqls:
        share-prepared-statements:
        connection-errorretry-attempts:
        break-after-acquire-failure:
        filters: stat,wall
        wall:
            noneBaseStatementAllow:
            callAllow:
            selectAllow:
            selectIntoAllow:
            selectIntoOutfileAllow:
            selectWhereAlwayTrueCheck:
            selectHavingAlwayTrueCheck:
            selectUnionCheck:
            selectMinusCheck:
            selectExceptCheck:
            selectIntersectCheck:
            createTableAllow:
            dropTableAllow:
            alterTableAllow:
            renameTableAllow:
            hintAllow:
            lockTableAllow:
            startTransactionAllow:
            blockAllow:
            conditionAndAlwayTrueAllow:
            conditionAndAlwayFalseAllow:
            conditionDoubleConstAllow:
            conditionLikeTrueAllow:
            selectAllColumnAllow:
            deleteAllow:
            deleteWhereAlwayTrueCheck:
            deleteWhereNoneCheck:
            updateAllow:
            updateWhereAlayTrueCheck:
            updateWhereNoneCheck:
            insertAllow:
            mergeAllow:
            minusAllow:
            intersectAllow:
            replaceAllow:
            setAllow:
            commitAllow:
            rollbackAllow:
            useAllow:
            multiStatementAllow:
            truncateAllow:
            commentAllow:
            strictSyntaxCheck:
            constArithmeticAllow:
            limitZeroAllow:
            describeAllow:
            showAllow:
            schemaCheck:
            tableCheck:
            functionCheck:
            objectCheck:
            variantCheck:
            mustParameterized:
            doPrivilegedAllow:
            dir:
            tenantTablePattern:
            tenantColumn:
            wrapAllow:
            metadataAllow:
            conditionOpXorAllow:
            conditionOpBitwseAllow:
            caseConditionConstAllow:
            completeInsertValuesCheck:
            insertValuesCheckSize:
            selectLimit:
        stat:
          merge-sql:
          log-slow-sql:
          slow-sql-millis: 
      datasource:
        master:
          username: root
          password: 123456
          driver-class-name: com.mysql.jdbc.Driver
          url: jdbc:mysql://xx.xx.xx.xx:3306/dynamic?characterEncoding=utf8&useSSL=false
          druid: # The following are independent parameters that can be reset for each db
            initial-size:
            validation-query: select 1 FROM DUAL #such as oracle need this
            public-key: #(non global parameter) setting means that encryption is enabled. The underlying layer will automatically configure the relevant connection parameters and filter for you. It is recommended to use the encryption method provided by this project.


#           ......

# generate publickey 和password,It is recommended to use the encryption method of the project.
# java -cp druid-1.1.10.jar com.alibaba.druid.filter.config.ConfigTools youpassword
```

visit <http://localhost:8080/druid/index.html> to view druid monitor page.

## Core source code

`DruidDataSourceCreator` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/creator/DruidDataSourceCreator.java>

`DruidConfig` :two_hearts: <https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/spring/boot/autoconfigure/druid/DruidConfig.java>

If there are missing parameters, please refer to the source code to submit pr.

