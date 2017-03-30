<template>
  <div>
    <div class="tags-filter">
      <div class="tags-filter__item">Recent</div>
      <div class="tags-filter__item">Edit Tag</div>
    </div>
    <div class="cards">
      <div class="card" v-for="element in inbox">
        <div class="card__header"><icon name="note"></icon> {{ element.name }}</div>
        <div class="card__body">
          {{ element.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from '../components/Icon'

  export default {
    computed: {
      ...mapGetters(['inbox'])
    },
    components: {
      Icon
    }
  }
</script>
