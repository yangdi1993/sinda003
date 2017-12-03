<template>
  <div id="app">
    <div class="memCenBg">
      <div class="memCenDiv">
        <!-- 左侧边栏 -->
        <ul class="memCenLe">
          <p class="homePer">首页/个人主页</p>
          <!-- 个人信息 -->
          <li class="perIma">
            <div class="headPor"></div>
            <p class="perPnoNum">13800138000</p>
          </li>
          <!-- 业务 -->
          <li class="perBus">
            <div class="perBusO">
              <div class="perBusOB"></div>
              <p>我的订单</p>
            </div>
            <div class="perBusTw">
              <div class="perBusTwB"></div>
              <p>用户评价</p>
            </div>
            <div class="perBusTh">
              <div class="perBusThB"></div>
              <p>账户设置</p>
            </div>
          </li>
        </ul>
        <!-- 右侧边栏 -->
        <div class="memCenRi">
          <div class="myOrderHead">
            <p>评价</p>
          </div>
          <!-- 待评价订单信息 -->
          <ul class="orderInfo">
              <li>服务单号：
                  <a>等待插入</a>
              </li>
              <li>购买时间：
                  <a>等待插入</a>
              </li>
              <li>购买内容：
                  <a>等待插入</a>
              </li>
          </ul>
        <!-- 评价详情 -->
        <ul class="orderDetail">
            <li class="orderGra">
                评价： 
                <input type="radio" name="gra">
                <a href="javascript:void(0)">好评</a>
                <input type="radio" name="gra">
                <a href="javascript:void(0)">中评</a>
                <input type="radio" name="gra">
                <a href="javascript:void(0)">差评</a>
            </li>
            <li class="fiveStar">
                评分：
                <ul>
                    <li class="light"><a href="javascript:void(0)">1</a></li>
                    <li><a href="javascript:void(0)">2</a></li>
                    <li><a href="javascript:void(0)">3</a></li>
                    <li><a href="javascript:void(0)">4</a></li>
                    <li><a href="javascript:void(0)">5</a></li>
                </ul>

            </li>
            <li>
                <span class="feel">感受：</span> 
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </li>
        </ul>
        <input class="orderSub" type="button" value="提交">
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ihead from '../components/ihead'
export default {
  data () {
   
  },
}
// var num=finalnum = tempnum= 0;
// var lis = document.getElementsByTagName("li");
// //num:传入点亮星星的个数
// //finalnum:最终点亮星星的个数
// //tempnum:一个中间值
// function fnShow(num) {
//     finalnum= num || tempnum;//如果传入的num为0，则finalnum取tempnum的值
//     for (var i = 0; i < lis.length; i++) {
//     lis[i].className = i < finalnum? "light" : "";//点亮星星就是加class为light的样式
//     }
// }
// for (var i = 1; i <= lis.length; i++) {
//     lis[i - 1].index = i;
//     lis[i - 1].onmouseover = function() { //鼠标经过点亮星星。
//     fnShow(this.index);//传入的值为正，就是finalnum
//     }
//  lis[i - 1].onmouseout = function() { //鼠标离开时星星变暗
//     fnShow(0);//传入值为0，finalnum为tempnum,初始为0
//  }
//  lis[i - 1].onclick = function() { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
//     tempnum= this.index;
//  }
// }

</script>

<style scoped lang="less">
// 固定最小宽度
@media all and (min-width:1200px){
 .memCenBg{
    width: 100%;
    height: 786px;
    .memCenDiv{
      width: 1200px;
      height: 786px;
      margin: 0 auto;
      .memCenLe{
        width: 240px;
        height: 886px;
        float: left;
        list-style: none;
      }
      .memCenRi{
        width: 934px;
        height: 886px;
        float: left;
        margin-left: 26px;
      }
    }
  }
  .homePer{
    font-size: 13px;
    color: #2a2a2a;
    margin-top: 26px;
    margin-left: -100px;
  }
  .perIma{
    width: 100%;
    height: 140px;
    margin-top: 13px;
    background-color: #e9e9e9;
    overflow: hidden;
    // 头像
    .headPor{
      margin: 9px auto;
      width: 96px;
      height: 96px;
      background: url(../images/memCen.png) -14px -12px no-repeat;
    }
    .perPnoNum{
      font-size: 16px;
      color: #000000;
    }
  }
  // 左侧边栏下栏样式
  .perBus{
    width: 100%;
    height: 377px;
    background-color: #f7f7f7;
    margin-top: 9px;
  }
  .perBus>div{
    overflow: hidden;
  }
 .perBus>div>div{
    width: 27px;
    height: 25px;
    margin-left: 56px;
    margin-top: 14px;
    float: left;
 }
 .perBus>div>p{
    font-size: 16px;
    color: #000000;
    margin-left: 13px;
    float: left;
    line-height: 50px;
 }
 .perBusTw{
   background-color: #e9e9e9;
 }
//  左边栏小背景
 .perBusOB{
   background: url(../images/memCen.png) -25px -126px no-repeat;
 }
 .perBusTwB{
   background: url(../images/memCen.png) -25px -159px no-repeat;
 }
 .perBusThB{
   background: url(../images/memCen.png) -25px -190px no-repeat;
 }
 .myOrderHead{
   width: 934px;
   height: 30px;
   margin-top: 60px;
   margin-left: 0;
   border-bottom: 1px solid #e9e9e9;
   p{
     width: 80px;
     font-size: 14px;
     font-weight: bold;
     color: #3e9bd6;
     margin-left: 10px;
     padding: 5px 27px;
     border-bottom: 2px solid #3e9bd6;
   }
 }
//  评价订单信息
.orderInfo{
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    list-style: none;
    display: flex;
    li{
        margin-right: 100px;
    }
}
// 评价详情
.orderDetail{
    list-style: none;
    text-align: left;
    position: relative;
    li{
        margin-top: 20px;
        width: 934px;
        position: relative;
        textarea{
            width: 550px;
            height: 150px;
            margin-left: 75px;
            outline: 0;
            margin-top: -40px;
        }
        input{
            outline: 0;
            margin-left: 20px;
        }
        a{
            margin-right: 50px;
            color: #111;
            text-decoration: none;
        }
    }
}
.feel{
    position: absolute;
    margin-top: -45px;
}
.orderSub{
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: #2693d4;
    font-size: 14px;
    color: #fff;
    // position: absolute;
    outline: 0;
    margin-left: 220px;
    margin-top: 30px;
}
.fiveStar{
    ul {
        padding-left: 0;
        overflow: hidden;
    }
    ul li {
        float: left;
        list-style: none;
        width: 27px;
        height: 27px;
        background: url(../images/memCen.png) -190px -70px no-repeat;
    }
    ul li a {
        display: block;
        width: 100%;
        padding-top: 27px;
        overflow: hidden;
    }
    ul li.light {
        background-position: -220px -70px;
    }

}
}
</style>


