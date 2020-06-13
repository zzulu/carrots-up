import { vuexfireMutations } from 'vuexfire'

export default {
  ...vuexfireMutations,

  setFarmId: function (state, farmId) {
    state.farmId = farmId
  },

  clearFarmId: function (state) {
    state.farmId = ''
  },

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
