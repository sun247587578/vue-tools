
# 数据展示框

## ht-dv

用来展示数据 , 因为角框的原因,所以该展示组适用于最低宽高不低于100px的

::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dv>
      <div style="height:200px;width:100%">数据展示</div>
    </ht-dv>
  </div>
</template>
```
:::

## ht-dv2


::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dv2>
      <div style="height:200px;width:100%">数据展示</div>
    </ht-dv2>
  </div>
</template>
```
:::




## ht-dv3


::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dv3 ht-border="1,4">
      <div style="height:200px;width:100%">数据展示</div>
    </ht-dv3>
  </div>
</template>
```
:::


### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
slot|插槽|dom|-|空
ht-border|是否显示边框|String|'1,2,3,4'|'1,4',顺序为坐上,右上,左下,右下



## ht-dv4


::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dv4 ht-position="top">
        <div style="height:200px;width:100%">数据展示</div>
      </ht-dv4>
  </div>
</template>
```
:::


### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
slot|插槽|dom|-|空
ht-position|特殊边框的位置|String|'top/left/right/bottom'|'top'

## ht-scanner


::: demo 
```html
<template>
  <div style="height:300px;width:100%">
    <ht-scanner :is-scanner="true">
      <img src="">
    </ht-scanner>
  </div>
</template>
```
:::

### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
is-scanner|是否开启扫描|Boolean|true/false|false