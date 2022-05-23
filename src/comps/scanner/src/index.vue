<template>
  <div class="ht-scanner">
    <div class="ht-scanner--line" v-if="isScanner"></div>
    <div class="ht-scanner--content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "htScanner",
  props: {
    borderPlace: {
      type: String,
      default: '1,2,3,4',
    },
    isScanner:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/global/mixins/mixins.scss";
@mixin aft {
  content: "";
  display: block;
  position: absolute;
  width: 3vw;
  height: 3vw;
  border: 0.2rem solid transparent;
}
@include b(scanner) {
  width: 100%;
  height: 100%;
  border: 0.1rem solid rgba(3, 169, 244, 0.2);
  position: relative;
  overflow: hidden;
  &::after,&::before{
    @include aft;
    
  }
  &::after{
    top: 0;
    left:0;
    border-top-color: $ht-base-border1;
    border-left-color: $ht-base-border1;
  }
  &::before{
    top: 0;
    right:0;
    border-top-color: $ht-base-border1;
    border-right-color: $ht-base-border1;
  }
  @include m(line){
    position: absolute;
    height: calc(100% - 2px);
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #03a9f4 211%);
    border-bottom: 2px solid #03a9f4;
    transform: translateY(-100%);
    animation: radar-beam 4s infinite;
    animation-timing-function: cubic-bezier(0.3, 0, 0.43, 0.7);
    animation-delay: 1.4s;
  }
  @include m(content){
    width: 100%;
    height: 100%;
    &::after,&::before{
      @include aft;
    }
    &::after{
      bottom: 0;
      left:0;
      border-bottom-color: $ht-base-border1;
      border-left-color: $ht-base-border1;
    }
    &::before{
      bottom: 0;
      right:0;
      border-bottom-color: $ht-base-border1;
      border-right-color: $ht-base-border1;

    }
  }
}
// .ht-scanner{
//   width:100%;
//   height: 100%;
//   border: 0.1rem solid rgba(3, 169, 244, 0.2);
//   position: relative;
//   min-height: 200px;
//   .ht-line{
//     height: calc(100% - 2px);
//     width: 100%;
//     background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #03a9f4 211%);
//     border-bottom: 2px solid #03a9f4;
//     transform: translateY(-100%);
//     animation: radar-beam 2s infinite;
//     animation-timing-function: cubic-bezier(0.3, 0, 0.43, 0.7);
//     animation-delay: 1.4s;
//   }
//   .ht-content{
//     &::before,&::after{
//       content: '';
//       display: block;
//       position: absolute;
//       width: 3vw;
//       height: 3vw;
//       border: 0.2rem solid rgb(0 0 0 / 0%);
//       /* border: 0.2rem solid rgb(0 0 0 / 0%); */
//       background: rgb(255 0 0);
//     }
//     &::before,&::after{
//       top: 0;
//       border-top-color: #03a9f4;
//     }
//   }
// }
@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>