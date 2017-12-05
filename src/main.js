// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.prototype.ajax=axios
Vue.config.productionTip = false
Vue.config.dectools=false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// console.log('hello world')
// var promise=new Promise(function(resolve,reject){
//   console.log(1);
//   resolve();
//   console.log(2);
// });
// promise.then(function(){
//   console.log(3);
// });
// console.log(4)

// setTimeout(() => {
//   console.log(11)
// }, 100);
// console.log(22)



// import a,{b,c} from './mode.js'
// console.log(a,b,c)
// console.log(...([12,34,56],[123,234]))

