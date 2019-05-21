import Vue from 'vue'
import App from './App'
import router from './config/router'
import store from './config/store'
import './config/msgs'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImplbXMiLCJub21lIjoiamVtaW1hIiwiaWF0IjoxNTU4Mjg0NjA4LCJleHAiOjE1NTg1NDM4MDh9.Wq7TNd6XCDFDQTApHX8EY1g9xkh0kPOmNZnGX_EpFD4'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
