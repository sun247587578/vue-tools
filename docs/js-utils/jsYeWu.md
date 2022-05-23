# 业务型方法

> 存放路径 : vue-hangtian-ui/src/utils/auth.js
- 获取token getToken
- 设置token setToken
- 返回首页
```js
export function toHome(){
  let homeUrl;
  if(process.env.NODE_ENV !== "development"){
    homeUrl= window.location.protocol+"//" + window.location.hostname+":8082/xzpt/dist/index.html";
    window.location.href = homeUrl
  }else{
    homeUrl = window.location.origin
    window.location.href = homeUrl
  }
}
```

