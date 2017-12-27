<template>
  <div id="app">
    <div class="memCenBg">
      <div class="memCenDiv">
        <!-- 左侧边栏 -->
        <ul class="memCenLe">
          <p class="homePer">首页/个人主页</p>
          <!-- 个人信息 -->
          <li class="perIma">
            <div class="headPor">
              <img :src="imageUrl" alt="">
            </div>
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
            <!--<router-link to='changePw' replace>账户设置</router-link>-->
          </div>
          <ul class="settings">
            <li class="photo">
              <p>当前头像：</p>
              <el-upload class="avatar-uploader" action="/xinda-api/member/update-info" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>  
              </el-upload>
              <a href="#" class="reminder">上传图片小于2MB</a>
            </li>
            <li class="name">
              <p>姓名：</p>
              <input type="text" v-model="username" v-on:blur="nameBlur" v-on:focus="nameFocus">
              <span>{{NameErr}}</span>
            </li>
            <li class="gender">
              <p>性别：</p>
              <el-radio v-model="radio" label="1" class="male" checked>男</el-radio>
              <el-radio v-model="radio" label="2" class="female">女</el-radio>
            </li>
            <li class="email">
              <p>邮箱：</p>
              <input type="text" placeholder="请输入邮箱" v-model="email" v-on:blur="emailBlur" v-on:focus="emailFocus">
              <span>{{emailErr}}</span>
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
              <span>{{addErr}}</span>
            </li>
            <p v-show="word" id="msg">{{message}}</p>
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
import dist from '../images/districts'
const head =  require('../images/login/head.png');
export default {
  data() {
    return {
      // 头像
      imageUrl: head,
      // 姓名
      username: '',
      NameErr:'\u2736',
      // 性别
      radio: '1',
      // 邮箱验证
      email: '',
      emailErr:'\u2736',
      // 地址
      seleCode: '',
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: '0',
      city: '0',
      Area: '0',
      addErr:'\u2736',
      // 登录状态
      status: '',
      word:false,
      message:'',
    }
  },
  created() {
    // 验证登录信息
    this.ajax.post('/xinda-api/sso/login-info').then(data => {
      // console.log(data.data)
      this.status = data.data.status
    })
    this.ajax.post('/xinda-api/member/update-info').then(data => {
      console.log('修改接口==',data.data)
    })
    
  },
  methods: {
    handleAvatarSuccess(res, file,fileList) {
      this.imageUrl = file.url;
      // this.imageUrl = URL.createObjectURL(file.raw);;
      // console.log("Success" + this.imageUrl,file,res,fileList) 
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

     if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      } 
      return isLt2M;
    },
    // 姓名焦点事件
    nameBlur: function() {
      if (status == 0) {
        this.NameErr = '账号未登录';
      }
      if (this.username == '') {
        this.NameErr = '用户名不能为空';
      } else {
        this.NameErr = '\u2736';
      }
    },
    // 姓名获得焦点事件
    nameFocus: function() {
      this.NameErr = '\u2736';
    },
    // 邮箱失去焦点事件
    emailBlur: function() {
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.email == '') {
        this.emailErr = '邮箱不为空';
      } else
        if (emailReg.test(this.email)) {
         this.emailErr = '\u2736';
        } else {
          this.emailErr = '邮箱格式错误';
        }
    },
    // 邮箱失去焦点事件
    emailFocus: function() {
     this.emailErr = '\u2736';
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
      if(this.seleCode == ''){
        this.addErr = '地址不能为空';
      }else{
        this.addErr = '\u2736';
      }
    },
    // 保存按钮事件
    saveBut: function() {
      var emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      if (this.status == 0) {
       this.NameErr = '账号未登录';
      } else {
        if (this.username == '') {
          this.NameErr = '用户名不能为空';
        } else if (this.email == '') {
          this.emailErr = '邮箱不能为空';
        } else if (this.seleCode == '') {
          // 地址不为空
          this.addErr = '地址不能为空';
        }else if (this.username != '' &&emailReg.test(this.email)&& this.seleCode != '') {
          this.ajax.post('/xinda-api/member/update-info', this.qs.stringify({ headImg: this.imageUrl, name: this.username, gender: this.radio, email: this.email, regionId: this.seleCode })).then(data => {
            console.log(data.data)
            if(data.data.status == -1){
              console.log(this.imageUrl)
              console.log(this.username)
              console.log(this.radio)
              console.log(this.email)
              console.log(this.seleCode)
              this.word = true;
              this.message = '系统开小差了，我们正紧急修复中!';
            }else if(data.data.status == 1){
              this.ajax.post('/xinda-api/member/info').then(data=>{
                // console.log(data.data.data)
              })
              this.word = true;
              this.message = '操作成功';
              // console.log('save this.imageUrl',this.imageUrl);
              localStorage.setItem('headImg',this.imageUrl)
            }else{
              this.word = false;
            }
          })
        }
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
    // background: url(../images/memCen.png) -14px -12px no-repeat;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%
    }
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
    position: relative;
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
      // background: url(../images/login/head.png) no-repeat 2px 0;
    }
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
    .reminder {
      position: absolute;
      font-size: 11px;
      color: #999;
      margin: 100px 0 0 150px;
      text-decoration: none;
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
  #msg{
    font-size: 20px;
    color: red;
    margin: 15px 1px -35px -540px;
    font-weight: bold;
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
    outline: 0;
  }
  .right {
    color: green;
  }
}
</style>


