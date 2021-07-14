import Vue from 'vue'
import App from './App.vue'
import store from './store/Index'
import VueRouter from 'vue-router'
import router from '@/router/index'
import "normalize.css"
import '@/assets/common.css'

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
