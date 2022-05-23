<template>
  <div class="ht-data-list">
    <span class="ht-dl-label" :style="labelStyle">
      <slot name="ht-dl-label">{{htLabel}}</slot>  
    </span>
    <strong class="ht-dl-r-line"></strong>
    <div class="ht-dl-content" :style="labelContentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import variables from "../../../assets/styles/variables.scss";
  export default {
    name: 'htDl',
    props: {
      htLabel: {
        type: String,
      },
      htLabelWidth: {
        type: String,
        default:"80px"
      },
    },
    data(){
      return {
        color:variables.baseColor1,
      }
    },
    computed:{
      labelStyle(){
        return {width:this.htLabelWidth}
      },
      labelContentStyle(){
        return {marginLeft:this.htLabelWidth}
      }
    }
  };
</script>
