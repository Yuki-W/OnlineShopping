// 移动端程序入口
import Vue from 'vue'

import App from './App'
import router from '../../router/mobile/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
