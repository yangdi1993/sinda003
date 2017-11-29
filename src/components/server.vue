<template>
  <div class="hello">
    服务页面
<<<<<<< HEAD
    <div class="row" v-for="product in products" :key="product">
      {{product.serviceName}}
    </div>
    
=======
    <div class="row" v-for="product in products" :key="product.id">
      {{product.serviceName}}
    </div>
>>>>>>> 1826065df51019a2dcf5480c50231fb9f3a8fe5d
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
<<<<<<< HEAD
  // 生命周期钩子
  created(){
    // console.log('server model is created')
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/business-order/grid').then(function(data){
      console.log(data);
      // this已经不是Vue的实例化对象了
      var rData = data.data.data;
      that.products = rData;
=======
  created(){
    // console.log('created');
    var that=this
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/grid').then(function(data){

      var rData=data.data.data
      console.log(rData);
      that.products=rData;
>>>>>>> 1826065df51019a2dcf5480c50231fb9f3a8fe5d
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
<<<<<<< HEAD
      products:[],
=======
      products:[]
>>>>>>> 1826065df51019a2dcf5480c50231fb9f3a8fe5d
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
