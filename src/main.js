import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI第三方的包直接写名字就行
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'// 初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http">http://ttapi.research.itcast.cn/mp/v1_0'// 赋值基础地址
Vue.prototype.$axios = axios// 给Vue对象的原型属性赋值,那么所有的vue的原型实例都自动拥有$axios
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI组件 任意位置都可以使用
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
