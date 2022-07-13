import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
const state = {
  token: getToken() || ''
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async getToken (content, value) {
    try {
      const res = await login(value)
      content.commit('setToken', res.data.data)
      setToken(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

