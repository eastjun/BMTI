import { CREATE_CHAT_ROOM, FETCH_CHAT_MESSAGES, FETCH_CHAT_ROOMS, UPLOAD_IMAGE } from '@/store/shared/action.types'
import { SET_CHAT_MESSAGES, SET_CHAT_ROOM, SET_CHAT_ROOMS, SET_FILE } from '@/store/shared/mutation.types'
import ChatService from '@/api/modules/chat'

const state = {
  chatRooms: [],
  chatRoom: {},
  file: {},
  chatMessages: []
}

const getters = {
  chatRooms(state) {
    return state.chatRooms
  },
  chatRoom(state) {
    return state.chatRoom
  },
  file(state) {
    return state.file
  },
  chatMessages(state) {
    return state.chatMessages
  }
}

const mutations = {
  [SET_CHAT_ROOM](state, chatRoom) {
    state.chatRooms = chatRoom
  },
  [SET_CHAT_ROOMS](state, chatRooms) {
    state.chatRooms = chatRooms
  },
  [SET_FILE](state, file) {
    state.file = file
  },
  [SET_CHAT_MESSAGES](state, messages) {
    state.messages = messages
  }
}

const actions = {
  async [FETCH_CHAT_MESSAGES]({ commit }, { roomId }) {
    try {
      const { data } = await ChatService.getMessages({ roomId })
      console.log(data)
      commit(SET_CHAT_MESSAGES, data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async [FETCH_CHAT_ROOMS]({ commit }) {
    try {
      const {
        data: { chatRooms }
      } = await ChatService.getChatRooms()
      commit(SET_CHAT_ROOMS, chatRooms)
    } catch (e) {
      throw new Error(e)
    }
  },
  async [CREATE_CHAT_ROOM]({ commit }, { chatRoomType, imageUrl, subTitle, title, userId }) {
    try {
      const { data } = await ChatService.post({ chatRoomType, imageUrl, subTitle, title, userId })
      commit(SET_CHAT_ROOM, data)
    } catch (e) {
      throw new Error(e)
    }
  },
  async [UPLOAD_IMAGE]({ commit }, file) {
    try {
      const { data } = await ChatService.uploadImage(file)
      commit(SET_FILE, data)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
