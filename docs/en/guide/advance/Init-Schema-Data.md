# Init schema and data

```yml
spring:
  datasource:
    dynamic:
      primary: order
      datasource:
        order:
          schema: db/order/schema.sql 
          data: db/order/data.sql 
          continue-on-error: true
          separator: ";"
        product:
          schema: classpath*:db/product/schema.sql
          data: classpath*:db/product/data.sql
        user:
          schema: classpath*:db/user/schema/**/*.sql
          data: classpath*:db/user/data/**/*.sql
```