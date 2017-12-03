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
            <p>我的评价</p>
          </div>
          <!-- 评价表头 -->
          <div class="evaluHead">
              <div class="unvalued">未评价</div>
              <div class="haveEvalu">已评价</div>
              <span></span>
          </div>
          <!-- 评价插入-已评价 -->
          <div class="orderInsert">

          </div>
          <!-- 翻页 -->
          <div class="pageTurn">
            <input type="button" class="prePage" value="上一页">
            <div></div>
            <input type="button" class="nextPage" value="下一页">
          </div>
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
 .evaluHead{
     width: 934px;
     height: 43px;
     background-color: #f7f7f7;
     margin-top: 24px;
     border: 1px solid #cccccc;
     font-size: 14px;
     line-height: 43px;
     position: relative;
     div{
         width: 107px;
         height: 43px;
         border: 1px solid #cccccc;
     }
     .unvalued{
         float: left;
         color: #3c3c3c;
     }
     .haveEvalu{
         background-color: #2693d4;
         float: left;
         color: #fff;
     }
     span{
       width: 15px;
       height: 15px;
       background-color: #2693d4;
       position: absolute;
       top: 35px;
       left: 156px;
       transform: rotate(45deg);
     }
 }
}
</style>


