import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from '@/store/modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbar
  }
})
