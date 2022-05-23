<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :style="data.staticStyle"
    :class="[data.staticClass, 'ht-divider', `ht-divider--${props.direction}`]"
  >
    <div
      v-if="slots().default && props.direction !== 'vertical'"
      :class="['ht-divider__text', `is-${props.contentPosition}`]"
     >
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'htDivider',
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(val) {
          return ['horizontal', 'vertical'].indexOf(val) !== -1;
        }
      },
      contentPosition: {
        type: String,
        default: 'center',
        validator(val) {
          return ['left', 'center', 'right'].indexOf(val) !== -1;
        }
      },
    },
    data(){
      
    },
    
  };
</script>
<style lang="scss" scoped>
@import "../../../assets/global/mixins/mixins.scss";
@include b(divider){
  background-color: $ht-base-border1;
  position: relative;
  @include m(horizontal) {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
  }
  @include m(vertical) {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
  }
  @include e(text) {
    position: absolute;
    // background-color: darken($color: $ht-base-border1, $amount: 30%);
    padding: 0 20px;
    font-weight: 500;
    // color: $ht-font-white;
    font-size: 14px;
    @include when(left) {
      left: 20px;
      transform: translateY(-50%);
    }

    @include when(center)  {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    @include when(right)  {
      right: 20px;
      transform: translateY(-50%);
    }
  }
}

  
</style>
