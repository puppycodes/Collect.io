<template>
  <modal :title="$t('add_link')">
    <field id="form_url" v-model="link.url" :label="$t('url')" :placeholder="$t('url_placeholder')"></field>
    <field id="form_name" v-model="link.name" :label="$t('title')" :placeholder="$t('title')" :optional="true"></field>
    <field id="form_tags" v-model="link.tags" :label="$t('tag')" :placeholder="$t('tag')" type="tag"></field>
    <div class="form-actions">
      <button class="btn" @click="cancel">{{ $t('btn_cancel') }}</button>
      <button class="btn btn-primary" @click="save">{{ $t('btn_add_link') }}</button>
    </div>
  </modal>
</template>

<script>
  import { mapActions } from 'vuex'
  import Modal from './Modal.vue'
  import Field from './Field.vue'

  const getEmptyLink = () => {
    return {
      name: '',
      url: '',
      tags: []
    }
  }

  export default {
    data () {
      return {
        link: getEmptyLink()
      }
    },
    methods: {
      ...mapActions(['closeModal', 'addLink']),
      cancel () {
        this.link = getEmptyLink()
        this.closeModal()
      },
      save () {
        this.addLink(this.link).then(() => {
          this.closeModal()
        })
      }
    },
    components: {
      Modal,
      Field
    }
  }
</script>
