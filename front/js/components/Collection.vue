<template>
  <div class="collection">
    <div class="collection__name"><span class="collection__icon"></span> {{ collection.name }}</div>
    <div class="collection__letter">{{ letter }}</div>
  </div>
</template>

<script>
  export default {
    props: ['collection'],
    computed: {
      letter () {
        if (this.collection.name) {
          return this.collection.name.charAt(0)
        }
        return ''
      }
    }
  }
</script>
