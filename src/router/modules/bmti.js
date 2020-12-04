import BmtiMainPage from '@/views/bmti/BmtiMainPage'
import BmtiResultPage from '@/views/bmti/BmtiResultPage'
import BmtiSelectPage from '@/views/bmti/BmtiSelectPage'
import store from '@/store'
import { SET_USER } from '@/store/shared/mutation.types'

const requireAuth = () => (from, to, next) => {
  const user = JSON.parse(localStorage.getItem('user'))
  store.commit(SET_USER, user)
  if (user) {
    return next()
  }
  next('/login')
}

const bmtiRoutes = [
  {
    path: '/bmti',
    component: BmtiMainPage,
    beforeEnter: requireAuth()
  },
  {
    path: '/bmti/result',
    component: BmtiResultPage,
    beforeEnter: requireAuth()
  },
  {
    path: '/bmti/select',
    component: BmtiSelectPage,
    beforeEnter: requireAuth()
  }
]
export default bmtiRoutes
