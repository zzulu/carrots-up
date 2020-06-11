import { vuexfireMutations } from 'vuexfire'

export default {
  ...vuexfireMutations,

  setUser: function (state, userData) {
    state.user = {
      ...userData
    }
  },

  clearUser: function (state) {
    state.user = {
      uid: '',
    }
  },
}
