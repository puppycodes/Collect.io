import Element from '../api/model/Element'

const getters = {
  modal: (state) => state.modal,
  inbox: (state): Element[] => state.inbox
}

export default getters
