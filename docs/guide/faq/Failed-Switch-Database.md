# 数据源切换失败

## 1.开启了spring的事务。

原因： spring开启事务后会维护一个ConnectionHolder，保证在整个事务下，都是用同一个数据库连接。

更多事务问题 https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki/Transation-Questions 。

## 2.方法内部调用。

查看以下示例 回答 外部调用 `userservice.test1()` 能在执行到 `test2()` 切换到second数据源吗？  

```java
public UserService {

    @DS("first")
    public void test1() {
        // do something
         test2();
    }

    @DS("second")
    public void test2() {
        // do something
    }
}

```

答案：**！！！不能不能不能！！！！** 数据源核心原理是基于aop代理实现切换，内部方法调用不会使用aop。

解决方法:

把test2()方法提到另外一个service,单独调用。

## 3.shiroAop代理。

在shiro框架中(UserRealm)使用@Autowire 注入的类, 缓存注解和事务注解都失效。  

```
@Component
public class UserRealm extends AuthorizingRealm {

    @Lazy
    @Autowired
    private IUserService userService;
	//... 省略其他无关的内容
}
```

解决方法:  
1.在Shiro框架中注入Bean时, 不使用@Autowire, 使用ApplicationContextRegister.getBean()方法,手动注入bean。

2.使用@Autowire+@Lazy注解,设置注入到Shiro框架的Bean延时加载(推荐)。

## 4.PostConstruct初始化顺序。

初始化包括: @PostConstruct 注解, InitializingBean接口, 自定义init-method

```java
@Component
public class MyConfiguration {
    @Resource
    private UserMapper userMapper;
    @DS("slave")
    @PostConstruct
    public void init(){
        // 无法选择正确的数据源
        userMapper.selectById(1);
    }
}
```

解决方法：监听容器启动完成事件, 在容器完成后做初始化。

```java
@Component
public class MyConfiguration {

    @DS("slave")
    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event) {
        // 成功选择正确的数据源
        userMapper.selectById(1);
    }
}
```

相关spring源码 : `org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#initializeBean

在初始化完成后, bean 进入增强阶段, 所以这个阶段的任何AOP都是无效的。

## 5.Druid版本过低。

请升级druid1.2.22及以上版本，这个版本修复了在高并发下偶发的切换失效问题。

## 6.@Async或者java8的ParallelStream并行流之类方法。

这种情况都是新开了线程去处理，不受当前线程管控了。 可以在新开的方法上加对应的DS注解解决。

---

## 扩展阅读

### shiro失效原因

在spring初始化bean的阶段中,大致上分为三段: BeanFactoryPostProcessor -> BeanPostProcessor -> Bean
   
这三种都是单例bean. 只不过会按照这个优先级进行初始化, shiro引起AOP失效的原因: 

ShiroFilterFactoryBean 是一个 BeanPostProcessor ,  比普通的单例Bean都优先加载, 所以他依赖注入的bean都无法正确的进行切面。

ShiroFilterFactoryBean 实际的依赖情况:  
ShiroFilterFactoryBean ->  SecurityManager -> UserRealm -> IUserService

IUserService依赖的其他 service 也会失效
IUserService-> MenuService -> RoleService 
