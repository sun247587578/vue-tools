# 引言

主要是提炼了项目开发中使用的一些通用js方法 比如日期格式化, List类型的数据转Tree类型........

## 引入

```js
import htUtils from "hangtian-ui/src/utils/index"
```


## 单独引入方法

```js
import {parseTime} from "hangtian-ui/src/utils/index";
```

## 使用

```js
htUtils.parseTime()
```

## 全局引入

在main.js中引入, 并将其绑定在Vue 或者 Windows上

```js
import htUtils from "hangtian-ui/src/utils/index"
Vue.prototype.htUtils =  htUtils;
// Windows.htUtils = htUtils;


在其他.vue文件中可直接使用

this.htUtils.parseTime();

// Windows.htUtils.parseTime();
```