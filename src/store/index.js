import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    farmId: '',
    user: {
      uid: '',
    },
    carrots: [],
  },
  mutations,
  actions,
})
