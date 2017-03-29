import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import collections from './modules/collections'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  getters: getters,
  modules: {
    collections
  }
})
