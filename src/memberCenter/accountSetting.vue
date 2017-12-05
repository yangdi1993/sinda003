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
            <a href="#/accountSetting"><p >账户设置</p></a>
            <a href="#/changePw"><p>修改密码</p></a>
            <!--<router-link to='changePw' replace>账户设置</router-link>-->
          </div>
          <ul class="settings">
            <li class="photo">
              <p>当前头像：</p>
              <div></div>
            </li>
            <li class="name">
              <p>姓名：</p>
              <input type="text">
            </li>
            <li class="gender">
              <p>性别：</p>
              <input type="radio" name="selGenter"><span>男</span>
              <input type="radio" name="selGenter"><span>女</span>
            </li>
            <li class="email">
              <p>邮箱：</p>
              <input type="text" placeholder="请输入邮箱" v-model="email" v-on:blur="emailBlur"v-on:focus="emailFocus">
              <span>*</span>
            </li>
            <li  class="select">
              <p>所在地区：</p>
              <v-distpicker province="省" city="市" area="区"></v-distpicker>
            </li>
           <button class="save">保存</button>
          </ul>
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
    return{
      email:'',
    }
  },
  methods:{
    emailBlur:function(){
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      var emailSpan = document.querySelector('.email span');
      var emailValue = this.email;
      if(emailValue==''){
        emailSpan.innerHTML = "邮箱不能为空";
        emailSpan.style.color = "red";
      }else if(emailReg.test(emailValue)){
        console.log(emailValue);
        emailSpan.innerHTML = "✔";
        emailSpan.style.color = "green";
      }else{
        emailSpan.innerHTML = "邮箱格式错误";
        emailSpan.style.color = "red";
      }
    },
    emailFocus:function(){
      var emailSpan = document.querySelector('.email span');
      emailSpan.innerHTML = "*";
      emailSpan.style.color = "red";
      
    },
  }

}
</script>

<style lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
li {
  list-style: none;
}

.memCenBg {
  width: 100%;
  height: 786px;
  .memCenDiv {
    width: 1200px;
    height: 786px;
    margin: 0 auto;
    .memCenLe {
      width: 240px;
      height: 786px;
      float: left;
      list-style: none;
    }
    .memCenRi {
      width: 934px;
      height: 786px;
      float: left;
      margin-left: 26px;
    }
  }
}

.homePer {
  font-size: 13px;
  color: #2a2a2a;
  margin-top: 26px;
  margin-left: -100px;
}

.perIma {
  width: 100%;
  height: 140px;
  margin-top: 13px;
  background-color: #e9e9e9;
  overflow: hidden; // 头像
  .headPor {
    margin: 9px auto;
    width: 96px;
    height: 96px;
    background: url(../images/memCen.png) -14px -12px no-repeat;
  }
  .perPnoNum {
    font-size: 16px;
    color: #000000;
  }
} // 左侧边栏下栏样式
.perBus {
  width: 100%;
  height: 377px;
  background-color: #f7f7f7;
  margin-top: 9px;
}

.perBus>a>div {
  overflow: hidden;
  cursor: pointer;
}

.perBus>a>div:hover {
  background-color: #e9e9e9;
}

.perBus>a>div>div {
  width: 27px;
  height: 25px;
  margin-left: 56px;
  margin-top: 14px;
  float: left;
}

.perBus>a>div>p {
  font-size: 16px;
  color: #000000;
  margin-left: 13px;
  float: left;
  line-height: 50px;
}

.perBusTh {
  background-color: #e9e9e9;
}

//  左边栏小背景
.perBusOB {
  background: url(../images/memCen.png) -25px -126px no-repeat;
}

.perBusTwB {
  background: url(../images/memCen.png) -25px -159px no-repeat;
}

.perBusThB {
  background: url(../images/memCen.png) -25px -190px no-repeat;
}

.myOrderHead {
  display: flex;
  width: 934px;
  height: 30px;
  margin-top: 60px;
  margin-left: 0;
  border-bottom: 1px solid #e9e9e9;
 
  p {
    width: 80px;
    font-size: 14px;
    font-weight: bold;
    color: #262626;
    margin-left: 10px;
    padding: 5px 27px;
  }
   a{
    text-decoration: none;
  }
  a:nth-child(1) p{
    color: #3e9bd6;
    border-bottom: 2px solid #3e9bd6;
  }
  a:nth-child(2) p{
    color: #262626;
    border-bottom: none;
  }
}

.pageTurn {
  //  width: 300px;
  height: 36px;
  margin-top: 37px;
  font-size: 14px;
  color: #cccccc;
  line-height: 36px;

  .prePage {
    width: 68px;
    height: 36px;
    background-color: #fff;
    border: 1px solid #cccccc;
    float: left;
    margin-left: 370px;
    margin-right: 6px;
    outline: 0;
  }
  .nextPage {
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

.settings {
  width: 950px;
  height: 500px; 
  li {
    display: flex;
    margin-top: 25px;
    p {
      margin: 0px 25px 0 25px;
      text-align: left;
      width: 100px;
      height: 24px;
      color: #676767;
    }
    input {
      border: 1px solid #b0b0b0;
      padding-left: 10px;
    }
  }
  .photo {
    p {
      height: 100px;
      line-height: 100px;
    }
    div {
      width: 100px;
      height: 100px;
      background: url(../images/login/login_logo1.png) no-repeat 0 -443px;
    }
  }
  .name input,
  .email input {
    width: 180px;
    height: 23px;
  }
  .email{
    span{
      font-size: 11px;
      color:red;
      margin: 5px;
    }
  }
  .gender{
    span{
      margin-right: 18px;
    }
    input{
      margin: 5px 8px 0 0;
    }
  }
  .select select{
    margin-right: 11px;
    width: 75px;
    height: 23px;
    border: 1px solid #b0b0b0;
    border-radius: 0;
    font-size: 12px;
    padding: 0;
  }
  .save{
    float: left;
    margin: 45px 0 0 151px;
    width: 68px;
    height: 24px;
    color: #2793d4;
    font-weight: bold;
    border: 1px solid #2793d4;
    border-radius: 3px;
    background: #fff;

  }
}

</style>


