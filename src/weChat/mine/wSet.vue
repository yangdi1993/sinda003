<template>
  <div class="set">
    <!-- 账户设置 -->
      <div class="sub">
        <span class="msg" >{{msgSet}}</span>
        <p @click="setBut">账户设置</p>
        <div></div>
      </div>
    <ul class="settings" v-show="setShow">
      <li class="photo">
        <p>当前头像：</p>
        <el-upload class="avatar-uploader" action="/xinda-api/member/update-info" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>  
        </el-upload>
        <a href="#" class="reminder">上传图片小于2MB</a>
      </li>
      <li class="name">
        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>
        <input type="text" v-model="username" v-on:blur="nameBlur" v-on:focus="nameFocus">
      </li>
      <li class="gender">
        <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</p>
        <el-radio v-model="radio" label="1" checked id="male">男</el-radio>
        <el-radio v-model="radio" label="2" id="female">女</el-radio>
      </li>
      <li class="email">
        <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</p>
        <input type="text" placeholder="请输入邮箱" v-model="email" v-on:blur="emailBlur" v-on:focus="emailFocus">
      </li>
      <li class="select">
        <p>所在地区：</p>
        <div class="adress">
          <select @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
          </select>
          <select @change="cityChange" v-model="city">
            <option value="0">市</option>
            <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
          </select>
          <select @change="areaChange" v-model="Area">
            <option value="0">区</option>
            <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
          </select>
        </div>
      </li>
      <!-- <p v-show="word" id="msg">{{message}}</p> -->
      <li>
      <button class="save" @click="saveBut">保存</button>

      </li>
    </ul>
    <!-- 修改密码 -->
       <div class="sub">
       <span class="msg" >{{msgPw}}</span>
        <p @click="pwBut">修改密码</p>
        <div></div>
       </div>
     <ul class="changePw"  v-show="pwShow">
        <li class="password">
          <p>旧密码：</p>
          <input :type="oldPwTppe" v-model="password" v-on:blur="pwBlur" v-on:focus="pwFocus">
            <img :src="oldUrl" alt="" class="eye" @click="changeOP">
        </li>
        <li class="newPw">
          <p>新密码：</p>
          <input :type="newPwTppe" v-model="newPw" v-on:blur="newPwBlur" v-on:focus="newPwFocus">
          <img :src="newUrl" alt="" class="eye" @click="changeNP">
          <!-- <a href="#">密码由6-16位数字和字母组成</a> -->
        </li>
        <li class="conPw">
          <p>再次输入新密码：</p>
          <input :type="verPwTppe" v-model="conPw" v-on:blur="conPwBlur" v-on:focus="conPwFocus">
          <img :src="verUrl" alt="" class="eye" @click="changeVP">
        </li>
        <!-- <p v-show="success" id="success">密码修改成功</p> -->
        <li>
           <button class="savePw" @click='savePwBut'>保存</button>
        </li>
      </ul>
  </div>
    <!-- <router-view/> -->
</template>

<script>
// import ihead from '../components/ihead'
import dist from "../../images/districts";
var md5 = require("md5");
const head = require("../images/login/head3.png");
const eye = [
  require("../images/login/invisible.png"),
  require("../images/login/visible.png")
];
export default {
  data() {
    return {
      msgSet:'',
      msgPw:'',
      // 头像
      imageUrl: head,
      // 姓名
      username: "",
      // 性别
      radio: "1",
      // 邮箱验证
      email: "",
      // 地址
      seleCode: "",
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: "0",
      city: "0",
      Area: "0",
      // 登录状态
      status: "",
      word: false,
      message: "",
      setShow: false,
      pwShow: false,

      //  旧密码
      password: "", //密码
      oldPwTppe: "password", //密码显示类型
      oldUrl: eye[0],//明码
      //  新密码
      newPw: "",
      newPwTppe: "password",
      newUrl: eye[0],
      //  确认密码
      conPw: "",
      verPwTppe: "password",
      verUrl: eye[0],
      loginId: "", //登录id
      success: false //修改成功提示
    };
  },
  created() {
    this.setTitle('账户设置')
    // 验证登录信息
    this.ajax.post("/xinda-api/sso/login-info").then(data => {
      // console.log(data.data)
      this.status = data.data.status;
      // console.log('status==',this.status);
    });
  },
  methods: {
    ...mapActions(['setTitle']),
    setBut:function(){
      this.setShow = !this.setShow;
    },
    pwBut:function(){
 this.pwShow = !this.pwShow;
    },
    handleAvatarSuccess(res, file, fileList) {
      this.imageUrl = file.url;
      // console.log("Success" + this.imageUrl,file,res,fileList)
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // 姓名焦点事件
    nameBlur: function() {
      if (status == 0) {
        this.msgSet = '账号未登录';
      }
      if (this.username == "") {
        this.msgSet = '用户名不能为空';
      } else {
        this.msgSet = '';
      }
    },
    // 姓名获得焦点事件
    nameFocus: function() {
      this.msgSet = '';
    },
    // 邮箱失去焦点事件
    emailBlur: function() {
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.email == "") {
        this.msgSet = '邮箱不为空';
      } else if (emailReg.test(this.email)) {
         this.msgSet = '';
      } else {
        this.msgSet = '邮箱格式错误';
      }
    },
    // 邮箱失去焦点事件
    emailFocus: function() {
       this.msgSet = '';
    },
    //地址验证
    proChange() {
      //  省
      this.citys = dist[this.province];
    },
    cityChange() {
      // 市
      this.areas = dist[this.city];
    },
    // 区
    areaChange() {
      this.seleCode = this.Area;
      if (this.seleCode == "") {
        this.msgSet = '地址不能为空';
      } else {
        this.msgSet = '';
      }
    },
    // 保存按钮事件
    saveBut: function() {
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.status == 0) {
         this.msgSet = '账号未登录';
      } else {
        if (this.username == "") {
          this.msgSet = '用户名不能为空';
        } else if (this.email == "") {
          this.msgSet = '邮箱不能为空';
        } else if (this.seleCode == "") {
          // 地址不为空
          this.msgSet = '地址不能为空';
        } else if (
          this.username != "" &&
          emailReg.test(this.email) &&
          this.seleCode != ""
        ) {
          this.ajax
            .post(
              "/xinda-api/member/update-info",
              this.qs.stringify({
                headImg: this.imageUrl,
                name: this.username,
                gender: this.radio,
                email: this.email,
                regionId: this.seleCode
              })
            )
            .then(data => {
              // console.log(data.data)
              if (data.data.status == -1) {
                this.word = true;
                this.message = "系统开小差了，我们正紧急修复中!";
              } else if (data.data.status == 1) {
                this.ajax.post("/xinda-api/member/info").then(data => {
                  // console.log(data.data.data)
                });
                this.word = true;
                this.msgSet = "操作成功";
                console.log("save this.imageUrl", this.imageUrl);
                localStorage.setItem("headImg", this.imageUrl);
              } else {
                this.word = false;
              }
            });
        }
      }
    },
    // 旧密码失去焦点事件
    pwBlur: function() {
      if (this.password == "") {
        this.msgPw = "旧密码不能为空";
      }
    },
    // 旧密码获得焦点事件
    pwFocus: function() {
      this.msgPw = "";
    },

    // 新密码失去焦点事件
    newPwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.newPw == "") {
        this.msgPw = "新密码不能为空";
      } else if (newPwReg.test(this.newPw)) {
        // 验证通过
        this.msgPw = "";
      } else {
          this.msgPw = "新密码格式错误";
      }
    },
    // 新密码获得焦点事件
    newPwFocus: function() {
      this.msgPw = "";
    },

    // 确认密码焦点事件
    conPwBlur: function() {
      if (this.conPw == "") {
        this.msgPw = "确认密码不能为空";
      } else if (this.newPw == this.conPw) {
        // 验证通过
        this.verErr = "\u2736";
      } else {
        this.msgPw = "两次输入密码不一致";
      }
    },
    conPwFocus: function() {
      this.msgPw = "";
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
      if (this.password == "") {
        this.msgPw = '旧密码不能为空';
      } else if (this.newPw == "") {
        this.msgPw = '新密码不能为空';
      } else if (this.conPw == "") {
        this.msgPw = '确认密码不能为空';
      } else if (newPwReg.test(this.newPw) && this.newPw == this.conPw) {
        this.ajax
          .post(
            "/xinda-api/sso/change-pwd",
            this.qs.stringify({
              oldPwd: md5(this.password),
              newPwd: md5(this.newPw)
            })
          )
          .then(data => {
            // console.log(data.data)
            if (data.data.status == -999) {
              this.password = "";
              this.newPw = "";
              this.conPw = "";
              this.msgPw = '未登录账号';
            } else if (data.data.status == -1) {
              this.msgPw = '旧密码错误';
            } else if (data.data.status == 1) {
              this.msgPw = '修改成功';
              this.success = true;
              this.password = "";
              this.newPw = "";
              this.conPw = "";
            }
          });
        // 重置错误提示信息
        this.msgPw = '';
      } else if (this.newPw != this.conPw) {
        this.msgPw = '两次输入密码不一致';
      } else {
        this.msgPw = '新密码格式错误';
      }
    }
  }
};
</script>

<style scoped lang="less">
.set {
    margin-top: 2rem;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  width: 7.5rem;
  height: 13.34rem;
    .msg {
      float: right;
    margin: 0.25rem 3rem 0 0;
    font-size: 0.28rem;
    color: #ff0000;
  }
  .sub {
    // overflow: hidden;
    width: 7.5rem;
    height: 0.8rem;
    border-bottom: 0.02rem solid #2693d4;
    p {
      padding: 0.4rem 0 0.1rem 0.28rem;
      font-size: 0.28rem;
      line-height: 0.28rem;
      color: #000;
      text-align: left;
    }
    div{
      margin: 0rem 0 0 0.78rem ;
      width: 0.03rem;
      height: 0.03rem;
      background: #2693d4;
      transform:rotate(45deg);
    }
  }
  .settings {
    // display: none;
    // margin-top: -0.02rem;
    overflow: hidden;
    z-index: 1;
    background: #fff;
    width: 7.5rem;
    height: 5.64rem;
    border-bottom: 0.06rem solid #dfdfdf;
    li {
      margin: 0.18rem 0 0.15rem 0.28rem;
      display: flex;
      width: 7rem;
      height: 0.43rem;
      a {
        font-size: 0.12rem;
        color: #999;
      }
      p {
        text-align: left;
        width: 2rem;
        font-size: 0.28rem;
      }
      input {
        padding-left: 0.18rem;
        width: 3.27rem;
        height: 0.43rem;
        border: 1px solid #b0b0b0;
        outline: 0;
        font-size: 0.28rem;
      }
    }
    .photo {
      margin-bottom: 0.15rem;
      height: 0.96rem;
      div {
        overflow: hidden;
        width: 0.96rem;
        height: 0.96rem;
        border-radius: 50%;
      }
      p {
        line-height: 0.96rem;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      input {
        margin-top: 0.02rem;
      }
    }
    .gender {
      #male{
        margin-right: 0.5rem;
        font-size: 0.28rem;
      }
      #female{
        font-size: 0.28rem;
      }

    }
    .email {
      input::-webkit-input-placeholder {
        font-size: 0.2rem;
      }
    }
    .select{
      select{
        margin-right: 0.2rem;
        float: left;
        width: 1.02rem;
        height: 0.43rem;
        font-size: 0.2rem;
        color: #333;
        border: 1px solid #b0b0b0;
        background: #fff;
      }
    }
    .save{
      margin: 0.15rem 0 0.28rem 2rem;
      width: 1.29rem;
      height: 0.48rem;
      border: 1px solid #2693d4;
      color: #2693d4;
      background: #fff;
      outline: 0;
      font-size: 0.28rem;
    }
  }
  .changePw{
    // display: none;
    width: 7.5rem;
    height: 5.44rem;
    border-bottom: 0.06rem solid #dfdfdf;
    li {
      margin: 0.18rem 0 0.15rem 0.28rem;
      position: relative;
      display: flex;
      width: 7rem;
      height: 0.43rem;
      a {
        position: absolute;
        font-size: 0.12rem;
        color: #999;
      }
      p {
        text-align: left;
        width: 2.5rem;
        font-size: 0.28rem;
      }
      input {
        padding-left: 0.18rem;
        width: 3.27rem;
        height: 0.43rem;
        border: 1px solid #b0b0b0;
        outline: 0;
        font-size: 0.28rem;
      }
    }
    .password,.newPw,.conPw{
      position: relative;
    }
    .password img,.newPw img,.conPw img{
      position: absolute;
      margin: 0.1rem 0 0 5.2rem;
      width: 0.4rem;
      height: 0.2rem;
    }
    .savePw{
      margin: 0.15rem 0 0.28rem 2.5rem;
      width: 1.29rem;
      height: 0.48rem;
      border: 1px solid #2693d4;
      color: #2693d4;
      background: #fff;
      outline: 0;
      font-size: 0.28rem;
    }
  }
}
</style>


