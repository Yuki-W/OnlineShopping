// 移动端程序入口
import Vue from 'vue'

import App from './App'
import router from '../../router/mobile/index'

// 按需导入 mint-ui 组件
import { Search, Tabbar, TabItem,Swipe, SwipeItem  } from 'mint-ui';
Vue.component(Search.name, Search);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'

// 导入 MUI样式表
import '../../lib/mui/css/mui.min.css'

// 引入全局 scss文件
import '../../assets/style/global.scss'
import '../../assets/style/init.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
