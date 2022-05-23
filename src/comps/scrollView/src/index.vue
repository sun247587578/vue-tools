<template>
  <div class="ht-scroll-view" ref="scroView" :style="genViewStyle">
    <!-- <div class="ht-scroll-scroller"> -->
    
    <div class="ht-scroll-content"  :style="genContentStyle">
      <slot></slot>
      <!-- <div class="ddd" v-for="(item,index) in 50" :key="index">Cell {{index}}</div> -->
    </div>
    <button v-if="showBtn" :disabled="enabell" type="button" @click.stop.prevent="toPrev" class="ht-scroll-control-left"><i class="el-icon-arrow-left"></i></button>
    <!-- <button :disabled="scrollInfo.y>=parseInt(this.viewsWidth)" type="button" @click="toNext" class="ht-scroll-control-right"><i class="el-icon-arrow-right"></i></button> -->
    <button v-if="showBtn" :disabled="enabelr" type="button" @click.stop.prevent="toNext" class="ht-scroll-control-right"><i class="el-icon-arrow-right"></i></button>
    <!-- </div> -->
  </div>
</template>

<script>
// import variables from "../../../assets/styles/variables.scss";
import IScroll from "../../../lib/iscroll";
export default {
  name: "htScrollView",
  props: {
    viewsHeight: {
      // 视图区域的高度,
      type: String,
      default: "40px",
    },
    viewsWidth: {
      // 视图区域的宽度,
      type: String,
      default: "2000px",
    },
    showScrollBar: {
      // 是否显示滚动条
      type: Boolean,
      default: false,
    },
    canClick: {
      // 是否可以点击滚动视图中的内容
      type: Boolean,
      default: true,
    },
    scrollX: {
      type: Boolean,
      default: true,
    },
    scrollY: {
      type: Boolean,
      default: false,
    },
    mouseWheel: {
      type: Boolean,
      default: true,
    },
    showBtn:{
      type:Boolean,
      default:false,
    },
    
  },
  data() {
    return {
      // color:variables.baseColor1,
      myScroll: null,
      xScroll:0,
      enabelr:false,
      enabell:true,
    };
  },
  computed: {
    genViewStyle() {
      // let pr;
      // if(this.showBtn){
      //   w = (this.viewsWidth - (20*2))+"px";
      //   ml = mr = "20px";
      // }
      return {
        height: this.viewsHeight,
      };
    },
    genContentStyle() {
      let cw = parseInt(this.viewsWidth)
      let w,ml,mr;
      if(this.showBtn){
        w = (cw + (20*2))+"px";
        ml = mr = "20px";
      }else{
        w = cw+"px"
      }
      return {
        height: this.viewsHeight,
        width: w,
        marginLeft:ml,
        marginRight:mr,
      };
    },
    viewW(){
      if(this.$el){
        return this.$el.offsetWidth
      }else{
        return 0
      }
    },
    
  },
  methods: {
    initView() {
      this.$nextTick((r) => {
        this.myScroll = new IScroll(this.$el, {
          zoom: true,
          scrollX: this.scrollX,
          scrollY: this.scrollY,
          mouseWheel: this.mouseWheel,
          click: this.canClick,
          scrollbars: this.showScrollBar,
          interactiveScrollbars: true,
          shrinkScrollbars: 'scale',
          fadeScrollbars: true,
        });
        this.myScroll.on("scrollEnd",this.scrollFun)
      });
    },
    scrollFun(){
       if(this.$el){
         if(Math.abs(this.myScroll.x) == 0){
           this.enabell = true
         }else{
           this.enabell = false;
         }
         if(Math.abs(this.myScroll.x) >= (parseInt(this.viewsWidth)-this.$el.offsetWidth)){
           this.enabelr = true;
         }else{
           this.enabelr = false;
         }
         return 
       }
    },
    toPrev(){
      let num = Math.abs(this.myScroll.x)-100;
      this.myScroll.scrollTo(-num,0,100);
    },
    toNext(){
      let num = Math.abs(this.myScroll.x)+100;
      this.myScroll.scrollTo(-num,0,100);
    }
  },
  mounted() {
    this.initView();
  },
  destroyed() {
    if (this.myScroll) {
      if(this.myScroll.destory){

        this.myScroll.destory();
      }
    }
    this.myScroll = null;
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
.ht-scroll-view {
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  &:hover{
    .ht-scroll-control-left{
      display: block;
      opacity: 1;
    }
    .ht-scroll-control-right{
      display: block;
      opacity: 1;
    }
  }
}
.ht-scroll-content {
  list-style: none;
  padding: 0;
  margin: 0;
}
@mixin dc {
  position: absolute;
  display: none;
  border: none;
  background: transparent;
  font-size: 20px;
  padding: 0;
  margin: 0;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0;
  transition: all 1s inherit; 
  width: 20px;
  overflow: hidden;
  &:disabled{
    cursor: no-drop;
  }
}
.ht-scroll-control-left{
  @include dc;
  left: 0;
}
.ht-scroll-control-right{
  @include dc;
  right: 0;
}
</style>
