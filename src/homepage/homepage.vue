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
    <div class="recommend">   <!-- 明星产品推荐,没有动态数据，只能写静态了 -->
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
    <div class="business">  <!-- 初创企业必备 -->
      <div class="proCellTop">
        <p>初创企业必备</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="busInner">
        <div class="innerCell" v-for="product in objone" :key="product.id">
          <div class="cellLogo"><img :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg" alt=""></div>
          <p class="pZero">{{product.providerName}}</p>
          <p class="pFirst">{{product.serviceName}}</p>
          <p class="pSecond">{{product.serviceInfo}}</p>
          <p class="pThrid"><span>￥{{product.marketPrice}}</span>{{product.unit}}</p>
          <button class="proBtn">查看详情</button>
        </div>
      </div>
    </div>
    <div class="konwledge">
      <div class="proCellTop">
        <p>知识产权</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="knowInner">
        <div class="klgCenter"> <!-- 左侧部分 -->
          <div class="know"><!-- 文字部分 -->
            <span>知识产权</span>
            <div>
              <p>商标注册</p>
              <p>版权保护</p>
              <p>专利申请</p>
            </div>
          </div>
        </div>
        <div class="logo1">  <!-- 上部中间部分 -->
          <div>
            <p class="nthChild1">商标注册</p>
            <p class="nthChild2">极速申报，办理简便</p>
            <p class="nthChild3">￥1000<span>/次</span></p>
          </div>
        </div>
        <div class="logo2">  <!-- 上部右边部分 -->
          <div>
            <p class="nthChild1">版权专利</p>
            <p class="nthChild2">快速提交，全程跟踪</p>
            <p class="nthChild3">￥1000<span>/次</span></p>
          </div>
        </div>
        <div class="logo3">  <!-- 下面部分 -->
          <div>
            <p class="nthChild1">著作权</p>
            <p class="nthChild2">专业顾问，经验丰富，快速响应，顺利拿证！</p>
            <p class="nthChild3">￥1000<span>/次</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="proBottom">
      <div class="klgBottom" v-for="obj in objs" :key="obj.id">
        <div :class="'thisLogo '+obj.class"></div>
        <div>
          <p>{{obj.title}}</p>
          <span>{{obj.inner}}</span>
        </div>
      </div>
    </div>
    

    <div class="service">  <!-- 推荐的服务商 -->
      <div class="proCellTop">
        <p><a href="javascript:void(0)" class="servicers" @click="servicers">推荐服务</a><a href="javascript:void(0)" class="proservice" @click="proservice">推荐服务商</a></p>
        <span class="lineSanjiao"></span>
      </div>
        
      <div class="busInner">
        <transition name="slideleft">
          <div class="youone"  v-show="busInner">
            <div class="innerCell" v-for="product in objtwo" :key="product.id">
              <div class="cellLogo"><img :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg" alt=""></div>
              <p class="pZero">{{product.providerName}}</p>
              <p class="pFirst">{{product.serviceName}}</p>
              <p class="pSecond">{{product.serviceInfo}}</p>
              <p class="pThrid"><span>￥{{product.marketPrice}}</span>{{product.unit}}</p>
              <a href="javascript:void(0)" class="proBtn">查看详情</a>
            </div>
          </div>
        </transition>
        <transition name="slideright">
          <div class="youtwo" v-show="provider">
            <div class="provider"  v-for="product in objthree" :key="product.id" >
              <div class="cellLogo"><img :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg" alt=""></div>
              <p class="pzero">{{product.providerName}}</p>
              <p class="pfirst">{{product.products}}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="partner"><!-- 合作伙伴 -->
      <div class="proCellTop">
        <p>合作伙伴</p>
        <span class="lineSanjiao"></span>
      </div>
      <div><img src="../images/homepage/partner.png" alt=""></div>
    </div>
  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
  export default {
    methods:{
      servicers:function(){
        this.busInner=true;
        this.provider=false;
      },
      proservice:function(){
        this.busInner=false;
        this.provider=true;
      }
    },
    data() {
      return {
        swiperOption: {   //轮播
          spaceBetween: 30,
          autoplay:true,  //自动 播放
          effect: 'fade', //轮播样式
          loop:true,  //无限轮播
          preventClicks :false,
          pagination: {
            el: '.swiper-pagination',
            clickable: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        objone:[],
        objtwo:[],
        objthree:[],
        objs:[],
        busInner:true,
        provider:false,
      }
    },
    created(){
    // console.log(this);
    var that=this
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/recommend/list').then(function(data){
      var rData=data.data.data
      // console.log(rData);
      var objone={};
      var objtwo={}
      var objthree={}
      var j = 0
      for(var i in rData){  //对获取到的数据进行深层获取，进行分别定义
        j==0?that.objone=rData[i]:j
        j==1?that.objtwo=rData[i]:j
        j==2?that.objthree=rData[i]:j
        j++
      }
    });
  
    var objs={};
    objs[0]={title:'资质认证',inner:'服务商100%实名认证',class:'objsOne'}
    objs[1]={title:'资质认证',inner:'服务商100%实名认证',class:'objsTwo'}
    objs[2]={title:'资质认证',inner:'服务商100%实名认证',class:'objsThree'}
    objs[3]={title:'资质认证',inner:'服务商100%实名认证',class:'objsFour'}
    that.objs=objs
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
    a{
      text-decoration: none;
      margin-right: 30px;
      color: #000;
    }
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

.recommend{   //明星产品推荐
  width: 100%;
  height: 482px;
  margin-top: 50px;
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
.youone{
  transition: all 2s;
  opacity: 1;
  // transform: rotateY(0deg);
  transform: translateY(0)
}
.youtwo{
  transition: all 2s;
  opacity: 1;
  transform: translateY(0);
  position: absolute;
}

.slideleft-enter{
  opacity: 0;
  transform: rotateY(-90deg);
  transform: translate(550px,-550px);
}
.slideleft-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
  transform: translateY(-550px);
}
.slideright-enter{
  opacity: 0;
  transform: translateY(550px);
}
.slideright-leave-to {
  opacity: 0;
  transform: translate(-550px,-500px);
}

.proGlobal{
  width: 100%;
  height: 550px;
  margin-top: 50px;
  .busInner{
    width: 100%;
    height: 522px;
    display: flex;
    .innerCell{
      width: 270px;
      height: 442px;
      padding-top: 80px;
      display: inline-block;
      margin: 0 15px;
    }
    .cellLogo{
      height: 45px;
      margin-bottom: 30px;
    }
    .pZero{
      font-size: 17px;
      color: #0677b8;
      margin-bottom: 50px;
    }
    .pFirst{
      height: 36px;
      font-size: 16px;
      color: #000;
      font-weight: 700;
    }
    .pSecond{
      height: 80px;
      font-size: 14px;
      color: #656565;
    }
    .pThrid{
      font-size: 13px;
      color: #656565;
      margin-bottom: 40px;
      span{
        font-size: 26px;
        color: #2693d4;
      }
    }
    .proBtn{
      width: 161px;
      height: 48px;
      font-size: 17px;
      display: block;
      margin: 0 auto;
      text-decoration: none;
      line-height: 48px;
      color: #2693d4;
      background: #fafafa;
      border: 2px solid #2693d4;
      border-radius: 4px;
    }
  }
}
.business{
  .proGlobal
}
.konwledge{
  width: 100%;
  height: 550px;
  margin: 50px auto 43px;
  .knowInner{
    width: 100%;
    height: 482px;
    margin-top: 37px;
    text-align: left;
    .klgCenter{
      width: 327px;
      height: 100%;
      float: left;
      background: url(../images/homepage/knowledge1.png) 100% 100% no-repeat;
    }
    .know{
      padding-top: 28px;
      position: relative;
      span{
        font-size: 17px;
        color: #2693d4;
        margin:0 26px;
        display: inline-block;
        position: absolute;
        bottom: -48px;
      }
      >div{
        display: inline-block;
        position: absolute;
        left: 120px;
        p{
          color: #2693d4;
          margin-bottom: 10px;
          padding-left: 5px;
          border-left: 2px solid #2693d4;
        }
      }
    }
    .thisstyle{
      font-family: '黑体';
      .nthChild1{
        font-size: 17px;
        color: #000;
        margin-bottom: 15px;
      }
      .nthChild2{
        font-size: 14px;
        color: #696969;
        margin-bottom: 15px;
      }
      .nthChild3{
        font-size: 28px;
        color: #2693d4;
        font-weight: 700;
        span{
          font-size: 17px;
        }
      }
    }
    .logo1{
      width: 414px;
      height: 230px;
      float: left;
      margin-left: 22px;
      background: url(../images/homepage/knowledge2.png) 100% 100% no-repeat;
      >div{
        .thisstyle;
        margin: 105px 0 0 270px;
      }
    }
    .logo2{
      width: 414px;
      height: 230px;
      float: left;
      margin-left: 22px;
      background: url(../images/homepage/knowledge3.png) 100% 100% no-repeat;
      >div{
        .thisstyle;
        margin: 105px 0 0 270px;
      }
    }
    .logo3{
      width: 850px;
      height: 230px;
      float: left;
      margin: 22px 0 0 22px;
      background: url(../images/homepage/knowledge4.png) 100% 100% no-repeat;
      >div{
        .thisstyle;
        margin: 105px 0 0 570px;
      }
    }
  }
}
@url:url(../images/homepage/homepage.png) 100% 100% no-repeat;
.objsOne{
  background: @url;
  background-position: -32px -66px;
}
.objsTwo{
  background: @url;
  background-position: -98px -66px;
}
.objsThree{
  background: @url;
  background-position: -32px -137px;
}
.objsFour{
  background: @url;
  background-position: -100px -140px;
}
.thisLogo{
  width: 60px;
  height: 70px;
  margin-right: 14px;
}
.proBottom{
  display: flex;
  background: #f7f7f7;
}
.klgBottom{
  height: 167px;
  width: 300px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: '黑体';
  p{
    font-size: 23px;
    color: #575664;
    font-weight: 700;
    margin-bottom: 12px;
  }
  span{
    font-size: 18px;
    color: #575664;
  }
}

.service{
  .proGlobal;
  // .servicers{
  //   color: #2693d4;
  // }
}
.provider{
  width: 400px;
  height: 446px;
  padding: 80px 100px 0;
  float: left;
  .pzero{
    font-size: 20px;
    color: #000;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .pfirst{  
    font-size: 14px;
    color: #656565;
    font-weight: 600;
    // text-align: left;
    text-indent: 2em;
    line-height: 22px;
    letter-spacing: 2px;
  }
}
.partner{
  width: 100%;
  margin-bottom: 100px;
  img{
    width: 100%;
    margin-top: 40px;
  }
}
</style>