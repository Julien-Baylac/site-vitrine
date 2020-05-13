<template>
  <div>
    <b-form-textarea
      id="textarea-state"
      v-model="text"
      :state="validation"
      :placeholder="$t('form.textarea_message')"
      rows="3"
    ></b-form-textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    computed: {
      validation() {
        if (this.text.length > 10 && this.text.length < 300) {
          return true
        } else if (this.text.length == 0) {
          return null
        } else {
          return false
        } 
      }
    }
  }
</script>