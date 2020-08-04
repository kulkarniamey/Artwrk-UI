export const state = () => ({
  email: '',
  type: ''
})

export const mutations = {
  addEmail(state, email) {
    state.email = email
  },
  clearEmail(state) {
    state.email = ''
  },
  addType(state, type) {
    state.type = type
  },
  clearType(state) {
    state.type = ''
  }
}
