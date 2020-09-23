# 动态解析数据源

默认有三个职责链来处理动态参数解析器 header->session->spel
所有以  `#`   开头的参数都会从参数中获取数据源。

```java
@DS("#session.tenantName")//从session获取
public List selectSpelBySession() {
	return userMapper.selectUsers();
}

@DS("#header.tenantName")//从header获取
public List selectSpelByHeader() {
	return userMapper.selectUsers();
}

@DS("#tenantName")//使用spel从参数获取
public List selectSpelByKey(String tenantName) {
	return userMapper.selectUsers();
}

@DS("#user.tenantName")//使用spel从复杂参数获取
public List selecSpelByTenant(User user) {
	return userMapper.selectUsers();
}
```

::: tip 如何扩展?

1. 我想从cookie中获取参数解析?

2. 我想从其他环境属性中来计算?

参考header解析器,继承DsProcessor,如果matches返回true则匹配成功,调用doDetermineDatasource返回匹配到的数据源,否则跳到写一个解析器.
:::

1. 自定义一个处理器。
```java
public class DsHeaderProcessor extends DsProcessor {

    private static final String HEADER_PREFIX = "#header";

    @Override
    public boolean matches(String key) {
        return key.startsWith(HEADER_PREFIX);
    }

    @Override
    public String doDetermineDatasource(MethodInvocation invocation, String key) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request.getHeader(key.substring(8));
    }
}
```

2. 重写完后重新注入一个根据自己解析顺序的解析处理器.

```java
   @Bean
   @ConditionalOnMissingBean
   public DsProcessor dsProcessor() {
        DsHeaderProcessor headerProcessor = new DsHeaderProcessor();
        DsSessionProcessor sessionProcessor = new DsSessionProcessor();
        DsSpelExpressionProcessor spelExpressionProcessor = new DsSpelExpressionProcessor();
        headerProcessor.setNextProcessor(sessionProcessor);
        sessionProcessor.setNextProcessor(spelExpressionProcessor);
        return headerProcessor;
   }
```



