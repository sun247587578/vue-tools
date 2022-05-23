<template>
  <label class="ht-tab-s2" role="radio" :class="{ 'is-active': model === label }">
    <span class="th-tab-s2--content">
      <slot>
        <span class="ht-tab-s2--label" :class="{ 'is-dark':dark }" >{{label}}</span>
      </slot>
    </span>
    <input ref="radio" @change="handleChange" :name="name" :value="label" type="radio" v-model="model" class="ht-tab-s2--radio" autocomplete="off">
    <!-- 
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
      autocomplete="off"
     -->
  </label>
</template>


<script>
import Emitter from "element-ui/src/mixins/emitter";

// import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htTabSelect2",
  mixins: [Emitter],
  props: {
    label: {
      type: [String,Number],
      default: "",
    },
    value: {},
    disabled: Boolean,
    dark:Boolean,
    name: String,
  },
  data() {
    return {
      // color:variables.baseColor1,
    };
  },
  computed: {
    
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "htTabGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('htTabGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
  },
  methods: {
    handleChange() {
      
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup && his.dispatch("htTabGroup", "handleChange", this.model);
          
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
// @import "../../../assets/styles/variables.scss";
// .ht-tab-s2 {
//   cursor: pointer;
//   .th-tab-content{
//     position: relative;
//   }
//   .ht-tab-radio {
//     position: absolute;
//     opacity: 0;
//     z-index: -1;
//   }
//   .ht-tab-label {
//     font-size: $ht-font-base;
//     padding: 5px 15px;
//     display: inline-block;
//     border-radius: 5px;
//   }
//   &.is-active {
//     .ht-tab-label {
//       background: $ht-base-bg1;
//       -webkit-animation-timing-function: ease-in-out;
//       -webkit-animation-name: breathe1;
//       -webkit-animation-duration: 1500ms;
//       -webkit-animation-iteration-count: infinite;
//       -webkit-animation-direction: alternate;
//     }
//   }
//   &.is-dark{

//   }
// }
@import "../../../assets/global/mixins/mixins.scss";

</style>
