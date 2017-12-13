<template>
    <div id="moveshoplist">
        <div class="moveshoplist-head">
           <a>默认排序</a><a class="head">销量</a>
        </div>
        <div class="movebox" v-for="store in stores" :key="store.id">
            <span class="logoimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+store.providerImg" alt=""></span>
        </div>
        <router-view/>
    </div>
</template>


<script>
export default {
  created(){
      this.ajax.post("/xinda-api/provider/grid", this.qs.stringify({//数据地址
        start: 0,//数据参数
        limit: 6
      })).then(function(data) {//data=>{}
       
        var box = data.data.data;
         that.stores = box;
        console.log('box',box);
        });
    },
  data(){
    return{
    names:[],
    stores:[],
    }
  },
}
</script>

<style scoped lang="less">
.moveshoplist-head{
    width:360px;
    height: 65px;
    margin-top:40px;
    border:1px solid #2693d4;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    a{
        font-size:28px;
        color:#000;
        width:180px;
        float: left;
        line-height: 65px;
        border-right:1px solid #2693d4;
    }
   .head{
       border:none;
       margin-left: 180px;
       margin-top: -65px;
    }
}
.moveshoplist-head a:hover{
    background-color: #2693d4;
}
.movebox{
    height: 120px;
    width:100%;
    .logoimg{
        width:170px;
        height: 170px;
    }
}
</style>