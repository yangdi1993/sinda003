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
            <a href="#/myOrder">
              <div class="perBusO">
                <div class="perBusOB"></div>
                <p>我的订单</p>
              </div>
            </a> 
            <a href="#/userUnEvalu">
              <div class="perBusTw">
                <div class="perBusTwB"></div>
                <p>用户评价</p>
              </div>
            </a> 
            <a href="">
              <div class="perBusTh">
                <div class="perBusThB"></div>
                <p>账户设置</p>
              </div>
            </a>
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
            <!-- 五角星 -->
            <li id="rank" class="pingfen">
                评分：
                <ul>  
                    <li></li>  
                    <li></li>  
                    <li></li>  
                    <li></li>  
                    <li></li>  
                </ul>  
                <p class="starGra">加载中</p>  
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
  // data () {
   
  // },
}
methods:{
  
  }
  // 评分五角星
var aData =["很差","较差","一般","推荐","力推"];  
window.onload=function(){  
    var oDiv = document.getElementById("rank");  
    var aLi = document.querySelectorAll("#rank li");  
    var oP = document.querySelector(".starGra");  
    var i =0;  
    for(i=0;i<aLi.length;i++){  
        aLi[i].index = i;  
        // 鼠标进入
        aLi[i].onmouseover = function(){  
            oP.style.display = "block";  
            oP.innerHTML=aData[this.index];  
            for(i=0; i<=this.index;i++){  
                aLi[i].className="active";  
            }  
        };
          // 鼠标离开
        aLi[i].onmouseout = function(){  
            oP.style.display = "";  
            for(i=0; i<aLi.length; i++){  
                aLi[i].className="";  
            }  
        }; 
        //  点击
        aLi[i].onclick=function(){  
            // alert(this.index +1);
            for(i=0;i<this.index;i++){
                aLi[i].className="active";
            }
        };  
    }  
};
// 点击跳转页面
var perBusTw = document.querySelector('.perBusTw');
console.log(perBusTw);

</script>



<style scoped lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
 .memCenBg{
    width: 100%;
    height: 705px;
    .memCenDiv{
      width: 1200px;
      height: 705px;
      margin: 0 auto;
      .memCenLe{
        width: 240px;
        height: 705px;
        float: left;
        list-style: none;
      }
      .memCenRi{
        width: 934px;
        height: 705px;
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
  .perBus>a>div{
    overflow: hidden;
    cursor: pointer;
  }
  .perBus>a>div:hover{
    background-color: #e9e9e9;
  }
 .perBus>a>div>div{
    width: 27px;
    height: 25px;
    margin-left: 56px;
    margin-top: 14px;
    float: left;
 }
 .perBus>a>div>p{
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
            margin-top: 5px;
            border: 1px solid 
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
    margin-top: 0px;
}
.orderSub{
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: #2693d4;
    font-size: 14px;
    color: #fff;
    outline: 0;
    margin-left: 220px;
    margin-top: 30px;
}
.pingfen{ 
    width: 135px; 
    margin-left: 0px;
    margin-top: 0px;
    height:20px; 
    position: relative;
  }     
 .pingfen ul{
    height:20px; 
    margin-top: -50px;
    margin-left: 70px;
   }     
 .pingfen li{ 
    width: 44px; 
    float: left; 
    height: 33px; 
    cursor: pointer; 
    background: url(../images/memCen.png) no-repeat -67px -189px; 
    list-style: none;
   }    
  .pingfen .active{
    background: url(../images/memCen.png) no-repeat -67px -152px;
  }   
   .pingfen p{ 
      position: absolute; 
      top:-6px; 
      left: 300px; 
      width: 134px; 
      height: 28px;                  
      background: #fff; 
      line-height: 28px; 
      text-align: center; 
      border:1px solid #333;           
      display:none;
    }  
// }
</style>


