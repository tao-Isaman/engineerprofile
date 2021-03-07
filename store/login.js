export default {
  actions: {
    login(ctx, user) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await this.$axios.$post('api/token', user)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      })
    },
  },
}

