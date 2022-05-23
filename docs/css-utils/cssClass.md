# 固定 css 样式

::: warning
() 括号内的东西代表或者的意思
:::

## 浮动

- .fl(pull-left) 左浮动
- .fr(pull-right) 右浮动

## 清除浮动

```
.clearfix


```

## 内外边距

- **_.ml(5,10,15,20,25,30)_** 元素距离 `左` 边的外边距 margin-right:(5,10,15,20,25,30)px
- **_.mr(5,10,15,20,25,30)_** 元素距离 `右` 边的外边距 margin-left:(5,10,15,20,25,30)px
- **_.mt(5,10,15,20,25,30)_** 元素距离 `上` 边的外边距 margin-top:(5,10,15,20,25,30)px
- **_.mb(5,10,15,20,25,30)_** 元素距离 `下` 边的外边距 margin-bottom:(5,10,15,20,25,30)px

- **_.pl(5,10,15,20,25,30)_** 元素距离 `左` 边的内边距 padding-right:(5,10,15,20,25,30)px
- **_.pr(5,10,15,20,25,30)_** 元素距离 `右` 边的内边距 padding-left:(5,10,15,20,25,30)px
- **_.pt(5,10,15,20,25,30)_** 元素距离 `上` 边的内边距 padding-top:(5,10,15,20,25,30)px
- **_.pb(5,10,15,20,25,30)_** 元素距离 `下` 边的内边距 padding-bottom:(5,10,15,20,25,30)px

## 阴影

```css
.ht-shadow
```

::: demo

```html
<div style="width:200px;height:200px;" class="ht-shadow">注意看背景的阴影</div>
```

:::

## table 表格

::: demo

```html
<table class="ht-table ht-table--stripe ht-table--head ht-table--boder">
  <thead>
    <tr>
      <th>表头1</th>
      <th>表头2</th>
      <th>表头3</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in 10" :key="index">
      <td>内容1</td>
      <td>内容2</td>
      <td>内容3</td>
    </tr>
  </tbody>
</table>
```

:::


# ht-kj-font1

::: demo

```html
<template>
  <div class="map-views bg-blcak">
    <span class="ht-kj-font1">这是一个发光的字</span>
  </div>
</template>
```

:::


# ht-remove-margin
移除margin造成的影响
