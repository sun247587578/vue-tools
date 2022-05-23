<template>
  <h1 class="ht-h1">
    <div class="h1-r-f">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="h1-text">
      <slot></slot>
    </div>
    <div class="h1-l-f">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </h1>
</template>

<script>
  import variables from "../../../assets/styles/variables.scss";
  export default {
    name: 'htH1',
    props: {

    },
    data(){
      return {
        color:variables.baseColor1,
      }
    }
  };
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
.ht-h1{
	font-family: MicrosoftYaHei;
	font-size: $ht-font-header;
	font-weight: 600;
	font-stretch: normal;
	letter-spacing: 0px;
	color: $ht-base-bg3;
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 1.1;
  align-items: center;
  min-width: 260px;
  &::before{
    content: "";
    display: block;
  }
}
.h1-text{
  margin:0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.exclass{
  display: inline-block;
  width:$ht-font-header;
  height: $ht-font-header;
  transform: skewX(-30deg);
  margin-right: 5px;
  margin-left: 5px;
}
.h1-r-f{
  min-width: 78px;
  span{
    @extend .exclass
  }
  span:nth-child(1){
    background-color: $ht-base-bg3;
  }
  span:nth-child(2){
    background-color: lighten($ht-base-bg3,20%);
  }
  span:nth-child(3){
    background-color: lighten($ht-base-bg3,40%);
  }
}
.h1-l-f{
  min-width: 78px;
  span{
    @extend .exclass
    
  }
  span:nth-child(3){
    background-color: $ht-base-bg3;
  }
  span:nth-child(2){
    background-color: lighten($ht-base-bg3,20%);
  }
  span:nth-child(1){
    background-color: lighten($ht-base-bg3,40%);
  }
}
</style>
