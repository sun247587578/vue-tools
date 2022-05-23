# el-dialog 拖拽

## 使用方式

```

<el-dialog title="提示" v-dialogDrag :visible.sync="dialogVisible" width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

```

## 示例

::: demo 
```html 
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  v-dialogDrag
  title="提示"
  top="15vh"
  :visible.sync="dialogVisible"
  width="30%"
  >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      
    }
  };
</script>
```
:::

# v-drctDrag 

[ht-drag](/comps/drag.html)组件使用此指令

::: danger
使用此指令的元素必须具有相对或者绝对定位, 也就是样式上带有 position:fixed/absloute
:::

指令的功能类似于el-dialog的v-dialogDrag功能类似