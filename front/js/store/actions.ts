import FakeServer from '../api/FakeServer'
import Element from '../api/model/Element'

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
  },

  /**
   * Save a link
   */
  addLink: (store, link) => {
    let element = new Element()
    Object.assign(element, link)
    element.type = 'link'
    return actions.addElement(store, element)
  },

  /**
   * Save an element
   */
  addElement: ({commit}, element: Element) => {
    return FakeServer.addInbox(element).then( (persistedElement) => {
      commit('ADD_INBOX', persistedElement)
    })
  }
}

export default actions
