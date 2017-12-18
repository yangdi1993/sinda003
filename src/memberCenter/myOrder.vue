<template>
  <div id="aaapp">
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
            <a href="#/inner/myOrder">
              <div class="perBusO">
                <div class="perBusOB"></div>
                <p>我的订单</p>
              </div>
            </a> 
            <a href="#/inner/userUnEvalu">
              <div class="perBusTw">
                <div class="perBusTwB"></div>
                <p>用户评价</p>
              </div>
            </a> 
            <a href="#/inner/accountSetting">
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
            <input type="text" class="orSerIn" v-model="orSerInVal" placeholder="请输入订单号搜索">
            <input type="button" class="orSerBut" value="搜索" @click="orderSeaBtn()">
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
          <div id='orderInsert' v-for="(item,idx) in rDataSh" :key="item.cardTypeName">
            <!-- 删除 弹出框 -->
              <div class="duihuakuang" v-show="isShow">
                <div class="confirmIma">
                  <p>信息</p>
                  <div class="close" @click="closeFun()">×</div>
                </div>
                <p class="confirm">确定删除该订单吗？</p>
                <button class="confirmYes" @click="conCloseFun()">确定</button>
                <button class="confirmNo" @click="canCliseFun()">取消</button>
              </div>
              <!-- 订单插入 -->
              <table class="orderInTa" id="myorderInTa" v-show="searchShow">
                <tr class="orderInTh">
                  <th class="orderInThTdO" colspan="2">
                    <input type="checkbox" v-model="businessNo">
                    订单号：{{item.businessNo}}
                  </th>
                  <th class="orderInThTdTw" colspan="5">
                    <span></span>
                    下单时间：{{item.createTime}}</th>
                </tr>
                <tr class="orderInTr">
                  <td class="orderInTrTdO">
                    {{item.name3}}
                  </td>
                  <td class="orderInTrTdTw">{{item.name4}}</td>
                  <td class="orderInTrTdTh">{{item.name5}}</td>
                  <td class="orderInTrTdFo">{{item.name6}}</td>
                  <td class="orderInTrTdFi">{{item.totalPrice}}</td>
                  <td class="orderInTrTdSi">{{item.name8}}</td>
                  <td class="orderInTrTdSe">
                    <input type="button" value="付款">
                    <p class="delOr" v-on:click="delOrder()">删除订单</p>
                  </td>
                </tr>
              </table>  
          </div>
          <!-- 翻页 -->
          <div class="pageTurn">
            <button class="prePage" @click="prePageBtn()">上一页</button>
            <button class="pageNum">{{page}}</button>
            <button class="nextPage" @click="nextPageBtn()">下一页</button>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// 引进头部和尾部
// this.ajax.post("").then(data=>{
//       console.log('');
import ihead from '../components/ihead'
import getData from '../homepage/public'
export default {
  data(){
    return{
      index:-1,
      // 全部数据
      rData:[{name:'first'},{name:'second'},{name:'third'}],
      // 当前页要显示的数据
      rDataSh:[{name:'first'},{name:'second'},{name:'third'}],
      // 弹出框
      isShow:false,
      // 搜索
      orSerInVal:"",
      // 搜索数据
      searchShow:true,
      // // 接口数据全部
      // rData:[],
      // // 接口数据显示
      // rDataSh:[],
    }
  },
  created(){
    // 接口获取订单数据
    var that = this;
    this.ajax.post('/xinda-api/business-order/grid',this.qs.stringfy({
      businessNo:businessNo,
      start:0,
      limit:3,
    })).then(function(data){
      // 循环订单
    for(var i=0;i<data.data.data.length;i++){
      // 获取时间戳
      var time = data.data[i].createTime;
      // 转换为标准日期格式
      var newTime = new Data(time);
      // 年-月-日-时-分-秒
      Y = newTime.getFullYear() + '-';
      M = (newTime.getMonth()+1 < 10 ? '0'+(newTime.getMonth()+1) : newTime.getMonth()+1) + '-';
      D = newTime.getDate() + ' ';
      h = newTime.getHours() + ':';
      m = newTime.getMinutes() + ':';
      s = newTime.getSeconds();
      var showTime = Y+M+D+h+m+s;
      console.log(showTime); //显示标准时间
      // 转变后的时间替换
      time = showTime;
    }
    var rData1 = data.data.data;
    that.rData = rData1;
   

    });



    this.ajax.post('xinda-api/cart/list').then(function(data){
      console.log(data.data)
    })
  },
  methods:{
    // 点击删除弹出框
    delOrder:function(index){
      this.isShow = true;
    },
    // 点击X弹出框消失
    closeFun:function(){
      this.isShow = false;
    },
    // 点击确定
    conCloseFun:function(index){
      this.isShow = false;
      this.rDataSh.splice(index,1)
    },
    // 点击取消
    canCliseFun:function(index){
      this.isShow = false;
    },
    // 订单搜索
    orderSeaBtn:function(){
      // 清空页面要渲染的数据
      this.rDataSh = [];
      for(var i=0;i<this.rData.length;i++){
        var ordLiNa = this.rData[i].name;
        if(ordLiNa==this.orSerInVal){
          // 把符合条件的数据添加到[]里面
          this.rDataSh.push(this.rData[i]);
        }
        else{

        }
      }  
    }
  }
}
</script>

<style scoped lang="less">
// 删除弹出框
.duihuakuang{
  width: 350px;
  height: 200px;
  background-color: #fff;
  position: absolute;
  top: 513px;
  left: 655px;
  border: 1px solid #3f3f3f;
  .confirmIma{
    width: 350px;
    height: 50px;
    background-color: #e8e8e8;
    border-bottom: 1px solid #3f3f3f;
     overflow: hidden;
    p{
      font-size: 18px;
      font-weight: bold;
      color: #3d3d3d;
      margin-left: 10px;
      margin-top: 15px;
      float: left;
    }
    .close{
      width: 50px;
      height: 50px;
      background-color: #e8e8e8;
      float: left;
      margin-left: 300px;
      margin-top: -36px;
      color: #222;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
    }
    .close:hover{
      background-color: #999;
      color: #e8e8e8;
    }
  }
}
.confirm{
  font-size: 18px;
  color: #3f3f3f;
  margin-top: 30px;
}
.confirmYes{
  width: 100px;
  height: 40px;
  border: 1px solid #3f3f3f;
  border-radius: 3px;
  margin-top: 40px;
  outline: 0;
  cursor: pointer;
  background-color: #2693d4;
  color: #fff;
}
.confirmNo{
  width: 100px;
  height: 40px;
  border: 1px solid #3f3f3f;
  border-radius: 3px;
  margin-top: 40px;
  outline: 0;
  cursor: pointer;
  background-color: #fff;
}
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
 .perBusTh{
   background-color: #f7f7f7;
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
     padding: 7px 27px;
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
     margin-left: 85px;
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
   position: relative;
 }
 .pageTurn{
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
// 订单插入
.orderInTa{
  width: 935px;
  height: 108px;
  margin-top: 10px;
  border: 1px solid #e8e8e8;
  .orderInTh{
    width: 935px;
    height: 37px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e8e8e8;
    .orderInThTdO{
      width: 193px;
      height: 37px;
      font-size: 14px;
      color: #616161;
      margin-left: -10px;
      input{
        margin-left: -160px;
        outline: 0;
      }
    }
    .orderInThTdTw{
      width: 222px;
      height: 37px;
      font-size: 14px;
      color: #616161;
      margin-left: -10px;
      span{
        margin-left: -555px;
      }
    }
  }
  .orderInTr{
    width: 933px;
    height: 68px;
    .orderInTrTdO{
      width: 70px;
      height: 68px;
      background-color: royalblue;
    }
    .orderInTrTdTw{
      width: 238px;
      height: 68px;
      background-color: red;
      font-size: 12px;
      color: #656565;
      text-align: left;
    }
    .orderInTrTdTh{
      width: 129px;
      height: 68px;
      background-color: greenyellow;
      font-size: 12px;
      color: #656565;
    }
    .orderInTrTdFo{
      width: 95px;
      height: 68px;
      background-color: royalblue;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      color: #656565;
    }
    .orderInTrTdFi{
      width: 139px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      color: #2393d5;
    }
    .orderInTrTdSi{
      width: 143px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      color: #2393d5;
    }
    .orderInTrTdSe{
      width: 118px;
      height: 68px;
      input{
        width: 56px;
        height: 23px;
        background-color: #2793d3;
        color: #fff;
        font-size: 14px;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
      }
      p{
        font-size: 14px;
        color: #ff4747;
        margin-top: 9px;
        cursor: pointer;
      }
    }
  }
}
// 未找到相应订单
.unFindOr{
  width: 200px;
  height: 50px;
  font-size: 20px;
  border: 2px solid red;
  line-height: 50px;
  position: absolute;
  margin-top: 100px;
  margin-left: 368px;
}

</style>


