<template>
  <card :element="element">
    <div slot="header"><icon name="note"></icon> {{ element.name }}</div>
    {{ element.content }}
  </card>
</template>

<script>
  import Card from 'components/Card.vue'
  import Icon from 'components/Icon.vue'

  export default {
    props: {
      element: Object
    },
    components: {
      Card,
      Icon
    }
  }
</script>
