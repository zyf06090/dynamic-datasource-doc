# 事务问题汇总

### 问：使用了事务如@Transational 无法切换数据源？ 

答： 是的，本组件是基于springAop的方案来进行多数据源的管理和切换的，要想保证多个库的整体事务则需要分布式事务。


### 问：为什么使用了事务如@Transational就无法切换数据源？

答：开启了事务后，spring事物管理器会保证在事务下整个线程后续拿到的都是同一个connection。


### 问：事务下无法切换数据源我知道了，那我单库的事务的可以用吗？

答：完全可以的。 只要事务下不切换数据源就OK。


### 问：我的业务必须要保证事务，还有什么解决办法？

答：seata就是解决此问题，本组件已完成和seata的自动集成。

文档和示例项目如下https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki/Integration-With-Seata 。


### 问：seata又好复杂啊，还要搭建专门环境，还有没有其他方案？

答： 如果数据源只有几个，又不怕复杂，可以放弃本组件。

尝试手动构建数据源结合JTA方案 如 https://www.cnblogs.com/cicada-smile/p/13289306.html。

本文不做详解，如果连接失效或者还是不清楚可以自行搜索 ***多数据源JTA***。

---

不过我们正在探索一些简单的方法：如链式事务和直接代理connection，敬请期待。 欢迎有志之士共同参与。

---

另外建议不理解或不清楚分布式事务的同学，自行先通过搜索引擎 ***分布式事务*** 和 ***CAP定理*** 学习相关概念。

程序员小灰的分布式事务 <https://blog.csdn.net/bjweimengshu/article/details/79607522>

程序员小灰的CAP定理 <https://blog.csdn.net/bjweimengshu/article/details/79338859>