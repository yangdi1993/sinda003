<template>
  <div class="homepage">
    <!-- 轮播 -->
    <a href="javascript:void(0)" class="homepage-banner">
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1"><img src="../images/homepage/1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-2"><img src="../images/homepage/2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-3"><img src="../images/homepage/3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-4"><img src="../images/homepage/4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-5"><img src="../images/homepage/5.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </a>
    
  </div>
  
</template>

<script>
require('swiper/dist/css/swiper.css')
  export default {
    data() {
      return {
        swiperOption: {   //轮播
          spaceBetween: 30,
          autoplay:true,
          effect: 'fade',
          loop:true,
          preventClicks :false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },

  }
</script>

<style lang="less" scoped>
  .homepage{
    width: 1200px;
    margin: 0 auto;
  }
  .swiper-slide {   //广告轮播
    background-position: center;
    background-size: cover;
    width: 1200px;
    height: 400px;
    img{
      width: 1200px;
      height: 400px;
    }
  }
</style>