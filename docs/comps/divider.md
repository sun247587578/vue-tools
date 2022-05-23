# 分割线
也可以当做标题使用 


::: demo 
```html
<template>
  <div>
    <ht-divider>
      <div class="pad-scral">
        <div class="pad-scral-title">个人信息</div>
      </div>
    </ht-divider>  
  </div>
</template>

<style lang='scss' scoped>

.pad-scral{
  padding: 0 20px;
  background: rgb(255 255 255);
  &-title{
    border: 1px solid rgb(24, 156, 173);
    padding: 5px 20px;
    border-radius: 20px;
  }
}

</style>
```
:::

### 文字分割

::: demo 
```html
<template>
  <div>
    大海
    <ht-divider direction="vertical"></ht-divider>
    无量
  </div>
</template>
```
:::

### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
slot|-|dom|-|空
direction|设置分割线方向|String|horizontal / vertical|'horizontal'
content-position|设置分割线文案的位置|String|left / right / center|'center'

## title
一个简单的title
::: demo 
```html
<template>
  <ht-divider>
    <div class="ht-divider--title">车主信息</div>
  </ht-divider>
</template>
```
:::
