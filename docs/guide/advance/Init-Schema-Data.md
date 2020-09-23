# 启动初始化执行脚本

```yml
spring:
  datasource:
    dynamic:
      primary: order
      datasource:
        order:
          # 基础配置省略...
          schema: db/order/schema.sql # 配置则生效,自动初始化表结构
          data: db/order/data.sql # 配置则生效,自动初始化数据
          continue-on-error: true # 默认true,初始化失败是否继续
          separator: ";" # sql默认分号分隔符，一般无需更改
        product:
          schema: classpath*:db/product/schema.sql
          data: classpath*:db/product/data.sql
        user:
          schema: classpath*:db/user/schema/**/*.sql
          data: classpath*:db/user/data/**/*.sql
```