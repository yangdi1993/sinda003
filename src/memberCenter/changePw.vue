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
            <a href="#/accountSetting">
              <p>账户设置</p>
            </a>
            <a href="#/changePw">
              <p>修改密码</p>
            </a>
          </div>
          <ul class="changePassword">
            <li class="password">
              <p>旧密码：</p>
              <input type="password" v-model="password" v-on:blur="pwBlur" v-on:focus="pwFocus">
              <span v-show="oldNull">旧密码不能为空</span>
              <span v-show="oldWrong">旧密码错误</span>
              <span v-show="notLogin">请先登录</span>
              <span v-show="oldRight" class="right">✔</span>
              <span v-show="oldStar">*</span>
            </li>
            <li class="newPw">
              <p>新密码：</p>
              <input type="password" v-model="newPw" v-on:blur="newPwBlur" v-on:focus="newPwFocus">
              <a href="#">密码由6-16位数字和字母组成</a>
              <span v-show="newNull">新密码不能为空</span>
              <span v-show="newWrong">新密码格式错误</span>
              <span v-show="newRight" class="right">✔</span>
              <span v-show="newStar">*</span>
            </li>
            <li class="conPw">
              <p>再次输入新密码：</p>
              <input type="password" v-model="conPw" v-on:blur="conPwBlur" v-on:focus="conPwFocus">
              <span v-show="verNull">确认密码不能为空</span>
              <span v-show="verWrong">两次输入密码不一致</span>
              <span v-show="verRight" class="right">✔</span>
              <span v-show="verStar">*</span>
            </li>
            <button class="savePw" @click='savePwBut'>保存</button>
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
  data() {
    return {
      //  旧密码
      password: '',
      oldNull: false,
      oldWrong: false,
      oldRight: false,
      oldStar: true,
      notLogin: false,
      //  新密码
      newPw: '',
      newNull: false,
      newWrong: false,
      newRight: false,
      newStar: true,
      //  确认密码
      conPw: '',
      verNull: false,
      verWrong: false,
      verRight: false,
      verStar: true,
    }
  },
  methods: {
    // 旧密码失去焦点事件
    pwBlur: function() {
      if (this.password == '') {
        //旧密码不能为空
        this.oldNull = true;
        this.oldStar = false;
      }
    },
    // 旧密码获得焦点事件
    pwFocus: function() {
      this.oldNull = false;
      this.oldWrong = false;
      this.oldRight = false;
      this.notLogin = false;
      this.oldStar = true;
    },

    // 新密码失去焦点事件
    newPwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.newPw == '') {
        // 新密码不能为空
        this.newNull = true;
        this.newStar = false;
      } else if (newPwReg.test(this.newPw)) {
        // 验证通过
        this.newRight = true;
        this.newStar = false;
      } else {
        // 验证码格式错
        this.newWrong = true;
        this.newStar = false;
      }
    },
    // 新密码获得焦点事件
    newPwFocus: function() {
      this.newNull = false;
      this.newWrong = false;
      this.newRight = false;
      this.newStar = true;
    },

    // 确认密码焦点事件
    conPwBlur: function() {
      if (this.conPw == '') {
        //确认密码不能为空
        this.verNull = true;
        this.verStar = false;
      } else if (this.newPw == this.conPw) {
        // 验证通过
        this.verRight = true;
        this.verStar = false;
      } else {
        //两次输入密码不一致
        this.verWrong = true;
        this.verStar = false;
      }
    },
    conPwFocus: function() {
      this.verNull = false;
      this.verWrong = false;
      this.verRight = false;
      this.verStar = true;
    },
    savePwBut: function() {
      // this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/sso/change-pwd',this.qs.stringify({oldPwd:this.password,newPwd:this.newPw})).then(data=>{
      //    console.log(data.data)
      //  })
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      // console.log(user)
      if (this.password == '') {
        // 旧密码不能为空
        this.oldNull = true;
        this.oldStar = false;
      } else if (this.newPw == '') {
        // 新密码不能为空
        this.newNull = true;
        this.newStar = false;
      } else if (this.conPw == '') {
        // 确认密码不能为空
        this.verNull = true;
        this.verStar = false;
      } else if (newPwReg.test(this.newPw) && this.newPw == this.conPw) {
        this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/sso/change-pwd', this.qs.stringify({ oldPwd: this.password, newPwd: this.newPw })).then(data => {
          console.log(data.data)
          if (data.data.status == -999) {
            this.password == '';
            this.newPw == '';
            this.conPw == '';
            this.notLogin = true;
            this.oldStar = false;
          }
        })
        // 旧密码重置错误提示信息
        this.oldNull = false;
        this.oldWrong = false;
        this.oldRight = false;
        this.notLogin = false;
        this.oldStar = true;
        // 新密码重置错误提示信息
        this.newNull = false;
        this.newWrong = false;
        this.newRight = false;
        this.newStar = true;
        // 确认密码重置错误提示信息
        this.verNull = false;
        this.verWrong = false;
        this.verRight = false;
        this.verStar = true;
      }
    },
  }
}
</script>

<style scoped lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
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
}

// }
</style>


