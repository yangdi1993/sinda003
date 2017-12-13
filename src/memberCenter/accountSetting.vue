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
            <a href="#/accountSetting">
              <p>账户设置</p>
            </a>
            <a href="#/changePw">
              <p>修改密码</p>
            </a>
            <!--<router-link to='changePw' replace>账户设置</router-link>-->
          </div>
          <ul class="settings">
            <li class="photo">
              <p>当前头像：</p>
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <span v-show="headLarge">上传图片不能超过2MB</span>
              <span v-show="headType">上传图片只能是JPG格式</span>
              <!--<span v-show="headStar">*</span>-->
            </li>
            <li class="name">
              <p>姓名：</p>
              <input type="text" v-model="name" v-on:blur="nameBlur" v-on:focus="nameFocus">
              <span v-show="nameRight" class="right">✔</span>
              <span v-show="nameNull">姓名不能为空</span>
              <span v-show="nameStar">*</span>
            </li>
            <li class="gender">
              <p>性别：</p>
              <el-radio v-model="radio" label="1" class="male" checked>男</el-radio>
              <el-radio v-model="radio" label="2" class="female">女</el-radio>
              <!--<span v-show="genderRight" class="right hint">✔</span>
                  <span v-show="genderNull" class="hint">性别不能为空</span>
                  <span v-show="genderStar" class="hint">*</span>-->
            </li>
            <li class="email">
              <p>邮箱：</p>
              <input type="text" placeholder="请输入邮箱" v-model="email" v-on:blur="emailBlur" v-on:focus="emailFocus">
              <span v-show="emailRight" class="right">✔</span>
              <span v-show="emailWrong">邮箱格式错误</span>
              <span v-show="emailNull">邮箱不能为空</span>
              <span v-show="emailStar">*</span>
            </li>
            <li class="select">
              <p>所在地区：</p>
              <v-distpicker province='省' city='市' area='区' @selected="onSelected"></v-distpicker>
              <span v-show="addRight" class="right">✔</span>
              <span v-show="addNull">地址不能为空</span>
              <span v-show="addStar">*</span>
            </li>
            <button class="save" @click="saveBut">保存</button>
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
      // 头像
      imageUrl: '',
      headLarge: false,
      headType: false,
      // headStar: true,
      // 姓名
      name: '',
      nameRight: false,
      nameNull: false,
      nameStar: true,
      // 性别
      radio: '1',
      // genderRight: false,
      // genderNull: false,
      // genderStar: true,
      // 邮箱验证
      email: '',
      emailRight: false,
      emailWrong: false,
      emailNull: false,
      emailStar: true,
      // 地址
      code: '',
      addRight: false,
      addNull: false,
      addStar: true,
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log("Success" + this.imageUrl)
      //  http://localhost:8080/317d48bf-edf2-449f-a746-d854b54c9a22
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
        this.headType = true;
        this.headLarge = false;
      } else if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
        this.headLarge = true;
        this.headType = false;
      } else {
        // console.log( this.imageUrl)
        this.headType = false;
        this.headLarge = false;
      }
      return isJPG && isLt2M;
    },
    // 姓名焦点事件
    nameBlur: function() {
      if (this.name == '') {
        // 用户名不能为空
        this.nameNull = true;
        this.nameStar = false;
      } else {
        this.nameRight = true;
        this.nameStar = false;
      }
    },
    // 姓名获得焦点事件
    nameFocus: function() {
      this.nameRight = false;
      this.nameNull = false;
      this.nameStar = true;
    },
    // 邮箱失去焦点事件
    emailBlur: function() {
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.email == '') {
        // 邮箱不为空
        this.emailNull = true;
        this.emailStar = false;
      } else
        if (emailReg.test(this.email)) {
          // 邮箱格式正确
          this.emailRight = true;
          this.emailStar = false;
        } else {
          // 邮箱格式错误
          this.emailStar = false;
          this.emailWrong = true;
        }
    },
    // 邮箱失去焦点事件
    emailFocus: function() {
      this.emailRight = false;
      this.emailWrong = false;
      this.emailNull = false;
      this.emailStar = true;

    },
    // 地址设置
    onSelected: function(data) {
      var address = data.province.value + data.city.value + data.area.value;
      this.code = data.area.code;
      // console.log(this.code)
      // console.log(address)

    },
    // 保存按钮事件
    saveBut: function() {
      this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/member/info', this.qs.stringify({ headImg:this.imageUrl, name: this.name, gender: this.radio, email: this.email, regionId: this.code })).then(data => {
          console.log(data)
          console.log(data.data)
        })
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.name == '') {
        // 用户名不能为空
        this.nameNull = true;
        this.nameStar = false;
      } else if (this.email == '') {
        // 邮箱不为空
        this.emailNull = true;
        this.emailStar = false;
      } else if (this.code == '') {
        // 地址不为空
        this.addNull = true;
        this.addStar = false;
      } else {
        // 地址提示内容初始化
        this.addNull = false;
        this.addStar = false;
        this.addRight = true;
      }
      if (this.name != '' && this.email != '' && this.code != '' && emailReg.test(this.email)) {
        // 判断头像是否更换
        this.imageUrl == ''?'http://localhost:8080/317d48bf-edf2-449f-a746-d854b54c9a22':this.imageUrl;
        this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/member/info', this.qs.stringify({ headImg:this.imageUrl, name: this.name, gender: this.radio, email: this.email, regionId: this.code })).then(data => {
          console.log(data)
          // console.log('this.imageUrl' + this.imageUrl)
          // console.log('this.name' + this.name)
          // console.log('this.radio' + this.radio)
          // console.log('this.email' + this.email)
          // console.log('this.code' + this.code)
        })

      }
    }
  }

}
</script>

<style lang="less">
// 固定最小宽度
// @media all and (min-width:1200px){
  *{font-family: '\5B8B\4F53'}
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
    padding: 7px 27px;
  }
  a {
    text-decoration: none;
  }
  a:nth-child(1) p {
    color: #3e9bd6;
    border-bottom: 2px solid #3e9bd6;
  }
  a:nth-child(2) p {
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
    span {
      color: red;
      font-size: 11px;
      margin-left: 5px;
    }
  }
  .photo {
    p {
      height: 100px;
      line-height: 100px;
    }
    span {
      margin: 30px 98px;
    }
    div {
      width: 100px;
      height: 100px;
    }
    .avatar-uploader .el-upload {
      // border: 1px dashed #d9d9d9;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      outline: 0;
      background: url(../images/login/head.png) no-repeat;
    } // .avatar-uploader .el-upload:hover {
    //   // border-color: #409EFF;
    // }
    .avatar-uploader-icon {
      font-size: 28px; // color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
  .name {
    input {
      width: 180px;
      height: 23px;
    }
    span {
      margin-top: 5px;
    }
  }
  .email {
    span {
      font-size: 11px;
      margin: 5px;
    }
    input {
      width: 180px;
      height: 23px;
    }
  }
  .gender {
    input {
      margin: 5px 8px 0 0;
    }
    .male {
      margin-right: 30px;
      span {
        color: #000;
      }
    }
    .female span {
      color: #000;
    }
    .hint {
      margin: 5px 0 0 72px;
    }
  }
  .select {
    select {
      margin-right: 0px;
      width: 61px;
      height: 23px;
      border: 1px solid #b0b0b0;
      border-radius: 0;
      font-size: 12px;
      padding: 0;
    }
    span {
      margin: 5px 0 0 5px;
    }
  }
  .save {
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
  .right {
    color: green;
  }
}
</style>


