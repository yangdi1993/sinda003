<template>
  <div class="hello">
    服务页面
    <div class="row" v-for="product in products" :key="product.id">
      {{product.serviceName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    // console.log('created');
    var that=this
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/grid').then(function(data){
      var rData=data.data.data
      console.log(123,rData);
      that.products=rData;
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products:[]
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
