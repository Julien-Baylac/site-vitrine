import Vue from 'vue'
import Vuex from 'vuex'
import { locales } from '@/locales'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: localStorage.lang ? localStorage.lang : window.navigator.language.substr(0, 2),
    langs: Object.keys(locales),
    lang_datas: locales
  },
  getters: {
    actual_lang: state => {
      return state.langs.includes(state.lang) ? state.lang : 'en'
    }
  },
  mutations: {
    change_lang(state, new_lang) {
      state.lang = new_lang
    }
  }
})
