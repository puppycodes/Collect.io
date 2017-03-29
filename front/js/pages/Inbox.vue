<template>
  <div>
    <div class="tags-filter">
      <div class="tags-filter__item">Recent</div>
      <div class="tags-filter__item">Edit Tag</div>
    </div>
    <div class="cards">
      <div class="card" v-for="n in 10">
        <div class="card__header"><img src="/static/twitter.png" alt=""> Twitter.com</div>
        <div class="card__body">
            <span v-for="k in n">
              Open source bookmark manager. Manage your inspiration
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>
