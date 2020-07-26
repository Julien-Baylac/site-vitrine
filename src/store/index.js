import Vue from 'vue'
import Vuex from 'vuex'
import { locales } from '@/locales'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // langs
    lang: localStorage.lang ? localStorage.lang : window.navigator.language.substr(0, 2),
    langs: Object.keys(locales),
    lang_datas: locales,
    // alerts
    display_alert: false,
    alert_message: null,
    message_type: null
  },
  getters: {
    // langs
    local_lang: state => {
      return state.langs.includes(state.lang) ? state.lang : 'en'
    },
    local_lang_datas: state =>  {
      return state.lang_datas[localStorage.lang]
    },
    // alerts
    display_alert: state => {
      return state.display_alert
    },
    alert_message: state => {
      return state.alert_message
    },
    message_type: state => {
      return state.message_type
    }
  },
  mutations: {
    // langs
    change_lang(state, new_lang) {
      state.lang = new_lang
    },
    // alerts
    send_alert_message(state, message) {
      state.alert_message = message
    },
    send_message_type(state, type) {
      state.message_type = type
    },
    display_alert(state, alert) {
      state.display_alert = true
      state.message_type = alert.type
      state.alert_message = alert.message
      // after 5 secondes
      setTimeout(function(){ 
        state.message_type = false,
        state.alert_message = null,
        state.message_type = null
      }, 3000)
    },
  }
})
