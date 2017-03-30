import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Inbox from './pages/Inbox'
import store from './store'
import Collections from './pages/Collections'

// Global Components
import Icon from './components/Icon'

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
