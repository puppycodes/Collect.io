<template>
  <div>
    <div class="tags-filter">
      <div class="tags-filter__item">Recent</div>
      <div class="tags-filter__item">Edit Tag</div>
    </div>
    <div class="cards">
      <component :key="element.name" v-bind:is="element.type + 'Card'" :element="element" v-for="element in inbox"></component>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NoteCard from '../components/cards/NoteCard.vue'
  import LinkCard from '../components/cards/LinkCard.vue'

  export default {
    computed: {
      ...mapGetters(['inbox'])
    },
    components: {
      NoteCard,
      LinkCard
    }
  }
</script>
