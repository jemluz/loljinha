import Vue from 'vue'
import App from './App'
import router from './config/router'
import store from './config/store'
import msgs from './config/msgs'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImplbXMiLCJub21lIjoiamVtaW1hIiwiaWF0IjoxNTU2MTMyNjAyLCJleHAiOjE1NTYzOTE4MDJ9.sKeHnYJ7hd7UDbQLsnXbHfhyd5lQcVOWPAWRYIzop2Q'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
