import { firebaseAction } from 'vuexfire'
import { db } from '@/firebase'

export default {
  bindCarrots: firebaseAction(({ bindFirebaseRef }, farmId) => {
    return bindFirebaseRef('carrots', db.ref(`farms/${farmId}`))
  }),

  unbindCarrots: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('carrots')
  }),

  createCarrot: firebaseAction(({ state }, farmId) => {
    return db.ref(`farms/${farmId}`).push({
      uid: state.user.uid,
    })
  }),

  setUser: function ({ commit }, userData) {
    commit('setUser', userData)
  },

  clearUser: function ({ commit }) {
    commit('clearUser')
  },
}
