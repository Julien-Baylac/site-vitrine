<template>
  <div class="name-input">
    <b-form  @submit.stop.prevent>
      <div class="d-flex justify-content-between">
        <label for="feedback-user">{{ input_title }}</label>
        <div class="messages">
          <b-form-invalid-feedback :state="validation">
              {{ $t('form.name_input.error_message') }}
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            {{ $t('form.name_input.validation_message') }}
          </b-form-valid-feedback>
          </div>
      </div>
      <b-input v-model="userId" :state="validation" id="feedback-user"></b-input>
     </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: '',
        error_message: 'Must be 5-12 characters long.',
        validation_message: 'Looks Good.'
      }
    },
    props: {
      input_title: String
    },
    computed: {
      validation() {
        if (this.userId.length > 2 && this.userId.length < 17) {
          return true
        } else if (this.userId.length == 0) {
          return null
        } else {
          return false
        } 
      }
    }
  }
</script>
