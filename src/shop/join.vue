<template>
  <div class="join">
    <div class="join-head">
        <img src="../images/shop/jiameng.jpg"class="bigpic">
        <div class="join-cenone">
            <b>TO JOIN IN</b>
            <div class="fuwushang">
                <div class="kuang"></div>
                <h1>服务商加盟</h1>
            </div>
            <p>www.xinda.com</p>
            <h4>信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户，为传统优质服务商插上互联网的翅膀，助力企业腾飞。</h4>
            <img src="../images/shop/lv.jpg" alt=""class="smlpic">
        </div>
        <div class="join-acquisition">
            <div class="acquisition">YOU WILL RECEIVE</div>
            <div class="fuwushang">
                <div class="kuang"></div>
                <h1>你将获得</h1>
            </div>
            <p>www.xinda.com</p>
            <div class="mdpics">
                <div class="mdpic1">
                    <span class="img"></span>
                    <p>精准的线上曝光机会</p>
                </div>
                <div></div>

            </div>
        </div>
        <div></div>
    </div>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped lang="less">
.bigpic{
    width:100%;
    height:398px;
}
.join-cenone{
    width: 100%;
    height: 540px;
    margin-top: 40px;
}
.join-cenone b{
    color:black;
    font-family: '宋体';
    font-size:16px;
}
.join-cenone p{
    font-size:11px;
    color:#000;
    margin-top: -11px;
}
.kuang{
    border:1px solid #a6a6a6;
    width:236px;
    height: 47px;
    margin:16px auto;
}
.fuwushang{
    border-bottom: 1px solid #a6a6a6;
    width:308px;
    height: 70px;
    margin:16px auto;
}
.fuwushang h1{
    width:12%;
    font-size: 29px;
    margin-top: -40px;
    margin-left: 80px;
    background-color: #ffffff;
    position: absolute;
}

.join-cenone h4{
    font-size:20px;
    color:#000;
    font-family: '黑体';
    margin-top: 50px;
}
.join-acquisition{
    height: 568px;
    background-color: #edf1f4;
    .acquisition{
        padding-top: 50px;
        color:black;
        font-family: '宋体';
        font-size:16px;
    }
}
.join-acquisition p{
    font-size:11px;
    color:#000;
    margin-top: -11px;
}
.mdpics{
    height: 305px;
    margin-top: 5px;
    margin-left: 480px;
    .img{
        width:82px;
        height: 82px;
        display: block;
        background: url(../images/shop/a.png) 100% no-repeat;
        background-position: 0px -87px;
    }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

