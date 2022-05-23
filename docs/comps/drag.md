# 屏幕拖动框

屏幕上可以拖动的一个显示框

## 基本用法

可以当作菜单栏使用

::: demo 
```html
<template>
  <el-button @click="dialogToolsVisible = true">打开悬浮菜单</el-button>
  <ht-drag style="width:240px" :local="{top:'64px',left:'80%'}" :visible.sync="dialogToolsVisible">
      <template slot="title">
        <div><span>节点管理</span> <span style="float:right" class="el-icon-close" @click="dialogToolsVisible = false"></span></div>
        
      </template>
      <template slot="drag-body">
        <div class="btn-list">
          <el-button>操作按钮</el-button>
        </div>
        本区域的内容以及头部内容可以自己定义
      </template>
    </ht-drag>
</template>

<script>
  export default {
    data() {
      return {
        dialogToolsVisible:false,
      }
    }
  }
</script>
```
:::


::: warning
暂时没有做自定义颜色，待后续完善
:::

## 参数

参数|说明|类型|可选值|默认值
---|---|---|---|---
local|一般用来制定位置,实际上是绑定在外层的style上|Object|-|{ top: 0, left: 0}
visible|控制现实隐藏|boolean|true/false|false

