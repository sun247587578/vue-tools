<template>
  <h2 class="ht-h5">
    
    <div class="ht-h5--content" :style="$attrs" :class="active ?'ht-h5-active':''">
      <slot></slot>
    </div>
    <svg width="38px" height="17px" viewBox="0 0 38 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="编组" fill="#3880BF">
              <polygon id="路径" points="0 0 6 0 15 17 9 17"></polygon>
              <polygon id="路径" opacity="0.6" points="11 0 17 0 26 17 20 17"></polygon>
              <polygon id="路径" opacity="0.302" points="23 0 29 0 38 17 32 17"></polygon>
          </g>
      </g>
  </svg>
  </h2>
</template>

<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htH5",
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