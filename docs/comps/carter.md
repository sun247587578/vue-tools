
# carter

## 基本用法

用来展示数据

::: demo 
```html
<template>
  <div>
    <ht-carter ht-title="展示的内容的头">
        <div>
          <div class="pd20">你好哈</div>
        </div>
      </ht-carter> 
  </div>
</template>
```
:::

头中带有图片或者图标


::: demo 
```html
<template>
  <div>
    <ht-carter ht-title="表头">
        <div slot="header">表头 <i class="el-icon-star-off"></i></div>  
        <div>
          <div class="pd20">你好哈</div>
        </div>
      </ht-carter> 
  </div>
</template>
```
:::

## 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
ht-title|表头文字|String|-|空字符串
slot|插槽|dom|-|空
ht-border|是否显示边框|Boolean|true/flase|true


