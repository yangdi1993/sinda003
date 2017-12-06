// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
<<<<<<< HEAD
//<<<<<<< HEAD
import qs from 'qs'
//=======
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//>>>>>>> 806540f1c096256d20d5c0a8a16ca642c8a962be
=======
import store from './store'
import qs from 'qs'
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
>>>>>>> 68d675e397792c12a9d0984594ba163a9db81784

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



