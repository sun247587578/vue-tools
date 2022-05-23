# div布局

## 一列定宽，其余的平分剩余的宽度

实现方式有很多种，这个css工具类是使用flex

::: demo 
```html
<template>
  <div class="parentView htflex ml5">
    <div class="guding"></div>
    <div class="other"></div>
    <div class="other"></div>
    <div class="other"></div>
  </div>
</template>

<style lang="scss" scoped>
  .parentView{
    width:100%;
    height:80px;
    border:1px solid #ccc;
  }
  .guding{
    flex: inherit;
    width:100px;
  }
  .other{
    border:1px solid #ccc;
  }
</style>
```
:::
