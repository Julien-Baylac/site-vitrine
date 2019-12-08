import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import { locales } from '@/locales'
import '@vuikit/theme'

Vue.config.productionTip = false
Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueI18n)
Vue.use(Vuelidate)

const i18n = new VueI18n({
  locale: store.getters.actual_lang,
  messages: locales
})

new Vue({
  Vuelidate,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
