# 本地多数据源事务

## 背景

多数据源事务方案一直是一个难题，通常的解决方案有二种。

1. 利用atomiks手动构建多数据源事务，适合数据源较少，配置的参数也不太多的项目。难点就是手动配置量大，需要耗费一定时间。
2. 用seata类似的分布式事务解决方案。难点就是需要搭建如seata-server的统一管理中心。

每一种方案都有其适用场景，本项目作者常常收到的问题就是。
1. 为什么事务下切换数据源失败？ 
2. 有没有不依赖第三方的方案？

## 基础介绍

自从3.3.0开始，由seata的核心贡献者https://github.com/a364176773 贡献了基于connection代理的方案。

原理后文介绍，初版肯定也有会很多问题，希望大家多提意见。

完整示例项目 https://github.com/dynamic-datasource/dynamic-datasource-samples/tree/master/tx-local-sample

1. 在需要事务的方法上加@DSTran.
```java


```



