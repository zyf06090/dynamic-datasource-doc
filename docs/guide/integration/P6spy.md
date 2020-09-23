# 集成P6spy

## 基础介绍

- P6spy Github <https://github.com/p6spy/p6spy>
- P6spy 文档 <https://p6spy.readthedocs.io/en/latest/>

```shell
# before
select * from user where age>?
# after enabled p6spy
select * from user where age>6
```

## 使用方法

1. 项目引入`p6spy`依赖。
<a href="http://mvnrepository.com/artifact/p6spy/p6spy" target="_blank">
<img src="https://img.shields.io/maven-central/v/p6spy/p6spy.svg" ></a>

```xml
<dependency>
    <groupId>p6spy</groupId>
    <artifactId>p6spy</artifactId>
    <version>3.9.1</version>
</dependency>
```

2. 启用p6spy相关配置。

```yaml
spring:
  datasource:
    dynamic:
      p6spy: true # 默认false,建议线上关闭。
      datasource:
        product:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
          p6spy: false # 如果这个库不需要可单独关闭。
        order:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
```

3. 引入相关配置文件。

在classPath下创建spy.properties

```properties
# 一个最简单配置,定义slf4j日志输出。 更多参数请自行了解。
appender=com.p6spy.engine.spy.appender.Slf4JLogger
```