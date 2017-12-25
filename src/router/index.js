import Vue from 'vue'
//路由
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '@/components/server'
//未登录时界面
import outter from '@/components/outter'
//登录后
import inner from '@/components/inner'
//views 登录、注册、修改密码
import login from '@/views/login'
import register from '@/views/register'
import forget from '@/views/forget'
//主页
import homepage from '@/homepage/homepage'
//列表页,由全部产品 跳转
// import list from '@/homepage/list'
//列表页,由财税服务 跳转
import list1 from '@/homepage/list'
//列表页,由公司工商跳转 跳转
import list2 from '@/homepage/list'
//列表页,由全部产品知识产权 跳转
import list3 from '@/homepage/list'
//列表页,由全部产品社保代理 跳转
import list4 from '@/homepage/list'

//支付页面
import paypage from '@/paypage/paypage'
//支付跳转页面
import orderData from '@/paypage/orderData'
//支付失败
import payFalse from '@/paypage/payFalse'
//支付成功
import payTrue from '@/paypage/payTrue'
//支付宝支付页面
import Alipay from '@/paypage/Alipay'
//购物车页面
import cart from '@/paypage/cart'
//商品详情页面
import Detail from '@/paypage/Detail'
// 会员中心-我的订单
import myOrder from '@/memberCenter/myOrder'
// 会员中心-用户评价-未评价
import userUnEvalu from '@/memberCenter/userUnEvalu'
// 会员中心-用户评价-已评价
import userHavaEvalu from '@/memberCenter/userHavaEvalu'
//会员中心-账户设置
import accountSetting from '@/memberCenter/accountSetting'
//会员中心-修改密码
import changePw from '@/memberCenter/changePw'
//店铺列表
import shoplist from '@/shop/shoplist'
//店铺首页
import shophome from '@/shop/shophome'
//加盟我们
import join from '@/shop/join'
// 会员中心-用户评价-去评价
import goEvalu from '@/memberCenter/goEvalu'



//手机端
import weChat from  '@/weChat/components/weChat'
import weChatdog from  '@/weChat/components/weChatdog'
//首页
import index from '@/weChat/index/index'
//列表页
import Wlist from '@/weChat/index/list'
//移动端店铺列表
import storelist from  '@/weChat/store/storelist'
//移动端店铺首页
import storehome from '@/weChat/store/storehome'
//移动端商品详情
import wDetail from '@/weChat/paypage/wDetail'
//我的订单
import myorder from '@/weChat/paypage/myorder'

import shopTro from '@/weChat/shopTro/shopTro'

//登录页面
import wlogin from '@/weChat/mine/wlogin'
//注册页面
import wRegister from '@/weChat/mine/wRegister'
//忘记密码页面
import wForget from '@/weChat/mine/wForget'
//未注册页面
import wNotReg from '@/weChat/mine/wNotReg'
//账户设置页面
import wSet from '@/weChat/mine/wSet'
//已登录页面
import wYetLogin from '@/weChat/mine/wYetLogin'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'inner/homepage',
    },
    {
      path: '/inner',
      name: 'inner',
      component: inner,
      children:[
        //主页
        {
          path: 'homepage',
          name: 'homepage',
          component: homepage
        },
        //列表页,由全部产品 跳转
        // {
        //   path: 'list',
        //   name: 'list',
        //   component: list
        // },
        //列表页,由财税服务 跳转
        {
          path: 'list1',
          name: 'list1',
          component: list1
        },
        //列表页,由公司工商 跳转
        {
          path: 'list2',
          name: 'list2',
          component: list2
        },
        //列表页,由全部产品知识产权 跳转
        {
          path: 'list3',
          name: 'list3',
          component: list3
        },
        //列表页,由全部产品社保代理 跳转
        {
          path: 'list4',
          name: 'list4',
          component: list4
        },
        // 会员中心-我的订单
        {
          path:'myOrder',
          name:'myOrder',
          component:myOrder,
        },
        // 会员中心-用户评价-未评价
        {
          path:'userUnEvalu',
          name:'userUnEvalu',
          component:userUnEvalu,
        },
        // 会员中心-用户评价-已评价
        {
          path:'userHavaEvalu',
          name:'userHavaEvalu',
          component:userHavaEvalu,
        },
        // 用户设置
        {
          path:'accountSetting',
          name:'accountSetting',
          component:accountSetting,
        },
        // 修改密码
        {
          path:'changePw',
          name:'changePw',
          component:changePw,
        },
        //店铺列表
        {
          path: 'shoplist',
          name: 'shoplist',
          component: shoplist
        },
        //店铺首页
        {
          path: 'shophome',
          name: 'shophome',
          component: shophome
        },

        //加盟我们
        {
          path: 'join',
          name: 'join',
          component: join
        },
  
        // 会员中心-用户评价-去评价
        {
          path:'goEvalu',
          name:'goEvalu',
          component:goEvalu,
        },
        //支付页面
        {
          path:'paypage',
          name:'paypage',
          component:paypage
        },
        //支付跳转页面
        {
          path:'orderData',
          name:'orderData',
          component:orderData
        },
        //支付错误页面
        {
          path:'payFalse',
          name:'payFalse',
          component:payFalse
        },
        //支付成功页面
        {
          path:'payTrue',
          name:'payTrue',
          component:payTrue
        },
        //支付宝支付页面
        {
          path:'Alipay',
          name:'Alipay',
          component:Alipay
        },
        //购物车
        {
          path:'cart',
          name:'cart',
          component:cart
        },
        //商品详情
        {
          path:'Detail',
          name:'Detail',
          component:Detail
        },
      ]
    },
    {//登录、注册、修改密码
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
        },
        {
          path:'forget',
          name:'forget',
          component:forget,
        }
      ]
    },
    {
      path:'/server',
      name:'server',
      component:server,
    },



    // 移动端路由
    {//有公共组件（头尾）
      path:'/weChat',
      name:'weChat',
      component:weChat,
      children:[
        //首页
        {
          path: 'index',
          name: 'index',
          component: index
        },
<<<<<<< HEAD

        //店铺列表

=======
        //店铺列表
<<<<<<< HEAD
=======
        {
          path: 'storelist',
          name: 'storelist',
          component: storelist
        },
        //店铺列表
>>>>>>> a05a9a6c1ff9cee5fcfb5469ee03d0fd08d3ef6e
>>>>>>> 67b3e750e762e6692abd2e8843b1352852606e16
        {
          path: 'Wlist',
          name: 'Wlist',
          component: Wlist
        },
        //店铺首页
        {
          path: 'storehome',
          name: 'storehome',
          component: storehome
        },
        // 购物车页面
        {
          path: 'shopTro',
          name: 'shopTro',
          component: shopTro
        }
      ]
    },
    {//无公共组件
      path:'/weChatdog',
      name:'weChatdog',
      component:weChatdog,
      children:[
        //登录页面
        {
          path: 'wlogin',
          name: 'wlogin',
          component: wlogin
        },
        //注册页面
        {
          path: 'wRegister',
          name: 'wRegister',
          component: wRegister
        },
        //忘记密码页面
        {
          path: 'wForget',
          name: 'wForget',
          component: wForget
        },
        //未注册页面
        {
          path: 'wNotReg',
          name: 'wNotReg',
          component: wNotReg
        },
        //账户设置页面
        {
          path: 'wSet',
          name: 'wSet',
          component: wSet
        },
        //已登录页面
        {
          path: 'wYetLogin',
          name: 'wYetLogin',
          component: wYetLogin
        },
        //商品详情
        {
          path: 'wDetail',
          name: 'wDetail',
          component: wDetail
        },
        //我的订单
        {
          path: 'myorder',
          name: 'myorder',
          component: myorder
        }
      ]
    },
  ]
})

