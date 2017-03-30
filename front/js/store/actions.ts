import FakeServer from '../api/FakeServer'

const actions = {
  /**
   * Open modal box
   */
  openModal: ({commit}, name: string) => commit('SET_MODAL', name),

  /**
   * Close modal box
   */
  closeModal: ({commit}) => commit('SET_MODAL', false),

  /**
   * Get inbox element from the server
   */
  loadInbox: ({commit}) => {
    FakeServer.getInbox().then( (elements) => {
      commit('SET_INBOX', elements)
    })
  }
}

export default actions
