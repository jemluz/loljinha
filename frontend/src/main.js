import Vue from 'vue'
import App from './App'
import router from './config/router'
import store from './config/store'
import './config/msgs'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImplbXMiLCJub21lIjoiYXNkIiwiaWF0IjoxNTU2Mzc5ODE0LCJleHAiOjE1NTY2MzkwMTR9.Kkmmmwe2HGnqq1NokPOnJ36y2z6xn8H3uAdxXFQzlaE'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
