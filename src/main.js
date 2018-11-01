import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import { translations } from '@/assets/lang/index.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
