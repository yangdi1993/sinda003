<template>
  <div class="ihead">
    <div class="ihead-in">
      <div class="ihead-top">
        <div class="iheadleft">
          <a href="#/inner/homepage" class="ihead-logo"></a>  <!-- logo -->
          <a href="#/inner/homepage" class="ihead-sinda">信达</a>
          <div class="iheadcity">
            <p class="iheadcity" :key="nowcity.id">{{nowcity.name}}</p>
            <a href="javascript:void(0)" class="iheadchange" @click="changeCity">[切换城市]</a>
            <!-- <div class="cityTip">

            </div> -->
          </div>
        </div>
        <div class="iheadcenter">
          <div>
            <a href="javascript:void(0)" class="iheadproduct">产品</a>
            <a href="javascript:void(0)" class="iheadseverce">服务商</a>
          </div>
          <form action="">
            <input type="text" class="ihead-search" placeholder="搜索您需要的服务或服务商">
            <button class="iheadbtn"><span></span></button>
          </form>
          <div>
            <p class="ihead-hotsvc">热门服务：<a href="javascript:void(0)">社保开户</a>&nbsp;<a href="javascript:void(0)">公司注册</a></p>
          </div>
        </div>
        <div class="ihead-right">
          <span></span>
          <p>010-83421842</p>
        </div>
      </div>
      <div class="ihead-bottom">
        <router-link :to="{path:'/inner/homepage',query: { num:  1} }" @mouseover.native="allProduce" @mouseout.native="produceOut" active-class="active">全部产品</router-link>
        <router-link :to="{path:'/inner/list1',query: { num:  1}}" active-class="active" @click.native="caishui">财税服务</router-link>
        <router-link :to="{path:'/inner/list2',query: { num:  2}}"  active-class="active" @click.native="company">公司工商</router-link>
        <router-link to="/inner/join" active-class="active">加盟我们</router-link>
        <router-link to="/inner/shoplist"  active-class="active">店铺</router-link>
        <transition name="fold">
          <div class="allProduce" v-show="produce" @mouseover="allProduce" @mouseout="produceOut">
            <div class="ihead-finance">
              <div class="iheadLogo">
                <span class="produce-logo"></span>
                <span class="company-logo"></span>
                <span class="knows-logo"></span>
                <span class="social-logo"></span>
              </div>
              <router-link :to="{path:'/inner/list'+index,query: { num:  index}}"  tag="a" class="row1" v-for="(product,index) in products" :key="product.id" @click="onechoose(index)">
                <div class="first" >
                  <p>{{product.name}}</p>
                  <span class="row2" v-for="(product) in product.itemList" :key="product.id">
                    <span>{{product.name}}</span>
                  </span>
                </div>
                <div class="second">
                  <div class="thrid" v-for="product in product.itemList" :key="product.id">
                    <span class="secondtitle">{{product.name}} ﹥</span>
                    <div class="third-sec">
                      <span class="row3" v-for="product in product.itemList" :key="product.id">
                        <a href="javascript:void(0)">{{product.name}}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
var btn=document.querySelector('.iheadbtn')
// btn.onenter=function(){
  // console.log(123)
// }
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      produce:false,
      active:'active',
      products:[],
      nowcity:[],
      number:1,
      // onechoose:1,  //列表页数据一级选择
    }
  },
  created(){
    // console.log('created');
    var that=this
    this.ajax.post('xinda-api/product/style/list').then(function(data){
      var rData=data.data.data
      // console.log(rData);
      var obj = {}  //这里obj默认obj={1:{},2:{},3:{},4:{}}
      for(var i in rData){  //进行排序
        var n=rData[i].showOrder
        obj[n]=rData[i]
      }
      that.products=obj;
    });
    var nowcity={}
    this.ajax.post('xinda-api/common/select-region').then(function(data){
      var rData=data.data.data
      // console.log(rData);
      that.nowcity=rData;
    })
  },

  methods:{
    allProduce(){
      this.produce = true;
    },
    produceOut(){
      this.produce = false;
    },
    changeCity(){
    },
    caishui(){  //财税服务
      this.number=1
      sessionStorage.setItem('index',this.number)
      // console.log(sessionStorage.getItem('index',this.number))
    },
    company(){  //公司工商
      this.number=2
      sessionStorage.setItem('index',this.number)
      // console.log(sessionStorage.getItem('index',this.number))
    },
    onechoose(index){  //全部产品点击
      sessionStorage.setItem('index',index)
      this.$router.push('/inner/list')
      this.produce = false;
    },

  }
}
</script>

<style scoped lang="less">
@url:url(../images/homepage/homepage.png) 100% 100% no-repeat;

.ihead{
  width: 100%;
  height: 150px;
  // background: pink;
  border-bottom: 1px solid #2693d4; 
  .ihead-in{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .ihead-top{
    width: 100%;
    height: 111px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iheadleft{
      width: 250px;
      height: 56px;
      display: flex;
      align-items: center;
      text-align: left;
      margin-top: 39px;
      .ihead-logo{
        height: 56px;
        width: 62px;
        display: inline-block;
        background: @url;
        background-position: -26px -5px;
      }
      .ihead-sinda{
        font-size: 30px;
        font-weight: 700;
        font-family: '黑体';
        text-decoration: none;
        color: #373737;
        letter-spacing: 3px;
        padding: 12px;
      }
      .ihead-sinda:hover{
        text-decoration: none;
      }
      div{
        margin-left: 12px;
      }
      p{
        font-size: 14px;
        color: #111;
        padding: 14px 0 7px;
      }
      a{
        font-size: 14px;
        color: #2693d4;
        text-decoration: none;
      }
      a:hover{
        text-decoration: underline;
      }
      .iheadcity{
        position: relative;
      }
      .cityTip{
        width: 500px;
        height: 300px;
        background: #f8f;
        position: absolute;
        z-index: 10;
        left: -100px;
      }
    }

    .iheadcenter{
      width: 600px;
      height: 90px;
      margin-top: 28px;
      text-align: left;
      a{
        font-size: 15px;
        text-decoration: none;
        color: #222;
      }
      .iheadproduct{
        color:#2693d4;
        padding-right: 10px;
        border-right: 1px solid #2693d4;
      }
      form{
        display: flex;
        margin: 5px 0 ;
      }
      .ihead-search{
        width: 465px;
        height: 36px;
        border: 2px solid #2693d4;
        padding-left: 15px;
      }
      .iheadbtn{
        width: 100px;
        height: 40px;
        background: #2693d4;
        span{
          width: 23px;
          height: 26px;
          background: url(../images/homepage/search.png) 100% 100% no-repeat;
          background-position: 2px 0;
          display: inline-block;
        }
      }

      .ihead-hotsvc{
        font-size: 12px;
        color: #c7c7c7;
        padding-left: 12px;
        a{
          font-size: 12px;
          color: #c7c7c7;
        }
      }
    }

    .ihead-right{
      width: 190px;
      height: 48px;
      margin-top: 34px;
      display: flex;
      align-items: center;
      justify-content:flex-end;
      span{
        height: 100%;
        width: 46px;
        background: @url;
        background-position: -102px -4px;
      }
      p{
        font-size: 14px;
        font-weight: 700;
        font-family: '黑体';
        color: #a3a3a3;
      }
    }
  }
  .ihead-bottom{
    width: 100%;
    height: 38px;
    text-align: left;
    position: relative;
    >a{
      font-size: 18px;
      color: #000;
      padding: 8px 0;
      font-family: '黑体';
      margin: 0 62px;
      border-bottom: 3px solid #fff;
      text-decoration: none;
      line-height: 38px;
      
      &.active{
        color: #2693d4;
        border-bottom: 4px solid #2693d4
      }
    }
    a{
      text-decoration: none;
    }
  }
}
.iheadLogo{
  width: 30px;
  height: 100%;
}
.allProduce{
  width: 200px;
  height: 400px;
  background: #192b41;
  position: absolute;
  left: 0;
  top: 40px;
  display: flex;
  z-index: 10;
  >div{
    // display: flex;
    // width: 90%;
    // padding: 14px 0 0 10%;
    p{
      color: #fff;
      font-size: 16px;
      padding: 4px 9px;
      margin-bottom: 8px;
    }
    span{
      color: #fff;
      font-size: 14px;
      padding: 4px 7px;
      display: inline-block;
    }
  }
  //以下表示每个小块的样式
  .ihead-finance{
    height: 0;
  }
  .row1{
    width: 1200px;
    display: flex;
    .first{
      width: 160px;
      padding: 15px 0 15px 40px;
      cursor: pointer;
    }

    .row2{
      padding: 0;
    }
    .secondtitle{
      height: 24px;
      line-height: 24px;
    }
    .third-sec{
      max-width: 900px;
    }
    .second{
      width: 1000px;
      margin-left: 200px;
      padding: 12px 0;
      position: absolute;
      background: rgba(0,0,255,.5);
      display: none;
    }
    .thrid{
      width: 1000px;
      display: flex;
      align-items: flex-start;
      background: none;
      // background: #f9f;
      .row3{
        height: 30px;
        padding: 0;
      }
      a{
        font-size: 13px;
        color: #fff;
        padding: 2px 10px;
        border-left: 1px solid #fff;
        line-height: 30px;
        margin: 0;
      }
    }
  }
  .row1:hover .first{
    background: #2693d4;
  }
  .row1:hover .second{
    display: block;
  }
  .g{   //logo的公共样式
    width: 30px;
    height: 30px;
    display: block;
    padding: 0;
    background: @url;
  }
  //每个小块的logo
  .produce-logo{
    .g;
    position: absolute;
    left: 14px;
    top: 17px;
    background-position: 0 -64px;
  }
  .company-logo{
    .g;
    position: absolute;
    left: 14px;
    top: 125px;
    background-position: 0 -100px;
  }
  .knows-logo{
    .g;
    position: absolute;
    left: 14px;
    top: 217px;
    background-position: 0 -136px;
  }
  .social-logo{
    .g;
    position: absolute;
    left: 14px;
    top: 330px;
    background-position: 0 -172px;
  }
  >div:hover{
    background: #2693d4;
  }
}
.allProduce{
  transition: opacity 1;
}
.fold-enter-active, .fold-leave-active {
    transition: opacity .5s;
}
.fold-enter{
  opacity: 0;
}
.fold-leave-to {
   opacity: 0;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

