# 滚轮横向滚动视图
在某些情况下我们不希望使用纵向滚动 , 支持滚轮和拖拽快速滑动


::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-scroll-view views-height="103px" :views-width="50*200+100+'px'">
      <div class="content-item" v-for="item in 50" :key="item">内容{{item}}</div>
    </ht-scroll-view>
  </div>
</template>

<style>
.content-item{
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  text-align: center;
  float: left;
}

</style>
```

:::

### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
views-height|视图区域的高度|String|-|"40px"
views-width|内容部分的宽度|String|-|"2000px"
show-scroll-bar|是否显示滚动条|Boolean|-|false
can-click|是否可以点击滚动视图中的内容|Boolean|-|true

# 简化版
简化版支持鼠标点击滑动, 仅支持鼠标滚轮


::: demo 
```html
<template>
  <div class="map-views pd10 ">
    <ht-scroll-bar :viewStyle="{width:50*(100-30)+30+'px'}">
      <div class="scroll-content" v-for="(item,index) in 50" :key="item" :class="{'active':radio1==('item'+item)?'red':''}" :style="{transform:`translateX(-${index*30}px)`,zIndex:(50-index)}">
          <ht-tab-select2 v-model="radio1" :label="'item'+item" >
            <span>{{radio1==('item'+item)}}/{{item}}</span>
          </ht-tab-select2>
        </div>
    </ht-scroll-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1:"item1",
    };
  },
};
</script>
<style lang='scss' scoped>

.scroll-content{
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  text-align: center;
  // float: left;
  display: inline-block;
  background: #eee;
  border-radius: 0px 30px 0px 30px;
    line-height: 30px;
    position: relative;
  &:hover{
    z-index:1000 !important;
    border:1px solid  #7688d7;
  }
  
  &.active{
    border:1px solid #5688d7;
    z-index:1000 !important;
  }
}


</style>
```