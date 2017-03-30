<template>
  <svg role="img" class="icon" :class="cls" :width="width" :height="height">
    <use v-bind:xlink:href="path + '#' + name"></use>
  </svg>
</template>

<script type="text/babel">
  export default {
    props: {
      name: String,
      width: String,
      height: String
    },
    computed: {
      cls: function () { return 'icon-' + this.name }
    },
    ready: function () {
      // svg4everybody()
    },
    data () {
      return {
        path: '/static/icons.svg'
      }
    }
  }
</script>
