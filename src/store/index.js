import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv: []
  },
  mutations: {
    setCV (state, value) {
      state.cv = value
      document.title = state.cv.pageTitle
    }
  },
  getters: {
    getCV: state => state.cv,
    getSection: (state, getters) => (section) => {
      return state.cv[section]
    },
    getName: state => state.cv['profile']['firstname'] + ' ' + state.cv['profile']['lastname'],
    displaySection: (state) => (query) => {
      return state.cv[query].display
    }
  },
  actions: {
    loadCV ({commit}) {
      let vitae = require('../../static/cv.json')
      commit('setCV', vitae)
    }
  }
})
