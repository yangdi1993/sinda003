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
            <a href="#/inner/accountSetting">
              <p>账户设置</p>
            </a>
            <a href="#/inner/changePw">
              <p>修改密码</p>
            </a>
          </div>
          <ul class="changePassword">
            <li class="password">
              <p>旧密码：</p>
              <input :type="oldPwTppe" v-model="password" v-on:blur="pwBlur" v-on:focus="pwFocus">
                <img :src="oldUrl" alt="" class="eye" @click="changeOP">
              <span>{{oldErr}}</span>
            </li>
            <li class="newPw">
              <p>新密码：</p>
              <input :type="newPwTppe" v-model="newPw" v-on:blur="newPwBlur" v-on:focus="newPwFocus">
              <img :src="newUrl" alt="" class="eye" @click="changeNP">
              <a href="#">密码由6-16位数字和字母组成</a>
              <span>{{newErr}}</span>
            </li>
            <li class="conPw">
              <p>再次输入新密码：</p>
              <input :type="verPwTppe" v-model="conPw" v-on:blur="conPwBlur" v-on:focus="conPwFocus">
              <img :src="verUrl" alt="" class="eye" @click="changeVP">
              <span>{{verErr}}</span>
            </li>
            <p v-show="success" id="success">密码修改成功</p>
            <button class="savePw" @click='savePwBut'>保存</button>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ihead from '../components/ihead';
const eye = [
require('../images/login/invisible.png'),
require('../images/login/visible.png'),
];
export default {
  data() {
    return {
      //  旧密码
      password: '',//密码
      oldErr: '\u2736',//报错提示
      oldPwTppe: 'password',//密码显示类型
      Oinvisible: '',//密码
      Ovisible: '',//明码
      oldUrl: eye[0],//明码
      //  新密码
      newPw: '',
      newErr: '\u2736',
      newPwTppe: 'password',
      newUrl: eye[0],
      //  确认密码
      conPw: '',
      verErr: '\u2736',
      verPwTppe: 'password',
      verUrl: eye[0],
      loginId: '',//登录id
      success:false,//修改成功提示
    }
  },
  created() {
    // 验证登录信息
    this.ajax.post('/xinda-api/sso/login-info').then(data => {
      // console.log(data.data.data)
      this.loginId = data.data.data.loginId;
      // console.log(this.loginId);
    })
  },
  methods: {
    // 旧密码失去焦点事件
    pwBlur: function() {
      if (this.password == '') {
        this.oldErr = '旧密码不能为空';
      }
    },
    // 旧密码获得焦点事件
    pwFocus: function() {
      this.oldErr = '\u2736';
    },

    // 新密码失去焦点事件
    newPwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.newPw == '') {
        this.newErr = '新密码不能为空';
      } else if (newPwReg.test(this.newPw)) {
        // 验证通过
        this.newErr = '\u2736';
      } else {
        this.newErr = '新密码格式错误';
      }
    },
    // 新密码获得焦点事件
    newPwFocus: function() {
      this.newErr = '\u2736';
    },

    // 确认密码焦点事件
    conPwBlur: function() {
      if (this.conPw == '') {
        this.verErr = '确认密码不能为空';
      } else if (this.newPw == this.conPw) {
        // 验证通过
        this.verErr = '\u2736';
      } else {
        this.verErr = '两次输入密码不一致';
      }
    },
    conPwFocus: function() {
      this.verErr = '\u2736';
    },
    // 切换明码暗码
    changeOP: function() {
      this.oldPwTppe = this.oldPwTppe === 'password' ? 'text' : 'password';
      if (this.oldPwTppe === 'password') {
        // 密码
        this.oldUrl = eye[0];
      } else {
        // 明码
        this.oldUrl = eye[1];
      }
    },
    changeNP: function() {
      this.newPwTppe = this.newPwTppe === 'password' ? 'text' : 'password';
      if (this.newPwTppe === 'password') {
        // 密码
        this.newUrl = eye[0];
      } else {
        // 明码
        this.newUrl = eye[1];
      }
    },
    changeVP: function() {
      this.verPwTppe = this.verPwTppe === 'password' ? 'text' : 'password';
      if (this.verPwTppe === 'password') {
        // 密码
        this.verUrl = eye[0];
      } else {
        // 明码
        this.verUrl = eye[1];
      }
    },
    // 保存按钮
    savePwBut: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      // console.log(user)
      if (this.password == '') {
        this.oldErr = '旧密码不能为空';
      } else if (this.newPw == '') {
        this.newErr = '新密码不能为空';
      } else if (this.conPw == '') {
        this.verErr = '确认密码不能为空';
      } else if (newPwReg.test(this.newPw) && this.newPw == this.conPw) {
        this.ajax.post('/xinda-api/sso/change-pwd', this.qs.stringify({ oldPwd: this.password, newPwd: this.newPw })).then(data => {
          console.log(data.data)
          if (data.data.status == -999) {
            this.password = '';
            this.newPw = '';
            this.conPw = '';
            this.verErr = '未登录账号';
          } else if (data.data.status == -1) {
            this.verErr = '旧密码错误';
          } else if (data.data.status == 1) {
            this.success = true;
            this.password = '';
            this.newPw = '';
            this.conPw = '';
          }
        })
        // 重置错误提示信息
        this.oldErr = '\u2736';
        this.newErr = '\u2736';
        this.verErr = '\u2736';
      }else if(this.newPw != this.conPw){
        this.verErr = '两次输入密码不一致';
      }else{
        this.newErr = '新密码格式错误';
      }
    },
  }
}
</script>

<style scoped lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
* {
  font-family: '\5B8B\4F53'
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
    padding: 7px 27px;
  }
  a {
    text-decoration: none;
  }
  a:nth-child(1) p {
    color: #262626;
    border-bottom: none;
  }
  a:nth-child(2) p {
    color: #3e9bd6;
    border-bottom: 2px solid #3e9bd6;
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

.changePassword {
  // 改密码模块
  li {
    margin: 27px 0 0 30px;
    list-style: none;
    display: flex;
    p {
      width: 135px;
      text-align: left;
    }
    input {
      border: 1px solid #b0b0b0;
      width: 180px;
      height: 24px;
      outline: 0;
    }
    span {
      font-size: 11px;
      margin: 4px 7px;
      color: red;
    }
  }
  .password {
    margin-top: 45px;
    position: relative;
    .eye{
      position: absolute;
      width: 18px;
      height: 10px;
      margin: 6px 0 0 288px;
    }
  }
  .newPw {
    position: relative;
    a {
      position: absolute;
      font-size: 11px;
      text-decoration: none;
      color: #aaa;
      margin: 28px 0 0 135px;
    }
    .eye{
      position: absolute;
      width: 18px;
      height: 10px;
      margin: 6px 0 0 288px;
    }
  }
  .conPw{
     position: relative;
    .eye{
      position: absolute;
      width: 18px;
      height: 10px;
      margin: 6px 0 0 288px;
    }
  }
  .savePw {
    float: left;
    margin: 45px 0 0 165px;
    width: 68px;
    height: 24px;
    color: #2793d4;
    font-weight: bold;
    border: 1px solid #2793d4;
    border-radius: 3px;
    background: #fff;
  }
  .right {
    color: green;
  }
  #success{
    font-weight: bold;
    font-size: 20px;
    color: green;
    margin: 34px 1px -35px -540px;
  }
}

// }
</style>


