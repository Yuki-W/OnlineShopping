// mobile/index.js
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../../components/mobile/HelloWord'

// 引入子路由
import Home from '../../components/mobile/tabbar/Home'
import Classify from '../../components/mobile/tabbar/Classify'
import Star from '../../components/mobile/tabbar/Star'
import ShopCar from '../../components/mobile/tabbar/ShopCar'
import AboutMe from '../../components/mobile/tabbar/AboutMe'

Vue.use(Router)

// 引入 全局清零文件
import '../../assets/style/init.css'

let router = new Router({
  routes: [
    // 路由重定向，默认打开首页
    {path:'/',redirect:'/home'},
    {path: '/home',component: Home},
    {path: '/classify',component: Classify},
    {path: '/star',component: Star},
    {path: '/shopCar',component: ShopCar},
    {path: '/aboutMe',component: AboutMe},
  ]
})

/**
 * 判断是否为PC端设备，是，则跳转到PC端的路径
 */
router.beforeEach((to, from, next) => {
    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.href = '/p_index.html#/'
      return
    }
    next()
})
  
export default router

