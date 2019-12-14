const sys = {
  state: {
    mainWrapHeight: ''
  },
  mutations: {
    UPDATE_MAIN_WRAP_HEIGHT: (state, data) => {
      state.mainWrapHeight = data
    }
  },
  actions: {
    updateMainWrapHeight({ commit }, data) {
      commit('UPDATE_MAIN_WRAP_HEIGHT', data)
    }
  }
}
export default sys
