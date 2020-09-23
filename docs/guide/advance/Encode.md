# 数据库敏感字段加密

支持`url , username, password` 的加密。

1. `ENC(xxx)` 中包裹的xxx即为使用加密方法后生成的字符串。

```yml
spring:
  datasource:
    dynamic:
      datasource:
        master:
          url: ENC(xxxxx)
          username: ENC(xxxxx)
          password: ENC(xxxxx)
          driver-class-name: com.mysql.jdbc.Driver
```

2. 获得加密字符串

```java
import com.baomidou.dynamic.datasource.toolkit.CryptoUtils;

public class Demo {

    public static void main(String[] args) throws Exception {
        String password = "123456";

        String encodePassword = CryptoUtils.encrypt(password);
        System.out.println(encodePassword);

        //自定义publicKey
        String[] arr = CryptoUtils.genKeyPair(512);
        System.out.println("privateKey:" + arr[0]);
        System.out.println("publicKey:" + arr[1]);
        System.out.println("password:" + CryptoUtils.encrypt(arr[0], password));
    }
}
```