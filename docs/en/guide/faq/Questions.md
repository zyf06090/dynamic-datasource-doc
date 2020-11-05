# 常见问题

## 1. 升级最新版。

遇到文档不能解决的问题而你的版本又不是最新，首先建议你升级到新版。每个版本或多或少都修改了一些问题，可以看版本记录。


## 2. Failed to configure a DataSource

```
***************************
APPLICATION FAILED TO START
***************************

Description:

Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.

Reason: Failed to determine a suitable driver class


Action:

Consider the following:
	If you want an embedded database (H2, HSQL or Derby), please put it on the classpath.
	If you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).
```

解决方法： 绝大部分都是你是用了Druid,请仔细阅读Druid章节文档,排除Druid自动配置。

## 3. dynamic-datasource Please check the setting of primary

解决方法： 请设置一个master数据源为作为默认数据源，当然也可以通过spring.datasource.dynamic.primary来更改默认的数据源名称。