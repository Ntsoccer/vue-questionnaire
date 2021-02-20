import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Customer from './views/Customer.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
