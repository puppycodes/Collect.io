import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App'
import Inbox from './pages/Inbox'
import store from './store'
import Collections from './pages/Collections'
import { en } from './locales'

// Global Components
import Icon from './components/Icon'

// i18n
Vue.use(VueI18n)
Vue.config.lang = 'en'
Vue.locale('en', en)

Vue.use(VueRouter)

const routes = [
  {path: '/inbox', component: Inbox},
  {path: '/collection', component: Collections},
  {path: '/', redirect: '/inbox'}
]

const router = new VueRouter({ routes })

new Vue({
  router,
  store,
  el: '#app',
  components: {
    icon: Icon
  },
  render: h => h(App)
})
