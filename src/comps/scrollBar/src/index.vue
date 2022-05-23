<template>
  <el-scrollbar ref="scrollContainer" :viewStyle="disViewStyle" :wrapStyle="wrapStyle" :wrapClass="wrapClass" :viewClass="viewClass" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script>
export default {
  name: "htScrollBar",
  props: {
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
  },
  data() {
    return {
      left: 0
    }
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap
    },
    disViewStyle(){
      let re = Object.assign({},this.viewStyle);
      if(Object.keys(re).length>0){

        re.overflow = "hidden";
      }
      return re
    }
  },
  mounted() {
    this.scrollWrapper.addEventListener('scroll', this.emitScroll, true)
  },
  beforeDestroy() {
    this.scrollWrapper.removeEventListener('scroll', this.emitScroll)
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    emitScroll() {
      this.$emit('scroll')
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      padding-bottom: 6px;
      padding-right: 6px;
    }
  }
}
</style>
