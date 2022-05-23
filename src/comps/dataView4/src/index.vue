<template>
  <div class="ht-dv4">
    <svg class="ht-dv-header-svg" :class="positionStyle" width="9px" height="148px" viewBox="0 0 9 148" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1264.000000, -684.000000)">
                <g transform="translate(1265.000000, 685.000000)">
                    <polygon :fill="color" points="8 3 3 14 3 132 8 143"></polygon>
                    <polyline :stroke="color" points="7 0 -1.94289029e-16 12 0 133 7 146"></polyline>
                </g>
            </g>
        </g>
    </svg>
    <!-- </div> -->
    <div class="dv-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htDv4",
  props: {
    htPosition: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      color: variables.baseColor1,
      
    };
  },
  computed:{
    positionStyle(){
      if(this.htPosition == "top"){
        return "ht-transform-t"
      }else if(this.htPosition == "left"){
        return "ht-transform-l"
      }else if(this.htPosition == "bottom"){
        return "ht-transform-b"
      }else if(this.htPosition == "right"){
        return "ht-transform-r"
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
$svgHeight:148px;
.ht-dv4 {
  position: relative;
  min-width: $svgHeight;
  min-height: $svgHeight;
  padding: 10px;
  height: 100%;
  // min-height: 100px;
  // border-radius: 20px;
  border: 1px solid $ht-base-border;
  
}
.ht-dv-header-svg{
  position: absolute;
}
.ht-transform-l{
  top: 50%;
  left: 0px;
  transform: rotate( 180deg)
  translate(0, 50%);
}
.ht-transform-t{
  top: -66px;
  left: 50%;
  transform: rotate( 270deg)
  translate(50%, 0);
}
.ht-transform-r{
    top: 50%;
    right: 0px;
    transform: rotate(
0deg) translate(0, -50%);
}
.ht-transform-b{
  bottom: -66px;
  left: 50%;
  transform: rotate( 90deg)
  translate(50%, 0);
}
</style>
