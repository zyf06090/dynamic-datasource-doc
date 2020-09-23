# 集成MybatisPlus

## 基础介绍

- MybatisPlus Github <https://github.com/baomidou/mybatis-plus>
- MybatisPlus 文档 <https://mybatis.plus/>

> 只要引入了mybatisPlus相关jar包，项目自动集成，兼容mybatisPlus 2.x和3.x的版本。

## 使用方法

1. 项目引入 `mybatis-Plus` 依赖。
<a href="http://mvnrepository.com/artifact/com.baomidou/mybatis-plus" target="_blank">
<img src="https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.svg" ></a>

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.0</version>
</dependency>
```

2. 使用`DS`注解进行切换数据源。

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

1. **为什么直接调用某些方法切换数据源失败**:question:

mp内置的ServiceImpl在新增,更改,删除等一些方法上自带事物导致不能切换数据源。

解决办法:写自己的service方法,调用baseMapper的方法. 如上面的`addUser`方法。

2. **为什么要单独拿出来说和mybatisPlus的集成**:question:

因为mybatisPlus重写了一些核心类，必须通过解析获得真实的代理对象。

<https://github.com/baomidou/dynamic-datasource-spring-boot-starter/blob/master/src/main/java/com/baomidou/dynamic/datasource/support/DataSourceClassResolver.java>