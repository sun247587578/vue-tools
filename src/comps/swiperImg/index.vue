<template>
  <div>

    <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-rl" v-for="(item,index) in imgList" :key="index">
          <img :src="`data:image/gif;base64,`+item.pic" alt="" srcset="">
        </div>
      </div>
    </div>
    <div thumbsSlider="" class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-bt" v-for="(item,index) in imgList" :key="index">
          <img :src="`data:image/gif;base64,`+item.pic" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "./lib/swiper-bundle.min.js";
import "./lib/swiper-bundle.min.css";
export default {
  props: ["imgList"],
  data() {
    return {};
  },
  methods: {
    initSwiper() {
      var swiper1 = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        autoplay:true,
        thumbs: {
          swiper: swiper1,
        },
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>
<style lang='scss' scoped>
.swiper {
  width: 100%;
  overflow: hidden;
  .swiper-slide-rl {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 150px;
  width: 100%;
}

.mySwiper {
  height: 90px;
  box-sizing: border-box;
  padding: 10px 10px;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide-bt {
  img {
    height: 100%;
  }
}
</style>