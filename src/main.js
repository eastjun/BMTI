import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
