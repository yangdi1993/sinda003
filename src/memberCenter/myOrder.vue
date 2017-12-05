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
            <!-- <a v-bind:href="userUnEvalu"> -->
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
            <p>我的订单</p>
          </div>
          <!-- 搜索行 -->
          <div class="orderSearch">
            <p>订单号：</p>
            <input type="text" class="orSerIn" placeholder="请输入订单号搜索">
            <input type="button" class="orSerBut" value="搜索">
          </div>
          <!-- 时间行 -->
          <div class="timeSet">
            <p>创建时间：</p>
            <input class="timeStart" type="date"> 至 
            <input class="timeEnd" type="date">
          </div>
          <!-- 订单表头 -->
          <ul class="orderHead">
            <li class="comName">商品名称</li>
            <li>单价</li>
            <li>数量</li>
            <li>总金额</li>
            <li>订单状态</li>
            <li>订单操作</li>
          </ul>
          <!-- 订单插入 -->
          <div class="orderInsert">
            <!-- <div>1</div> -->

          </div>
          <!-- 翻页 -->
  
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ihead from '../components/ihead'
// 翻页组件
export default {
  data(){
    return{
      // ordDeLoad:'',
    }
  },
  created(){
      var ordDetForm = document.createElement('div');
      console.log(ordDetForm); 
      var orderInsert = document.getElementsByClassName('orderInsert')[0];
      console.log(orderInsert);
      ordDetForm.style = {
        border: '1px solid red',
        width: '934px',
        height: '80px',
        marginTop: '12px'
      };
      orderInsert.appendChild(ordDetForm);
      console.log(79);
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
 .memCenBg{
    width: 100%;
    height: 786px;
    .memCenDiv{
      width: 1200px;
      height: 786px;
      margin: 0 auto;
      .memCenLe{
        width: 240px;
        height: 786px;
        float: left;
        list-style: none;
      }
      .memCenRi{
        width: 934px;
        height: 786px;
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
 .perBusO{
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
//  订单搜索
  .orderSearch{
    width: 934px;
    height: 25px;
    margin-top: 23px;
    p{
      width: 80px;
      font-size: 14px;
      color: #242424;
      margin-left: 0;
      line-height: 25px;
      float: left;
    }
    // 搜索框
    .orSerIn{
      width: 265px;
      height: 25px;
      margin-left: 15px;
      outline: 0;
      float: left;
      border: 1px solid #b0b0b0;
    }
    // 搜索按钮
    .orSerBut{
      width: 70px;
      height: 25px;
      margin-left: -480px;
      border-radius: 3px;
      background-color: #fff;
      border: 1px solid #2494d3;
      font-size: 14px;
      color: #3d9bd8;
      outline: 0;
    }
    .orSerBut:hover{
      cursor: pointer;
    }
  }
  // 时间框
 .timeSet{
    width: 934px;
    height: 25px;
    margin-top: 20px;
    font-size: 14px;
    color: #242424;
    p{
      width: 80px;
      font-size: 14px;
      color: #242424;
      margin-left: 7px;
      line-height: 25px;
      float: left;
    }
    .timeStart{
      width: 120px;
      height: 25px;
      outline: 0;
      margin-left: -565px;
      border: 1px solid #b0b0b0;
    }
    .timeEnd{
      width: 120px;
      height: 25px;
      outline: 0;
      border: 1px solid #b0b0b0;
      // margin-left: -10px;
    }
 }
//  订单表头
 .orderHead{
   width: 934px;
   height: 34px;
   margin-top: 20px;
   margin-left: 0;
   border-top: 1px solid #b0b0b0;
   background-color: #f7f7f7;
   display: flex;
   list-style: none;
   line-height: 34px;
   font-size: 12px;
   color: #3f3f3f;
   font-weight: bold;
   li{
     margin-left: 90px;
   }
   .comName{
     margin-left: 38px;
     margin-right: 185px;
   }
 }
 .orderInsert{
   width: 934px;
   height: 356px;
   margin-top: 12px;
   background-color: pink;
 }
 .pageTurn{
  //  width: 300px;
   height: 36px;
   margin-top: 37px;
   font-size: 14px;
   color: #cccccc;
   line-height: 36px;
   
   .prePage{
     width: 68px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-left: 370px;
     margin-right: 6px;
     outline: 0;
   }
   .nextPage{
     width: 68px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-left: 6px;
     margin-right: 6px;
     outline: 0;
   }
 }
// 翻页 

// }
</style>


