// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
import qs from 'qs'
=======
<<<<<<< HEAD
import qs from 'qs'
=======
>>>>>>> eae1b3c9231c7d3f6cf88637cc53ef87ca6dd034
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
>>>>>>> 806540f1c096256d20d5c0a8a16ca642c8a962be

Vue.prototype.ajax=axios
Vue.prototype.qs=qs
Vue.config.productionTip = false
Vue.config.dectools=false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
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

