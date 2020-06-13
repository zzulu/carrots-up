import { firebaseAction } from 'vuexfire'
import { db } from '@/firebase'

export default {
  bindCarrots: firebaseAction(({ state, bindFirebaseRef }) => {
    return bindFirebaseRef('carrots', db.ref(`farms/${state.farmId}`))
  }),

  unbindCarrots: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('carrots')
  }),

  createCarrot: firebaseAction(({ state }) => {
    return db.ref(`farms/${state.farmId}`).push({
      uid: state.user.uid,
    })
  }),

  deleteAllCarrots: firebaseAction(({ state }) => {
    db.ref(`farms/${state.farmId}`).remove()
  }),

  setFarmId: function ({ commit }, FarmId) {
    commit('setFarmId', FarmId)
  },

  clearFarmId: function ({ commit }) {
    commit('clearFarmId')
  },

  setUser: function ({ commit }, userData) {
    commit('setUser', userData)
  },

  clearUser: function ({ commit }) {
    commit('clearUser')
  },
}
