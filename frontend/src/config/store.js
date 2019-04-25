import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    isCloseIcon: false
  },
  mutations: {
    toggleMenu (state, isVisible) {
      if(isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
        state.isCloseIcon = !state.isCloseIcon
      } else {
        state.isMenuVisible = isVisible
        state.isCloseIcon = isVisible
      }
      console.log('toggleMenu = ' + state.isMenuVisible)
    }
  }
}) 