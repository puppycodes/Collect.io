<template>
  <div></div>
</template>

<script>
  import Taggle from 'taggle'

  export default {
    props: {
      value: {}
    },
    data () {
      return {
        taggle: null
      }
    },
    methods: {
      refresh () {
        this.$emit('input', this.taggle.getTags().values)
      }
    },
    watch: {
      value (val) {
        if (Array.isArray(val) && this.taggle.getTags.values !== val) {
          this.taggle.removeAll()
          this.taggle.add(val)
        }
      }
    },
    mounted () {
      const refresher = (e, tag) => {
        if (e) {
          this.refresh()
        }
      }

      this.taggle = new Taggle(this.$el, {
        tags: this.value,
        onTagAdd: refresher,
        onTagRemove: refresher
      })
    }
  }
</script>
