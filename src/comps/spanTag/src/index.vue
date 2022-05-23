<template>
  <span
    class="ht-btn"
    :class="[
      type ? 'ht-btn--' + type : '',
      buttonSize ? 'ht-btn--' + buttonSize : '',
      {
        'is-active':active,
      }
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </span>
</template>
<script>
  export default {
    name: 'htSpanTag',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      active:Boolean,
    },

    computed: {
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
    },

  };
</script>
<style lang="scss" scoped>

</style>