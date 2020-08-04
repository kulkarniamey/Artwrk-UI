export const state = () => ({
  text: ''
})

export const mutations = {
  setText(state, text) {
    state.text = text
  },
  clearText(state, text) {
    state.text = ''
  }
}
