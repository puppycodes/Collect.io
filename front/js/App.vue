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
        <div class="header__profile">
          <img class="header__avatar" src="/static/avatar.png">
          Adrien
        </div>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
