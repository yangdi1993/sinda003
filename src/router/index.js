import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '@/components/server'
import outter from '@/components/outter'
import inner from '@/components/inner'
import login from '@/views/login'
import register from '@/views/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inner',
      name: 'inner',
      component: inner
    },
    {
      path:'/outter',
      name:'outter',
      component:outter,
      children:[
        {
          path:'login',
          name:'login',
          component:login,
        },
        {
          path:'register',
          name:'register',
          component:register,
        }
      ]
    },
    {
      path:'/server',
      name:'server',
      component:server,
    }
  ]
})
