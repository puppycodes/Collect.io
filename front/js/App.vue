<template>
  <div id="app">
    <header class="header">
      <div class="header__logo">
        <a href="/">
          <img src="/static/logo-collect.png">
        </a>
      </div>
      <div class="header__menu">
        <router-link to="/inbox" activeClass="is-active">Inbox</router-link>
        <router-link to="/collection" activeClass="is-active">Collection</router-link>
      </div>
      <div class="header__right">
        <div class="header__actions">
          <button href="#" class="header__actions__link" @click="openModal('modalLink')"></button>
        </div>
        <div class="header__profile">
          <img class="header__avatar" src="/static/avatar.png">
          Adrien
        </div>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
    <component v-if="modal" v-bind:is="modal"></component>
  </div>
</template>

<script>
import modalLink from './components/ModalLink.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters(['modal']),
  methods: mapActions(['openModal', 'loadInbox']),
  components: {
    modalLink
  },
  mounted () {
    this.loadInbox()
  }
}
</script>
