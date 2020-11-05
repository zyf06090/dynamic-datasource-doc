# Integrating P6spy

## Introduction

- P6spy Github <https://github.com/p6spy/p6spy>
- P6spy Document <https://p6spy.readthedocs.io/en/latest/>

```shell
# before
select * from user where age>?
# after enabled p6spy
select * from user where age>6
```

## How to use

1. use `p6spy` dependency.
<a href="http://mvnrepository.com/artifact/p6spy/p6spy" target="_blank">
<img src="https://img.shields.io/maven-central/v/p6spy/p6spy.svg" ></a>

```xml
<dependency>
    <groupId>p6spy</groupId>
    <artifactId>p6spy</artifactId>
    <version>3.9.1</version>
</dependency>
```

2. enable p6spy configuration.

```yaml
spring:
  datasource:
    dynamic:
      p6spy: true # default false,Recommend shutting it down online.
      datasource:
        product:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
          p6spy: false # If this db not need p6spy, it can be closed separately.
        order:
          username: sa
          password: ""
          url: jdbc:h2:mem:test
          driver-class-name: org.h2.Driver
```

3. edit p6spy config.

create spy.properties under resources.

```properties
#  A minimal configuration that defines the slf4j log output. Please read p6spy document.
appender=com.p6spy.engine.spy.appender.Slf4JLogger
```