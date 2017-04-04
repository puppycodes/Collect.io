<template>
  <div :class="typeClass">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      element: Object
    },
    computed: {
      typeClass () {
        if (this.element) {
          return 'card card--' + this.element.type
        }
        return 'card'
      }
    }
  }
</script>
