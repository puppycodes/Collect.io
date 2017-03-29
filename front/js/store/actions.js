/**
 * Open modal box
 *
 * @param commit
 * @param name
 */
export const openModal = ({commit}, name) => commit('SET_MODAL', name)

/**
 * Close modal box
 *
 * @param commit
 */
export const closeModal = ({commit}) => commit('SET_MODAL', false)
