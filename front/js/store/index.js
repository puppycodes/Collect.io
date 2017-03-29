import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import collections from './modules/collections'

Vue.use(Vuex)

const state = {
  modal: false
}

const mutations = {
  SET_MODAL: (state, name) => {
    state.modal = name
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    collections
  }
})
