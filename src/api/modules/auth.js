import ApiService from '@/api'
import { BASE_URL } from '@/utils/constants'

const USER_URL = 'api/user'

const UserService = {
  login({ email, password }) {
    return ApiService.post(`${BASE_URL}/${USER_URL}/login`, { email, password })
  },
  signup({ email, name, password }) {
    return ApiService.post(`${BASE_URL}/${USER_URL}`, { email, name, password })
  },
  update({ id, userType }) {
    return ApiService.patch(`${BASE_URL}/${USER_URL}`, { id, userType })
  }
}

export default UserService
