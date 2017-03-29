<template>
  <div class="modal" @click="closeModal">
    <div class="modal-box" @click="preventCloseModal">
      <div class="modal__title">{{ title }}</div>
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      title: String
    },
    methods: {
      ...mapActions(['closeModal']),
      preventCloseModal (e) {
        e.stopPropagation()
      }
    }
  }
</script>
