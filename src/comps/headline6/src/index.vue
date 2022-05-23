<template>
  <h2 class="ht-h6">
    <div class="ht-h6--left"></div>
    <div class="ht-h6--content" :style="$attrs" :class="active ?'ht-h6-active':''">
      <slot></slot>
    </div>
    
  </h2>
</template>

<script>
export default {
  name: "htH6",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
    };
  },
  mounted() {},
};
</script>