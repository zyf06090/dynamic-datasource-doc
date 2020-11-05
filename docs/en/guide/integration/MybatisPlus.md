# Integrating MybatisPlus

## Introduction

- MybatisPlus Github <https://github.com/baomidou/mybatis-plus>
- MybatisPlus Document <https://mybatis.plus/>

> 只要引入了mybatisPlus相关jar包，项目自动集成，兼容mybatisPlus 2.x和3.x的版本。

## How to use

1. use `mybatis-Plus` dependency.
<a href="http://mvnrepository.com/artifact/com.baomidou/mybatis-plus" target="_blank">
<img src="https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.svg" ></a>

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.0</version>
</dependency>
```

2. use `DS` annotation to switch datasource.

```java
@Service
@DS("mysql")
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @DS("oracle")
    publid void addUser(User user){
        //do something
        baseMapper.insert(user);
    }
}
```

## FAQ

1. **Why calling some mybatis plus methods failed to switch datasource**:question:

The built-in ServiceImpl in mp comes with transation that can be added, changed, removed, and so forth that you can not switch datasource.

Solution: write your own service method and call the baseMapper method. As the 'addUser' method above.

2. **Why take it out on the integration with Mybatisplus**:question:

Because mybatisPlus overrides some of the mybatis core classes, the actual proxy object must be resolved.

<https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/support/DataSourceClassResolver.java>