// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
<<<<<<< HEAD
import store from './store'
import qs from 'qs'
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
=======
import qs from 'qs'
//=======
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import store from './store'
>>>>>>> aa450e6d16421de0ea50db5655ea3074e4d3390b

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



