import Vue from 'vue'
import App from './App.vue'
// import plugins
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
// style imports
import './css/form.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
