<template>
  <div class="homepage">
    <!-- 轮播 -->
    <a href="javascript:void(0)" class="homepage-banner">
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1"><img src="../images/homepage/1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-2"><img src="../images/homepage/2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-3"><img src="../images/homepage/3.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </a>
    <div class="recommend">   <!-- 明星产品推荐 -->
      <div class="proCellTop">
        <p>明星产品推荐</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="proInner">
        <div class="innerCell">
          <div class="cellLogo biaozhun"></div>
          <p class="pFirst">标准五险一金</p>
          <p class="pSecond">订制化社保代理，定制化代缴服务</p>
          <p class="pThrid"><span>20</span>元/人/月</p>
        </div>
        <div class="innerCell">
          <div class="cellLogo neizi"></div>
          <p class="pFirst">内资有限公司注册</p>
          <p class="pSecond">一键完成注册，快速开办公司</p>
          <p class="pThrid"><span>600</span>元/次</p>
        </div>
        <div class="innerCell">
          <div class="cellLogo jizhang"></div>
          <p class="pFirst">小规模代理记账/年</p>
          <p class="pSecond">专业会计报税，高效、便捷、贴心</p>
          <p class="pThrid"><span>3000</span>元/年</p>
        </div>
        <div class="innerCell">
          <div class="cellLogo jizhang"></div>
          <p class="pFirst">国内普通商标注册</p>
          <p class="pSecond">次日提交商标申请，最快保护品牌价值</p>
          <p class="pThrid"><span>1000</span>元/年</p>
        </div>
      </div>
    </div>
    <div v-for="product in products" :key="product.id">
      <div v-for="product in product" :key="product.id">
        <!-- {{product.marketPrice}} -->
        
      </div>
    </div>
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
        },
        products:[]
      }
    },
      created(){
    // console.log('created');
    var that=this
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/recommend/list').then(function(data){
      var rData=data.data.data
      console.log(rData);
      that.products=rData;
    })
  },
  }
</script>

<style lang="less" scoped>
*{border: 0;padding: 0;margin: 0}
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
  .recommend{   //明星产品推荐
    width: 100%;
    height: 482px;
    margin-top: 50px;
    .proCellTop{  //横线与文字的样式
      width: 100%;
      height: 28px;
      border-bottom: 2px solid #2693d4;
      position: relative;
      text-align: left;
      p{
        font-size: 15px;
        color: #000;
        letter-spacing: 1px;
        padding-left: 10px;
      }
      .lineSanjiao{
        width: 7px;
        height: 7px;
        padding: 0px;
        background: #2693d4;
        display: block;
        clip-path: polygon(50% 0%, 100% 50%,0 50%);
        position: absolute;
        left: 44px;
        bottom: -4px;
      }
    }
    .proInner{  //里面内容
      width: 100%;
      height: 398px;
      margin: 50px auto 7px;
      .innerCell:nth-child(1){
        margin: 0;
      }
      .innerCell{
        width: 270px;
        height: 338px; 
        display: inline-block;
        background: #fafafa;
        padding-top: 60px;
        margin-left: 32px;
        .cellLogo{
          width: 120px;
          height: 120px;
          border: 2px solid #2693d4;
          border-radius: 50%;
          // opacity: transparent;
          background: url(../images/homepage/homepagePro.png) 100% 100% no-repeat;
          margin: 0 auto 18px;
        }
        .biaozhun{
          background-position: 33px 24px;
        }
        .neizi{
          background-position: 33px -85px;
        }
        .jizhang{
          background-position: 33px -202px;
        }
        .pFirst{
          font-size: 16px;
          color: #000;
          font-weight: 700;
          margin-bottom: 22px;
        }
        .pSecond{
          font-size: 14px;
          color: #656565;
          margin-bottom: 50px;
        }
        .pThrid{
          font-size: 13px;
          color: #656565;
          span{
            font-size: 26px;
            color: #2693d4;
          }
        }
      }
    }
  }
</style>