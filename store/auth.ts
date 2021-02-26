export default {
  state: () => {
    return {
      email: '',
      password: '',
    }
  },

  mutations: {
    setAuth(state: any, payload: any) {
      state.email = payload.email
      state.password = payload.password
    },
  },

  getters: {
    getUser(state: any) {
      return state
    },
  },
}
