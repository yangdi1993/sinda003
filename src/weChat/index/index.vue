<template>
  <div class="index">
    <div class="top">
      <div class="toplogo">
        <img src="../../images/homepage/errorimg.png" alt="">
        <p>信达</p>
      </div>
    </div>
    <mt-swipe :auto="2000" class="swipe">
      <mt-swipe-item><img src="../../images/homepage/1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/homepage/2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/homepage/3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="cellchoose">
      <div class="caishui" @click="ToStorelist()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/caishui.png" alt=""></a>
        <p>财税服务</p>
      </div>
      <div class="company" @click="ToList()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/company.png" alt=""></a>
        <p>开公司</p>
      </div>
      <div class="biangeng" @click="ToList()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/biangeng.png" alt=""></a>
        <p>公司变更</p>
      </div>
      <div class="grsb" @click="ToList()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/grsb.png" alt=""></a>
        <p>个人社保</p>
      </div>
      <div class="gssb" @click="ToList()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/gssb.png" alt=""></a>
        <p>公司社保</p>
      </div>
      <div class="knowledge" @click="ToStorelist()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/knowledge.png" alt=""></a>
        <p>知识产权</p>
      </div>
      <div class="allpro" @click="ToStorelist()">
        <a href="javascript:void(0)" class="celllogo"><img src="../images/index/allpro.png" alt=""></a>
        <p>全部服务</p>
      </div>
    </div>

    <div class="proCellTop">
      <p>知识产权</p>
      <span class="lineSanjiao"></span>
    </div>
    <div class="knowinner"> 
      <div class="logoreg">
        <img src="../../images/homepage/knowledge2.png" alt="">
        <span>商标注册</span>
      </div>
      <div class="logoreg second">
        <img src="../../images/homepage/knowledge3.png" alt="">
        <span>版权专利</span>
      </div>
      <div class="zhuzuo">
        <img src="../../images/homepage/knowledge4.png" alt="">
        <span>著作权</span>
      </div>
    </div>



    <!-- <button @click="test">click</button> -->
    <div class="business">
      <!-- 初创企业必备 -->
      <div class="proCellTop">
        <p>初创企业</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="busInner">
        <div class="innerCell" v-for="product in objone" :key="product.id" @click="ToDetail(product.id)">
          <div class="cellLogo"><img :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg" alt=""></div>
          <p class="pFirst">{{product.serviceName}}</p>
          <p class="pSecond">{{product.serviceInfo}}</p>
          <p class="pThrid"><span>￥{{product.marketPrice}}</span> {{product.unit}}</p>
        </div>
      </div>
    </div>
    <div class="footerlogo">  
      <div class="toplogo">
        <img src="../../images/homepage/errorimg.png" alt="">
        <p>信达</p>
      </div>
      <p>一站式交易中心</p>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      objone:[],
    }
  },
  created(){
    var that = this;
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/recommend/list")
      .then(function(data) {
        var rData = data.data.data;
        // console.log(rData);
        var objone = {};
        var j = 0;
        for (var i in rData) {
          //对获取到的数据进行深层获取，进行分别定义
          j == 0 ? (that.objone = rData[i]) : j;
          j++;
        }
      });
  }, 

  methods:{
    test(){
       MessageBox.alert('nihao', 'hello');
    },
    //查看商品详情
     ToDetail(id) {
      this.$router.push({ path: "/weChatdog/wDetail", query: { id: id } });
    },
    //店铺列表
    ToStorelist(){
      this.$router.push({ path: "/weChat/storelist"});
    },
    //服务列表
    ToList(){
       this.$router.push({ path: "/weChat/list"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
  margin-bottom: .9rem;
}
.toplogo{
  height: .72rem;
  width: 100%;
  font-size: .28rem;
  color: #373737;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: .52rem;
    margin-right: 10px;
  }
}
.swipe{
  width: 100%;
  height: 2.54rem;
  img{
    width: 100%;
    height: 2.54rem;
  }
}
.cellchoose{
  width: 6.9rem;
  height: 3.4rem;
  margin: .36rem auto 0;
  >div{
    width: 1.1rem;
    height: 1.7rem;
    margin-left: .81rem;
    float: left;
    .celllogo{
      width: 100%;
      height: 1.1rem;
      display: block;
      border-radius: .2rem;
      img{
        width: 1.1rem;
      }
    }
    p{
      font-size: .22rem;
      color: #000;
      margin-top: 5px;
    }
  }
  .caishui{
    margin: 0;
    a{
      background: #79c4fd;
    }
  }
  .company{a{background: #fd7879;}}
  .biangeng{a{background: #ba73fd;}}
  .grsb{a{background: #79a0fb;}}
  .gssb{margin: 0;a{background: #fba479;}}
  .knowledge{a{background: #52ff8f;}}
  .allpro{a{background: #727cff;}}
}

.proCellTop {
  //横线与文字的样式
  width: 100%;
  height: .45rem;
  border-bottom: 2px solid #2693d4;
  position: relative;
  text-align: left;
  margin-top: .25rem;
  p {
    font-size: .28rem;
    color: #000;
    letter-spacing: 1px;
    padding-left: .23rem;
  }
  .lineSanjiao {
    width: .14rem;
    height: .14rem;
    background: #2693d4;
    display: block;
    clip-path: polygon(50% 0%, 100% 50%, 0 50%);
    position: absolute;
    left: .74rem;
    bottom: -.08rem;
  }
}
.knowinner{
  width: 7.16rem;
  height: 3.94rem;
  margin: .44rem auto 0;
}
.logoreg{
  width: 3.47rem;
  height: 1.9rem;
  position: relative;
  float: left;
  img{
    width: 100%;
  }
  span{
    font-size: .28rem;
    display: block;
    position: absolute;
    right: .3rem;
    bottom: .2rem;
  }
}
.second{
  margin-left: .2rem;
}
.zhuzuo{
  margin-top: .15rem;
  width: 7.16rem;
  height: 1.9rem;
  position: relative;
  float: left;
  img{
    width: 100%;
  }
  span{
    font-size: .28rem;
    display: block;
    position: absolute;
    right: .3rem;
    bottom: .2rem;
  }
}

//初创企业
.business{
  .busInner{
    width: 100%;
    font-size: .23rem;
  }
}
.innerCell{
  width: 7.15rem;
    height: 1.66rem;
  // height: 100%;
  padding: .21rem 0;
  margin: 0 auto;
  border-bottom: 1px solid #cfcfcf;
  text-align: left;
  .cellLogo{
    width: 1.66rem;
    height: 1.66rem;
    float: left;
    border: 2px solid #e3e3e3;
    display: flex;
    align-items: center;
    margin-right: .2rem;
    img{
      width: 1rem;
      margin: 0 auto;
    }
  }
  .pFirst{
    font-size: .28rem;
    line-height: .40rem;
    margin: .05rem 0 .1rem;
  }
  .pThrid{
    font-size: .14rem;
    margin-top: .15rem;
    span{
      font-size: .3rem;
      color: #ff1515;
      font-weight: 700;
    }
  }
}
.footerlogo{
  width: 100%;
  height: 1.58rem;
  border-bottom: 1px solid #f9f9f9;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  >p{
    font-size: .22rem;
    color: #8e8e8e;
  }
}
</style>
