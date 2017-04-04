<template>
  <div class="form-group">
    <label class="label" :for="id" v-if="label">{{ label }} <em v-if="optional">{{ $t('optional') }}</em></label>
    <div v-if="type === 'tag'">
      <tag-input class="form-control form-control--tags" :id="id" v-model="localValue"></tag-input>
    </div>
    <div v-else>
      <input class="form-control" :id="id" type="text" v-model="localValue" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
  import TagInput from './inputs/TagInput.vue'

  export default {
    components: { TagInput },
    props: {
      id: String,
      label: String,
      model: String,
      value: {},
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      optional: Boolean
    },
    watch: {
      value (val) {
        if (val !== this.localValue) {
          this.localValue = val
        }
      },
      localValue (val) {
        this.$emit('input', val)
      }
    },
    data () {
      return {
        localValue: ''
      }
    },
    mounted () {
      this.localValue = this.value
    }
  }
</script>
