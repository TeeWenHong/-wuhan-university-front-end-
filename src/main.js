import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入pinia
import { createPinia } from 'pinia'



const pinia = createPinia()

Vue.use(pinia)

Vue.prototype.$http =axios
axios.defaults.baseURL = "http://localhost:9090"

Vue.use(VueAxios,axios)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
