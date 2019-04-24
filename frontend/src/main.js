import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImplbXMiLCJub21lIjoiamVtaW1hIiwiaWF0IjoxNTU2MTIwMjMyLCJleHAiOjE1NTYxMjAyOTJ9.yYdoGBHOMmWbHUVD5hhkYWMij1JFFtzcJi_rP71hB30'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
