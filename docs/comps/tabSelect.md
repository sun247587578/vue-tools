# tab选择项
类似于tab 



# ht-tab-select2
::: demo 
```html
<template>
  <ht-tab-select2 v-model="selectTab" label="上海"></ht-tab-select2>
  <ht-tab-select2 v-model="selectTab" label="深圳"></ht-tab-select2>
  <ht-tab-select2 v-model="selectTab" label="北京"></ht-tab-select2>
</template>
<script>
export default {
  data() {
    return {
      selectTab:"上海",
    };
  },
};
</script>
<style>
.bg-red{
  background: red;
}

</style>
```
:::

- 自定义聚焦内容
::: demo 
```html
<template>
  <ht-tab-select2 v-model="selectTab" label="上海">
    <div :class="{'bg-red':selectTab=='上海'}">上海</div>
  </ht-tab-select2>
  <ht-tab-select2 v-model="selectTab" label="天津">
    <div :class="{'bg-red':selectTab=='天津'}">天津</div>
  </ht-tab-select2>
  <ht-tab-select2 v-model="selectTab" label="北京">
    <div :class="{'bg-red':selectTab=='北京'}">北京</div>
  </ht-tab-select2>
</template>
<script>
export default {
  data() {
    return {
      selectTab:"上海",
    };
  },
};
</script>
<style>
.bg-red{
  background: red;
}

</style>
```
:::

- tab-group组合使用
::: demo 
```html
<template>
  <ht-tab-group v-model="selectTab">
    <ht-tab-select2 label="上海"></ht-tab-select2>
    <ht-tab-select2 label="深圳"></ht-tab-select2>
    <ht-tab-select2 label="北京"></ht-tab-select2>
  </ht-tab-group>
</template>
<script>
export default {
  data() {
    return {
      selectTab:"上海",
    };
  },
};
</script>
<style>
.bg-red{
  background: red;
}

</style>
```
:::


### 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
label|项目值|String|-|-
name|name属性|String|-|-





- ht-tab-select2组合ht-h3使用
::: demo 
```html
<template>
  <ht-tab-select2 v-model="selectTab" label="案件基本信息">
    <span style="display: inline-block;">
      <ht-h3 :active="selectTab==='案件基本信息'"><span style="line-height:30px">案件基本信息</span></ht-h3>
    </span>
  </ht-tab-select2>
  <ht-tab-select2 v-model="selectTab" class="ml20" label="相关刑事案件信息">
    <span style="display: inline-block;">
      <ht-h3 :active="selectTab==='相关刑事案件信息'"><span style="line-height:30px">相关刑事案件信息</span></ht-h3>
    </span>
  </ht-tab-select2>
</template>
<script>
export default {
  data() {
    return {
      selectTab:"案件基本信息",
    };
  },
};
</script>
<style>


</style>
```
:::


# ht-tab-select3


::: demo 
```html
<template>
  <div class="map-views bg-blcak">
    <ht-tab-select3 :menu-list="menuList" :act-index="actIndex" @change="actChange"></ht-tab-select3>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menuList:["车辆档案","物品档案","案件档案","手机档案"],
      actIndex:4,
    }
  },
  methods:{
    actChange(item){
      console.log(item)
    }
  },
  mounted(){
  }
}
</script>
```
:::
