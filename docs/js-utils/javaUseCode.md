# 常用java代码

## 后端配置dist静态文件
```java
//结合前端静态文件后添加
filterChainDefinitionMap.put("/dist/**", "anon");
```

## 查看进程
```sh
jps -l
```