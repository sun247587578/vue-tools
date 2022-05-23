<template>
  <div class="ht-dv">
    <!-- <span class="dvb dvb-t"> -->
      <svg v-if="htBorder.includes('1')" class="dvb dvb-t" width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1397.000000, -491.000000)" stroke="#32B8DB" stroke-width="2">
                <g transform="translate(1398.000000, 492.000000)">
                    <polyline points="1.68387526e-12 50 0 1.38777878e-15 50 -2.7339242e-12"></polyline>
                    <polyline points="1.96 26.952381 1.96 1.95238095 26.96 1.95238095"></polyline>
                </g>
            </g>
        </g>
    </svg>
    <!-- </span> -->
    <!-- <div class="dvb dvb-r"> -->
    <svg v-if="htBorder.includes('2')" class="dvb dvb-r" width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1397.000000, -491.000000)" stroke="#32B8DB" stroke-width="2">
              <g transform="translate(1398.000000, 492.000000)">
                  <polyline points="1.68387526e-12 50 0 1.38777878e-15 50 -2.7339242e-12"></polyline>
                  <polyline points="1.96 26.952381 1.96 1.95238095 26.96 1.95238095"></polyline>
              </g>
          </g>
      </g>
  </svg>
    <!-- </div> -->
    <!-- <div class="dvb dvb-b"> -->
    <svg v-if="htBorder.includes('3')" class="dvb dvb-b" width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1397.000000, -491.000000)" stroke="#32B8DB" stroke-width="2">
              <g transform="translate(1398.000000, 492.000000)">
                  <polyline points="1.68387526e-12 50 0 1.38777878e-15 50 -2.7339242e-12"></polyline>
                  <polyline  points="1.96 26.952381 1.96 1.95238095 26.96 1.95238095"></polyline>
              </g>
          </g>
      </g>
  </svg>
    <!-- </div> -->
    <!-- <div class="dvb dvb-l"> -->
    <svg v-if="htBorder.includes('4')" class="dvb dvb-l" width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1397.000000, -491.000000)" stroke="#32B8DB" stroke-width="2">
              <g transform="translate(1398.000000, 492.000000)">
                  <polyline  points="1.68387526e-12 50 0 1.38777878e-15 50 -2.7339242e-12"></polyline>
                  <polyline  points="1.96 26.952381 1.96 1.95238095 26.96 1.95238095"></polyline>
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
    name: 'htDv',
    props: {
      htTitle: {
        type: String
      },
      htBorder: {
        type:String,
        default:"1,4",
      },

    },
    data(){
      return {
        color:variables.baseColor1,
      }
    }
  };
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";

.ht-dv{
  position: relative;
  padding:10px;
  min-height: 100px;
  background-image: radial-gradient(
		lighten($ht-base-bg1,80%), 
		lighten($ht-base-bg1,20%))
}
.dvb{
  position: absolute;
  z-index: 1;
}
.dvb-t{
  left: 0;
  top: 0;
  transform: rotate(0deg);
}
.dvb-r{
  right: 0;
  top: 0;
  transform: rotate(90deg);
}
.dvb-l{
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}
.dvb-b{
  left: 0;
  bottom: 0;
  transform: rotate(270deg);
}
.dv-content{
  position: relative;
  z-index: 2;
  
}
</style>
