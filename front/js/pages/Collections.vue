<template>
  <div>
    <div class="collections">
      <collection :collection="collection" v-for="collection in collections" :key="collection.name"></collection>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Collection from '../components/Collection'

  export default {
    components: {
      Collection
    },
    computed: mapGetters({
      collections: 'collections'
    })
  }
</script>
