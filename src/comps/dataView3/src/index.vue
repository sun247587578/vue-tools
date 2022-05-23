<template>
  <div class="ht-dv3">
    <svg v-if="htBorder.includes('1')" class="ht-dv3-header ht-dv3-header-1" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-814.000000, -836.000000)">
                <g transform="translate(815.000000, 837.000000)">
                    <polygon :fill="color" transform="translate(9.000000, 9.000000) scale(-1, -1) translate(-9.000000, -9.000000) " points="3 3 3 15 15 3"></polygon>
                    <line x1="14" y1="0" x2="-9.71445147e-17" y2="13" :stroke="color"></line>
                </g>
            </g>
        </g>
    </svg>
    <!-- <svg v-if="htBorder.includes('1')" class="ht-dv3-header ht-dv3-header-1" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>编组 2</title>
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="浅色-2" transform="translate(-813.000000, -835.000000)">
              <g id="编组-2" transform="translate(814.000000, 836.000000)">
                  <polygon id="路径-7备份-2" :fill="color" transform="translate(10.000000, 10.000000) scale(-1, -1) translate(-10.000000, -10.000000) " points="4 4 4 16 16 4"></polygon>
                  <line x1="16" y1="-3.81020215e-12" x2="0" y2="16" id="路径-10" :stroke="color"></line>
              </g>
          </g>
      </g>
  </svg> -->
    <svg v-if="htBorder.includes('2')" class="ht-dv3-header ht-dv3-header-2" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-814.000000, -836.000000)">
                <g transform="translate(815.000000, 837.000000)">
                    <polygon :fill="color" transform="translate(9.000000, 9.000000) scale(-1, -1) translate(-9.000000, -9.000000) " points="3 3 3 15 15 3"></polygon>
                    <line x1="14" y1="0" x2="-9.71445147e-17" y2="13" :stroke="color"></line>
                </g>
            </g>
        </g>
    </svg>
    <svg v-if="htBorder.includes('3')" class="ht-dv3-header ht-dv3-header-3" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-814.000000, -836.000000)">
                <g transform="translate(815.000000, 837.000000)">
                    <polygon :fill="color" transform="translate(9.000000, 9.000000) scale(-1, -1) translate(-9.000000, -9.000000) " points="3 3 3 15 15 3"></polygon>
                    <line x1="14" y1="0" x2="-9.71445147e-17" y2="13" :stroke="color"></line>
                </g>
            </g>
        </g>
    </svg>
    <svg v-if="htBorder.includes('4')" class="ht-dv3-header ht-dv3-header-4" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-814.000000, -836.000000)">
                <g transform="translate(815.000000, 837.000000)">
                    <polygon :fill="color" transform="translate(9.000000, 9.000000) scale(-1, -1) translate(-9.000000, -9.000000) " points="3 3 3 15 15 3"></polygon>
                    <line x1="14" y1="0" x2="-9.71445147e-17" y2="13" :stroke="color"></line>
                </g>
            </g>
        </g>
    </svg>
    <div class="dv-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htDv3",
  props: {
    htBorder: {
      type: String,
      default: "1,4",
    },
  },
  data() {
    return {
      color: variables.baseColor1,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";

.ht-dv3 {
  position: relative;
  // padding: 15px;
  border: 1px solid $ht-base-border;
}
.ht-dv3-header{
  position: absolute;
  // background: $ht-base-bg;
  background: transparent;
}

.ht-dv3-header-1{
  top: -1px;
  left: -1px;
  transform: rotate(180deg);
  
}
.ht-dv3-header-2{
  top: -1px;
  right: -1px;
  transform: rotate(270deg);
}
.ht-dv3-header-3{
  bottom: -1px;
  left: -1px;
  transform: rotate(90deg);
}
.ht-dv3-header-4{
  right: -1px;
  bottom: -1px;
  transform: rotate(0deg);
}
</style>
