// PC端程序入口
import Vue from 'vue'

import App from './App'
import router from '../../router/pc/index'

// 导入 Element UI 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
