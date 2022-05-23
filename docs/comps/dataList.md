
# 数据展示列表

## 基本用法

用来展示数据 

::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据</ht-dl>
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据</ht-dl>
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据</ht-dl>
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据</ht-dl>
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据</ht-dl>
    <ht-dl ht-label="测试标题" htLabelWidth="80px">测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据测试展示数据</ht-dl>
  </div>
</template>
```
:::



## 标题带有dom元素

::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-dl htLabelWidth="80px">
        <template slot="ht-dl-label">
          <i class="el-icon-share"></i>
        </template>
        <div>
            <i class="el-icon-delete"></i>
            测试展示数据
        </div>
        
      </ht-dl>
  </div>
</template>
```
:::


## 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
slot|插槽ht-dl-label|dom|-|空
ht-label|左边的标题|String|-|''
ht-label-width|左边的标题宽度|String|-|'80px'
