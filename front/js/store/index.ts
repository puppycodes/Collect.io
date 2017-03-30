import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import collections from './modules/collections'
import Element from '../api/model/Element'

Vue.use(Vuex)

const state = {
  modal: false,
  inbox: []
}

const mutations = {
  SET_MODAL: (state, name) => {
    state.modal = name
  },
  SET_INBOX: (state, elements: Element[]) => {
    state.inbox = elements
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
