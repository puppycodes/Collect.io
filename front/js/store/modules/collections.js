const state = {
  items: [{
    name: 'Print'
  }, {
    name: 'Font'
  }]
}

const getters = {
  collections: state => { return state.items }
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
