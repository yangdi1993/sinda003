<template>
  <div class="hello">
    服务页面
    <div class="row" v-for="product in products" :key="product">
      {{product.serviceName}}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 生命周期钩子
  created(){
    // console.log('server model is created')
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/business-order/grid').then(function(data){
      console.log(data);
      // this已经不是Vue的实例化对象了
      var rData = data.data.data;
      that.products = rData;
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products:[],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
