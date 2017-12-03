<template>
  <div class="ihead">
    <div class="ihead-in">
      <div class="ihead-top">
        <div class="iheadleft">
          <a href="#/inner/homepage" class="ihead-logo"></a>  <!-- logo -->
          <a href="#/inner/homepage" class="ihead-sinda">信达</a>
          <div>
            <p class="iheadcity">北京市</p>
            <a href="javascript:void(0)" class="iheadchange">[切换城市]</a>
          </div>
        </div>
        <div class="iheadcenter">
          <div>
            <a href="javascript:void(0)" class="iheadproduct">产品</a>
            <a href="javascript:void(0)" class="iheadseverce">服务商</a>
          </div>
          <form action="">
            <input type="text" class="ihead-search" placeholder="搜索您需要的服务或服务商">
            <button class="iheadbtn" v-on:click="btn"><span></span></button>
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
      <div class="ihead-bottom" v-on:click="iheadBottom">
        <a href="javascript:void(0)">全部产品</a>
        <a href="javascript:void(0)">财税服务</a>
        <a href="javascript:void(0)">公司工商</a>
        <a href="javascript:void(0)">加盟我们</a>
        <a href="javascript:void(0)">店铺</a>
      </div>
    </div>
  </div>
</template>

<script>
var btn=document.querySelector('.iheadbtn')
// btn.onenter=function(){
  console.log(123)
// }
export default {
  //  mounted(){
  //   var btn=document.querySelector('.iheadbtn')
  //   btn.onenter=function(){
  //     console.log(123)
  //   }
  // },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    btn:function(){
      console.log(456)
    },
    iheadBottom:function(e){  //给点击的选项添加样式
      
      var e=e||window.e;
      var target=e.target;
      if(target.tagName=='A'){
        var btm=document.querySelector('.ihead-bottom')   //每次点击都会给导航栏初始化样式,必需在内部
        for(var i=0;i<btm.children.length;i++){
          btm.children[i].style="color: #000;border-bottom: none"
        };
        target.style="color: #2693d4;border-bottom: 2px solid #2693d4";
      }
    }
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
    a{
      font-size: 18px;
      color: #000;
      padding: 9px 0;
      font-family: '黑体';
      margin: 0 62px;
      text-decoration: none;
      line-height: 38px;
    }
    a:nth-child(1){
      color: #2693d4;
      border-bottom: 2px solid #2693d4;
    }
    a:hover{
      color: #2693d4;
      border-bottom: 2px solid #2693d4;
    }
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

