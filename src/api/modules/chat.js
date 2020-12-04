import ApiService from '@/api'
import { BASE_URL } from '@/utils/constants'

const CHAT_URL = 'api/chat'

const ChatService = {
  getChatRooms() {
    return ApiService.get(`${BASE_URL}/${CHAT_URL}`)
  },
  getMessages({ roomId }) {
    console.log(roomId)
    return ApiService.get(`${BASE_URL}/${CHAT_URL}/messages?roomId=${roomId}`)
  },
  post({ chatRoomType, imageUrl, subTitle, title, userId }) {
    return ApiService.post(`${BASE_URL}/${CHAT_URL}`, { chatRoomType, imageUrl, subTitle, title, userId })
  },
  uploadImage(image) {
    const formData = new FormData()
    formData.append('file', image)
    return ApiService.post(`${BASE_URL}/${CHAT_URL}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default ChatService
