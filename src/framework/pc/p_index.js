// PC端程序入口
import Vue from 'vue'

import App from './App'
import router from '../../router/pc/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
