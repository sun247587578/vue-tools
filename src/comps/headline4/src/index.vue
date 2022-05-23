<template>
  <h2 class="ht-h4">
    <svg width="85px" height="27px" viewBox="0 0 85 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="手机档案" transform="translate(-1786.000000, -632.000000)" stroke="#0060FF" stroke-width="4">
                <g id="编组-7" transform="translate(1787.000000, 634.000000)">
                    <polyline id="路径" points="0 23 22 11.5 0 0"></polyline>
                    <polyline id="路径" opacity="0.6" points="27 23 52 11.5 27 0"></polyline>
                    <polyline id="路径" opacity="0.2" points="60 23 82 11.5 60 0"></polyline>
                </g>
            </g>
        </g>
    </svg>
    <div class="ht-h4--content" :class="active ?'ht-h4-active':''">
      <slot></slot>
    </div>
    <svg class="trans180" width="85px" height="27px" viewBox="0 0 85 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="手机档案" transform="translate(-1786.000000, -632.000000)" stroke="#0060FF" stroke-width="4">
                <g id="编组-7" transform="translate(1787.000000, 634.000000)">
                    <polyline id="路径" points="0 23 22 11.5 0 0">
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="0.8" to="1" dur="3s" begin="0s" repeatCount="indefinite"></animate> -->
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="1" to="0.8" dur="3s" begin="3s" repeatCount="indefinite"></animate> -->
                    </polyline>
                    <polyline id="路径" opacity="0.6" points="27 23 52 11.5 27 0">
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="0.6" to="0.8" dur="3s" begin="3s" repeatCount="indefinite"></animate> -->
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="1" to="0.6" dur="3s" begin="6s" repeatCount="indefinite"></animate> -->
                    </polyline>
                    <polyline id="路径" opacity="0.2" points="60 23 82 11.5 60 0">
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="0.2" to="0.4" dur="3s" begin="6s" repeatCount="indefinite"></animate> -->
                      <!-- <animate attributeType="CSS" attributeName="opacity" from="1" to="0.2" dur="3s" begin="9s" repeatCount="indefinite"></animate> -->
                    </polyline>
                </g>
            </g>
        </g>
    </svg>
    <!-- <svg width="85px" height="27px" viewBox="0 0 85 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>编组 8</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="手机档案" transform="translate(-1406.000000, -630.000000)" stroke="#03DDF5" stroke-width="4">
                <g id="编组-8" transform="translate(1408.000000, 632.000000)">
                    <polyline id="路径" points="81 26 59 13 81 0"></polyline>
                    <path d="M51,26 L29,12.7092611 M29,13.2907389 L51,0" id="形状" opacity="0.6"></path>
                    <path d="M22,26 L0,12.7092611 M0,13.2907389 L22,0" id="形状" opacity="0.2"></path>
                </g>
            </g>
        </g>
    </svg> -->
  </h2>
</template>

<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htH4",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      color: variables.baseColor1,
    };
  },
  mounted() {},
};
</script>