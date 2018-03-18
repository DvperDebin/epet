
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/MockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/loadingImg/timer.gif'


// vuelazyload配置对象
Vue.use(VueLazyload,{
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
