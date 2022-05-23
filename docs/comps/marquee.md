# 无缝滚动
主要用来展示数据,没有点击交互那种的,自动滚动,无法使用鼠标滚轮控制 , 仅有的效果为鼠标移入停止,移除正常滚动

::: demo 
```html
<template>
  <ul style="height:100px;overflow:hidden">
    <ht-marquee>
        <li>需要展示的数据1</li>
        <li>需要展示的数据2</li>
        <li>需要展示的数据3</li>
        <li>需要展示的数据4</li>
        <li>需要展示的数据5</li>
    </ht-marquee>
  </ul>
</template>
```
:::

::: demo 
```html
<template>
  <ul style="height:50px;overflow:hidden;">
    <ht-marquee direction="left">
      <div class='clearfix' style="width:2000px">
        <li class='fl'>需要展示的数据1</li>
        <li class='fl'>需要展示的数据2</li>
        <li class='fl'>需要展示的数据3</li>
        <li class='fl'>需要展示的数据4</li>
        <li class='fl'>需要展示的数据5</li>
      </div>
        
    </ht-marquee>
  </ul>
</template>
```
:::
### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
data|用来监听数据变化,重新刷新视图,如果不更新视图这个可以不传|Array|-|[]
disabled|是否禁用|Boolean|true/false|false
<!-- direction|滚动方向|String|'up', 'down', 'left', 'right'|'up' -->
auto|自动滚动,如果是false,则是鼠标进入并离开后开始滚动|String|true,false|true
speed|滚动速度,数值越大速度越快|Number|-|1
waitTime|间隔滚动停顿等待时间|Number|-|3000
scrollLength|间隔滚动，每次滚动的长度，单位px,当为零的时候是一直滚动那种|Number|-|0


# dataScroll 组件使用
