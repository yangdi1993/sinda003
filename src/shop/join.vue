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
            <img src="../images/shop/jiameng2.jpg" alt=""class="smlpic">
        </div>
        <div class="join-acquisition">
            <div class="join-centwo">YOU WILL RECEIVE</div>
            <div class="acquisition">
                <div class="kuang"></div>
                <h1>你将获得</h1>
            </div>
            <p>www.xinda.com</p>
            <div class="mdpics">
                <div class="img1">
                    <p>精准的线上曝光机会</p>
                </div>
                <div class="img2">
                    <p>万亿市场份额</p>
                </div>
            </div>
            <div class="mdpics1">
                <div class="img1">
                    <p>精准的线上曝光机会</p>
                </div>
                <div class="img2">
                    <p>万亿市场份额</p>
                </div>
            </div>
        </div>
       <div class="join-cenone">
            <b>PROFESSIONAL</b>
            <div class="professional">
                <div class="kuanga"></div>
                <h1>哪些职业可以加盟</h1>
            </div>
            <p>www.xinda.com</p>
            <div class="icons">
                <ul class="icon1" @mouseover="dismsg(0)">
                    <img src="../images/shop/icon1.png" alt="">
                    <li>工商注册<br><p>REGISTERED</p></li>
                </ul>
               <ul class="icon2" @mouseover="dismsg(1)">
                    <img src="../images/shop/icon2.png" alt="">
                    <li>财税服务<br><p>SERVICE</p></li>
                    
                </ul>
                <ul class="icon3" @mouseover="dismsg(2)">
                    <img src="../images/shop/icon3.png" alt="">
                   <li>知识产权<br><p>IN TELLECTUAL PROPERTY</p></li>
                </ul>
                <ul class="icon4" @mouseover="dismsg(3)">
                    <img src="../images/shop/icon4.png" alt="">
                    <li>人力外包<br><p>HR OUTSOURCING</p></li>
                </ul>
            </div>
            <div class="need">
                <h4>我们需要什么样的服务商?</h4>
                <div class="change1"><p>{{msg}}</p></div>
                <div><p>与时俱进视野立足未来，了解创业者的需求，并乐于为创业者服务。</p></div>
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
      msgData: [
          '在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；',
          '在代理记账、审计验资等领域深耕多年，可以提供涉足各个行业优秀的财会人员；',
          '在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；',
          '在人事代理、企业社保、个人社保等领域深耕多年，具有丰富的社保代理经验。 。'
        ],
      msg:''
    }
  },
  methods:{
    dismsg:function(index){
        this.msg = this.msgData[index]; 
        
    }
  }
}
</script>

<style scoped lang="less">
*{margin:0;padding:0;clear:both;}
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
}
.join-centwo {
    color:black;
    font-family: '宋体';
    font-size:16px;
    position: relative;
    padding-top:50px;
    font-weight:bold;
}
.join-acquisition p{
    font-size:11px;
    color:#000;
    margin-top: -11px;
    position: relative;
}
.acquisition h1{
    width:12%;
    font-size: 29px;
    margin-top: -40px;
    margin-left: 80px;
    background-color: #edf1f4;
    position: absolute;
}
.join-cenone p{
    font-size:11px;
    color:#000;
    margin-top: -11px;
}
.acquisition{
    border-bottom: 1px solid #a6a6a6;
    width:308px;
    height: 70px;
    margin:16px auto;
}
.join-acquisition join-centwo{
    margin-top: 50px;
}
.mdpics{
    height: 180px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    .img1{
        width:82px;
        height: 82px;
        background: url(../images/shop/join.png) 100% no-repeat;
        background-position: 0px -87px;
    }
    .img2{
        margin-top: 20px;
        width:82px;
        height: 82px;
        background: url(../images/shop/join.png) 100% no-repeat;
        background-position: 0px 0px;
    }
}
.mdpics1{
    height: 180px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    .img1{
        width:82px;
        height: 82px;
        background: url(../images/shop/join.png) 100% no-repeat;
        background-position: -120px 0px;
    }
    .img2{
        margin-top: 20px;
        width:82px;
        height: 82px;
        background: url(../images/shop/join.png) 100% no-repeat;
        background-position: -109px -103px;
    }
} 
.mdpics p{
    width:165px;
    margin-left: 50px;
    padding: 40px;
    font-size:17px;
    color:#000;
}
.mdpics1 p{
    width:165px;
    margin-left: 50px;
    padding: 40px;
    font-size:17px;
    color:#000;
}
.kuanga{
    border:1px solid #a6a6a6;
    width:323px;
    height: 47px;
    margin:16px auto;
}
.professional{
    border-bottom: 1px solid #a6a6a6;
    width:308px;
    height: 70px;
    margin:16px auto;
}
.professional h1{
    width:250px;
    font-size: 29px;
    margin-top: -40px;
    margin-left: 50px;
    background-color: #ffffff;
    position: absolute;
}
.join-cenone{
    height:700px;
}
.icons{
    height: 300px;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    .img{
        width:135px;
        height: 155px;
    }
    li{
        font-size:17px;
        color:#000;
        list-style: none;
        p{
            color:#7b7b7b;
            font-size:17px;
            margin-top: 5px;
        }
    }
}
.icons ul>li:hover{
    color:blue;
}
.need{
    color:#000;
    line-height:50px;
    height: 225px;
    p{
        font-size:18px;
    }
}


</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

