// 悬浮按钮组件
<template>
  <div class="drag-box" v-drctDrag draggable="false" :style="local" v-if="visible">
    <div class="drag-box-shadow">
      <div class="box-header" style="line-height: 41px;">
        <slot name="title"></slot>
      </div>
      <div class="box-body">
        <!-- <div @click="addNode">添加节点</div>
              <div @click="removeNode">删除节点</div>
              <div @click="lockNode">锁定节点</div> -->
        <slot name="drag-body">没有传入的默认信息</slot>
      </div>
    </div>
  </div>
</template>

<script>
// import drctDrag from '@/src/directive/myDrag/index'
export default {
  // props:["title","local",{}],
  name: 'htDrag',
  componentName: 'htDrag',
  props: {
    local: {
      type: Object,
      default: () => {
        return {
          top: 0,
          left: 0,
        };
      },
    },
    visible: {
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    //
  },
};
</script>

<style lang="scss" scoped>
.drag-box {
  width: 100%;
  border-radius: 50%;
  position: fixed;
  top: 110px;
  right: 20%;
  // padding-left: 15px;
  // padding-top: 8px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 888;
  .drag-box-shadow {
    border: 1px solid #000c6e;
    border-radius: 8px;
    // overflow: hidden;
    box-shadow: 2px 2px 3px 0px rgba($color: #5982ff, $alpha: 1);
    padding-bottom: 8px;
    background: #fff;
  }
  .box-header {
    background: #000c6e;
    color: #fff;
    border-radius: 8px 8px 0 0;
    span:nth-child(1) {
      padding: 0 10px;
      font-size: 15px;
      font-weight: 600;
      background: #1c2689;
      border-radius: 8px 0 0 0;
      display: inline-block;
    }
    .el-icon-close {
      float: right;
      cursor: pointer;
      font-size: 20px;
      margin-top: 10px;
      margin-right: 10px;
      &:hover {
        font-size: 21px;
      }
    }
  }
  .box-body {
    // margin-top:10px;
    max-height: 70vh;
    // overflow: auto;
    & > .anniu {
      line-height: 30px;
      padding: 0 10px 0px 20px;
      &:hover {
        background: rgb(231, 224, 224);
      }
    }
  }
}
</style>
