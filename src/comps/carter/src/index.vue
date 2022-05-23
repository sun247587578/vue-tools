<template>
  <div class="ht-carter" :class="htBorder?'ht-border':''">
    <div class="ht-carter-header">
      <div>
          <svg width="82px" height="50px" viewBox="0 0 82 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>三线</title>
              <defs>
                  <radialGradient cx="1.63237479e-13%" cy="60.8662427%" fx="1.63237479e-13%" fy="60.8662427%" r="143.124686%" gradientTransform="translate(0.000000,0.608662),scale(0.561798,1.000000),translate(-0.000000,-0.608662)" id="radialGradient-1">
                      <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
                      <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
                  </radialGradient>
                  <rect id="path-2" x="0" y="0" width="89" height="50"></rect>
                  <linearGradient x1="85.0442067%" y1="68.8520777%" x2="4.81489848e-12%" y2="68.8520777%" id="linearGradient-4">
                      <stop stop-color="#CAFBFF" offset="0%"></stop>
                      <stop stop-color="#0292AF" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
                      <stop stop-color="#34FAF1" offset="0%"></stop>
                      <stop stop-color="#3CC7DE" offset="100%"></stop>
                  </linearGradient>
              </defs>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="深色-1" transform="translate(-50.000000, -90.000000)">
                      <g id="三线" transform="translate(47.000000, 90.000000)">
                          <mask id="mask-3" fill="white">
                              <use xlink:href="#path-2"></use>
                          </mask>
                          <use id="蒙版" fill="url(#radialGradient-1)" xlink:href="#path-2"></use>
                          <g id="编组" mask="url(#mask-3)">
                              <g transform="translate(6.000000, -6.000000)">
                                  <polyline id="路径-2" stroke="#05A7E2" stroke-width="4" points="32 1 1.33226763e-15 44.9767442 32 62"></polyline>
                                  <polyline id="路径-2备份-2" stroke="url(#linearGradient-4)" stroke-width="4" points="80.28 1 49 42.4285714 83 61"></polyline>
                                  <polyline id="路径-2备份" stroke="url(#linearGradient-5)" stroke-width="14" points="56 0 24 44.6976744 56 62"></polyline>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
      </div>
      <slot name="header"><span>{{htTitle}}</span></slot>
    </div>
    <div class="ht-carter--body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'htCarter',
    props: {
      htTitle: {
        type: String
      },
      htBorder: {
        type:Boolean,
        default:true,
      }
    }
  };
</script>

