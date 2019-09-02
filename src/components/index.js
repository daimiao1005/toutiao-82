import layHesder from './home/lay-header.vue'
import layoutAside from './home/layout-aside.vue'

// 所有自定义组件的插槽
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside)// 注册左导航组件
    Vue.component('lay-header', layHesder)
  }
}
