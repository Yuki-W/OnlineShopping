// 移动端程序入口
import Vue from 'vue'

import App from './App'
import router from '../../router/mobile/index'

// 按需导入 mint-ui 组件
import { Search, Tabbar, TabItem  } from 'mint-ui';
Vue.component(Search.name, Search);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
