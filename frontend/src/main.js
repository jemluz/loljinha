import Vue from 'vue'
import App from './App'
import router from './config/router'
import store from './config/store'
import './config/msgs'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImplbXMiLCJub21lIjoiamVtaW0iLCJpYXQiOjE1NTYzODIyMDgsImV4cCI6MTU1NjY0MTQwOH0.1P0xqHqTGVLZOGmIl2eu5uSG9Iuca5xm8uWKXC2chrI'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
