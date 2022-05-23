<template>
  <div class="ht-data-scroll">
    <!-- <ht-scroll-bar> -->
    <ht-marquee>
      <table class="ht-table" style="table-layout:fixed">
        <tr v-for="(item,index) in 10" :key="index">
          <td width="200px" v-for="(a,b) in 10" :key="'td'+b">滚动{{index}}/{{b}}</td>
        </tr>
      </table>
    </ht-marquee>
    <!-- </ht-scroll-bar> -->
  </div>
</template>


<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htDataScroll",
  props: {
    htLabel: {
      type: String,
    },
    htLabelWidth: {
      type: String,
      default: "80px",
    },
  },
  data() {
    return {
      color: variables.baseColor1,
    };
  },
  computed: {
    labelStyle() {
      return { width: this.htLabelWidth };
    },
    labelContentStyle() {
      return { marginLeft: this.htLabelWidth };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
@import "../../../assets/global/mixins/utils.scss";
.ht-data-scroll {
  padding-left: 10px;
  height: 200px;
  overflow: auto;
  .ht-table {
    // table-layout: fixed;
    border-collapse: separate;
    // border-spacing: 0 10px;
    tr {
      
      
      border-radius: 4px;
      border: solid 1px #32b8db;
      color: #fff;
      td{
        margin: 5px 0px;
        background-color: rgba(97, 140, 173, 0.5);
      }
    }
  }
}
</style>
