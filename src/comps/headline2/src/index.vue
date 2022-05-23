<template>
  <h2 class="ht-h2">
    <slot></slot>
  </h2>
</template>

<script>
  import variables from "../../../assets/styles/variables.scss";
  export default {
    name: 'htH2',
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
// @import "../../../assets/styles/variables.scss";
// .ht-h2{
//   border-left:6px solid $ht-base-bg3;
//   padding-left: 1rem;
// 	font-family: MicrosoftYaHei;
// 	font-size: 18px;
// 	color: $ht-font-color;
// }
</style>
