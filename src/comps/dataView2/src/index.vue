<template>
  <div class="ht-dv2">
    <!-- <span class="dvb dvb-t"> -->
    <svg v-if="htBorder.includes('1')" class="dvb dvb-t" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M8,0 L34,0 L34,0 L34,26 C34,30.418278 30.418278,34 26,34 L0,34 L0,34 L0,8 C-5.41083001e-16,3.581722 3.581722,2.58798134e-15 8,0 Z" id="path-1"></path>
        <filter x="-7.4%" y="-7.4%" width="129.4%" height="126.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="3" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.15848467   0 0 0 0 0.634589109   0 0 0 0 0.758944746  0 0 0 0.986341783 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-575.000000, -685.000000)">
          <g transform="translate(580.000000, 689.000000)">
            <g transform="translate(17.000000, 17.000000) scale(-1, -1) translate(-17.000000, -17.000000) ">
              <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
              <use fill-opacity="0" fill="#E8F5FF" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <!-- </span> -->
    <!-- <div class="dvb dvb-r"> -->
    <svg v-if="htBorder.includes('2')" class="dvb dvb-r" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M8,0 L34,0 L34,0 L34,26 C34,30.418278 30.418278,34 26,34 L0,34 L0,34 L0,8 C-5.41083001e-16,3.581722 3.581722,2.58798134e-15 8,0 Z" id="path-1"></path>
        <filter x="-7.4%" y="-7.4%" width="129.4%" height="126.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="3" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.15848467   0 0 0 0 0.634589109   0 0 0 0 0.758944746  0 0 0 0.986341783 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-575.000000, -685.000000)">
          <g transform="translate(580.000000, 689.000000)">
            <g transform="translate(17.000000, 17.000000) scale(-1, -1) translate(-17.000000, -17.000000) ">
              <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
              <use fill-opacity="0" fill="#E8F5FF" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <!-- </div> -->
    <!-- <div class="dvb dvb-b"> -->
    <svg v-if="htBorder.includes('3')" class="dvb dvb-b" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M8,0 L34,0 L34,0 L34,26 C34,30.418278 30.418278,34 26,34 L0,34 L0,34 L0,8 C-5.41083001e-16,3.581722 3.581722,2.58798134e-15 8,0 Z" id="path-1"></path>
        <filter x="-7.4%" y="-7.4%" width="129.4%" height="126.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="3" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.15848467   0 0 0 0 0.634589109   0 0 0 0 0.758944746  0 0 0 0.986341783 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-575.000000, -685.000000)">
          <g transform="translate(580.000000, 689.000000)">
            <g transform="translate(17.000000, 17.000000) scale(-1, -1) translate(-17.000000, -17.000000) ">
              <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
              <use fill-opacity="0" fill="#E8F5FF" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <!-- </div> -->
    <!-- <div class="dvb dvb-l"> -->
    <svg v-if="htBorder.includes('4')" class="dvb dvb-l" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M8,0 L34,0 L34,0 L34,26 C34,30.418278 30.418278,34 26,34 L0,34 L0,34 L0,8 C-5.41083001e-16,3.581722 3.581722,2.58798134e-15 8,0 Z" id="path-1"></path>
        <filter x="-7.4%" y="-7.4%" width="129.4%" height="126.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="3" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.15848467   0 0 0 0 0.634589109   0 0 0 0 0.758944746  0 0 0 0.986341783 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-575.000000, -685.000000)">
          <g transform="translate(580.000000, 689.000000)">
            <g transform="translate(17.000000, 17.000000) scale(-1, -1) translate(-17.000000, -17.000000) ">
              <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
              <use fill-opacity="0" fill="#E8F5FF" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <!-- </div> -->
    <div class="dv-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htDv2",
  props: {
    htBorder: {
      type: String,
      default: "1,2,3,4",
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

.ht-dv2 {
  position: relative;
  padding: 10px;
  border-radius: 20px;
}
.dvb {
  position: absolute;
  z-index: 1;
}
.dvb-t {
  left: 0;
  top: 0;
  transform: rotate(0deg);
}
.dvb-r {
  right: 0;
  top: 0;
  transform: rotate(90deg);
}
.dvb-l {
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}
.dvb-b {
  left: 0;
  bottom: 0;
  transform: rotate(270deg);
}
.dv-content {
  position: relative;
  z-index: 2;
  height: 100%;
}
</style>
