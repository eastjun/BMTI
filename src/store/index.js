import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from '@/store/modules/snackbar'
import socket from '@/store/modules/socket'
import color from '@/store/modules/color'
import auth from '@/store/modules/auth'
import chat from '@/store/modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbar,
    socket,
    auth,
    color,
    chat
  }
})
