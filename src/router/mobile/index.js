// mobile/index.js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../components/mobile/HelloWord'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
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

