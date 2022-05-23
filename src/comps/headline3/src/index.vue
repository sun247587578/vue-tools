<template>
  <h2 class="ht-h3" >
    <div class="ht-h3-bg" :class="active ?'ht-h3-active':''"></div>
    <div class="ht-h3-content" :class="active ?'ht-h3-active':''">
      <slot></slot>
    </div>
  </h2>
</template>

<script>
  import variables from "../../../assets/styles/variables.scss";
  export default {
    name: 'htH3',
    props: {
      active:{
        type:Boolean,
        default:false,
      }
    },
    
    data(){
      return {
        color:variables.baseColor1,
      }
    },
    mounted(){
    }
  };
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
.ht-h3{
  
  padding-left: 1.5rem;
	font-family: MicrosoftYaHei;
	font-size: $ht-font-base;
	color: $ht-font-color;
  margin: 0px;
  position: relative;
  padding-top: 2px;
  padding-bottom:2px;
  
}
.ht-h3-bg{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-image: linear-gradient( to right,
		lighten($ht-base-bg3,20%),
		lighten($ht-base-bg3,80%) );
  transform: skewX(-15deg);
  border-left:6px solid $ht-base-bg3;
  
}
.ht-h3-content{
  position: relative;
  z-index: 1;
  color: $ht-font-color1;
  &.ht-h3-active{
    color: $ht-font-color;
  }
}
.ht-h3-bg.ht-h3-active{
  background-image: linear-gradient( to right,
    lighten($ht-base-bg4,30%),
    lighten($ht-base-bg4,80%) );
  border-left:6px solid $ht-base-bg4;
}
  
</style>
