<template>
  <card :element="element">
    <div slot="header"><img :src="favicon" :alt="name" v-if="favicon">{{ name }}</div>
    {{ element.name }}
  </card>
</template>

<script>
  import Card from '../Card.vue'
  import LinkHelper from 'root/helpers/Link.js'

  export default {
    props: {
      element: Object
    },
    components: {
      Card
    },
    computed: {
      name () {
        if (this.element) {
          return LinkHelper.domain(this.element.url)
        }
      },
      favicon () {
        if (this.element) {
          return LinkHelper.favicon(this.element.url)
        }
      }
    }
  }
</script>
