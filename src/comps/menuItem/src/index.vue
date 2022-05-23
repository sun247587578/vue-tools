<template>
  <div class="my-dv-menu-item" :style="styles" :class="classes">
    <svg class="my-dv-menu-item__svg" :width="width" :height="height">
      <g>
        <path stroke="transparent" fill="transparent" :stroke-width="strokeWidth" opacity=".4"
              :d="path">
          <animate accumulate="none" additive="replace" attributeName="fill" begin="0" calcMode="linear" dur="4"
                   repeatCount="indefinite" restart="always" :values="`transparent;${light};transparent`"/>
        </path>
        <path class="my-dv-menu-item__bg" stroke="transparent" :fill="light" :stroke-width="strokeWidth" opacity=".7"
              :d="path"></path>
        <path class="my-dv-menu-item__line" :stroke="light" fill="transparent" :stroke-width="strokeWidth"
              :d="path">
        </path>
      </g>
      <g v-if="active">
        <defs>
          <radialGradient :id="`prefix__a${_uid}`" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff"/>
            <stop offset="200%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
          <path :id="`prefix__b${_uid}`" :d="path" fill="transparent"/>
          <mask :id="`prefix__c${_uid}`">
            <circle r="20" :fill="`url(#prefix__a${_uid})`">
              <animateMotion dur="4s" :path="path" rotate="auto"
                             repeatCount="indefinite"/>
            </circle>
          </mask>
        </defs>
        <use stroke="rgba(29,225,255,0.6)" stroke-width="3" :xlink:href="`#prefix__b${_uid}`"
             :mask="`url(#prefix__c${_uid})`">
          <animate attributeName="stroke-dasharray" from="0, 4000" to="4000, 0" dur="4s" repeatCount="indefinite"/>
        </use>
      </g>
    </svg>
    <div class="my-dv-menu-item__content">
      <slot>
        {{text}}
      </slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MyDvMenuItem',
    components: {
      MyIcon
    },
    props: {
      text: String,
      icon: [String, Object],
      width: {
        type: Number,
        default: 200
      },
      height: {
        type: Number,
        default: 50
      },
      strokeWidth: {
        type: Number,
        default: 1
      },
      light: String,
      dark: String,
      active: Boolean,
      reverse: Boolean
    },
    computed: {
      iconProps() {
        return typeof this.icon === 'object'
          ? this.icon
          : {
            name: this.icon
          }
      },
      classes() {
        return {
          'is-active': this.active,
          'is-reverse': this.reverse
        }
      },
      styles() {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`,
          lineHeight: `${this.height - 2 * this.strokeWidth}px`
        }
      },
      path() {
        const {width, height, strokeWidth} = this
        const innerHeight = height - strokeWidth
        const innerWidth = width - strokeWidth
        return `M ${innerHeight} ${strokeWidth} H ${innerWidth} L ${width - innerHeight} ${innerHeight} H ${strokeWidth} Z`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-menu-item) {
    position: relative;
    display: inline-block;
    @include e(content) {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      text-shadow: $--dv-shadow;
    }
    @include e(bg) {
      display: none;
    }
    &:hover {
      @include e(line) {
        fill: rgba(255, 255, 255, 0.15);
      }
      @include e(content) {
        color: #fff;
      }
    }
    @include when(active) {
      @include e(bg) {
        display: block;
      }
      @include e(content) {
        color: #fff;
      }
    }

    @include when(reverse) {
      @include e(svg) {
        transform: scaleX(-1);
      }
    }
  }
</style>
