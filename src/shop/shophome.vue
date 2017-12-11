<template>
  <div class="shophome">
    <div class="shophome-head">
        <img src="../images/shop/logo.gif" alt="">
       <div class="zi"><h1>信达北京服务中心</h1>
            <p>服务地址：北京市-朝阳区</p>
        </div> 
    </div>
    <div class="shophome-left">
        <h3>公司介绍</h3>
        <p>为给客户提供更加标准化的体验，信达北京服务中心采用自营模式，打造一站式企业服务平台，帮助企业快速解决发展遇到的问题，提供工商注册，财税服务，知识产权，人事外包，证件办理等全方位企业解决方案，为你的企业发展保驾护航。</p>
    </div>
    <div class="shophome-left2">
        <div class="imgs">
            <div class="im1"><p>平台担保</p></div>
            <div class="im2"><p>优质服务</p></div>
        </div>
        <div class="imgs1">
            <div class="im3"><p>过程监督</p></div>
            <div class="im4"><p>增值服务</p></div>
        </div>
    </div>
    <div class="shophome-right">
        <div class="shophome-right1">
            <p @click="servicePro">服务产品</p>
            <p @click="tencent">客服</p>
            <p @click="zizhi">资质证书</p>
        </div>
        <div class="shophome-right2">
            <div class="rights" v-show="servicePro1">
                <div class="right">
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                    <div class="box">
                        <p>商标快速注册通道（5个小时...</p>
                        <img src="../images/shop/chang.gif" alt=""><br>
                        <a href="">工作日内5个小时提交申报，次日拿到</a><br>
                        <a href="">销量</a><br>
                        <h1>￥ 1400.00</h1><br>
                        <a href=""class="line-through">原价：￥2000.00</a>
                        <div class="on"></div>
                        <span>查看详情>>></span>
                    </div>
                </div>
            </div>
            <div class="qq" v-show="tencent1">
                <b>工作时间：周一到周五</b><br>
                <strong>QQ咨询:</strong><br>
                <img src="../images/shop/qq.png" alt="">
            </div>
            <div class="zizhi" v-show="zizhi1">
                <img src="../images/shop/4652.png" alt="">
            </div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      servicePro1:true,
      tencent1:false,
      zizhi1:false,
    }
  },
  methods:{
      servicePro:function(){
          this.servicePro1=true;
          this.tencent1=false;
          this.zizhi1=false;
          console.log(123)
      },
      tencent:function(){
          this.servicePro1=false;
          this.tencent1=true;
          this.zizhi1=false;
      },
      zizhi:function(){
          this.servicePro1=false;
          this.tencent1=false;
          this.zizhi1=true;
      }
  }
}
</script>

<style scoped lang="less">
.shophome-head{
    width:1200px;
    height: 180px;
    border:1px solid #e9e9e9;
    margin-left: 100px;
    margin-top: 8px;
    img{
        text-align: left;
        margin-top: 40px;
        margin-left: -1000px;
    }
    .zi{
        color:#000;
        text-align: left;
        margin-top: -70px;
        margin-left: 200px;
        p{
            margin-top: 20px;
        }
    }
}
.shophome-left{
    width:300px;
    height: 330px;
    border:1px solid #e9e9e9;
    margin-left: 100px;
    margin-top: 25px;
    h3{
        color:#000;
        text-align: left;
        margin-top: 10px;
        margin-left: 10px;
    }
    p{
        color: #000;
        font-size: 14px;
        line-height: 25px;
        text-indent: 2em;
        text-align: left;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
}
.shophome-left2{
    width:300px;
    height: 250px;
    border:1px solid #e9e9e9;
    margin-left: 100px;
    border-top:hidden;
}
.imgs{
    color:#000;
    font-size:14px;
    clear: both;
    display: flex;
    justify-content: space-around;
    .im1{
        width:57px;
        height:55px;
        margin-top: 20px;
        background: url(../images/shop/home.gif) 100% no-repeat;
        background-position: 0px 0px;
    }
    .im2{
        width:57px;
        height:55px;
        margin-top: 20px;
        background: url(../images/shop/home.gif) 100% no-repeat;
        background-position: 0px -65px;
    }
  

    p{
        margin-top: 70px;
        width:60px ;

    }
}
.imgs1{
    color:#000;
    font-size:14px;
    clear: both;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    .im3{
        width:57px;
        height:56px;
        margin-top: 20px;
        background: url(../images/shop/home.gif) 100% no-repeat;
        background-position: 0px -135px;
    }
    .im4{
        width:57px;
        height:56px;
        margin-top: 20px;
        background: url(../images/shop/home.gif) 100% no-repeat;
        background-position: 0px -200px;
    }
    p{
        margin-top: 70px;
        width:60px ;

    }
}
.shophome-right{
    width:880px;
    height: 580px;
    border:1px solid #e9e9e9;
    margin-left:430px;
    margin-top: -580px;
    .shophome-right1{
        width:880px;
        height: 40px;
        border-bottom: 1px solid #e9e9e9;
        p{
            font-size:14px;
            float: left;
            width:112px;
            color:#000;
            line-height: 40px;
            position: relative;
            display: inline;
            margin-left: 15px;
        }

    }
}
.shophome-right1 p:hover{
    border-bottom: 1px solid #2693d4;
}
.right{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    .box{
        width:265px;
        height:190px;
        margin-top: 20px;
        border:1px solid #e9e9e9;
        p{
            color: #000;
            font-size:17px;
            margin-top: 20px;
            margin-left:10px;
        }
        img{
            margin-left:-60px;
        }
        a{
            font-size:14px;
            color:#000;
            text-decoration: none;
            float: left;
            margin-left:17px;
            line-height: 30px;
        }
        h1{
            color:#2794d5;
            margin-top: 20px;
            float: left;
            font-size:32px;
        }
        .line-through{
            text-decoration: line-through;
        }
        span{
            color:#2794d5;
            font-size:14px;
            margin-top: 5px;
            display: inline-block;
        }
    }
    
}
.qq{
    margin-left: 20px;
    margin-top: 20px;
    color:#000;
    float: left;
    b{
        margin-left: 20px;
    }
    strong{
        margin-left: -70px;
        padding-top: 30px;
        position: absolute;
    }
    img{
        position: absolute; 
    }
}
.zizhi img{
    margin-top:10px;
    margin-left:-250px;
    width: 300px;
    height: 400px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

