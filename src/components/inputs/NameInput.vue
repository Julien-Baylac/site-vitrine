<template>
  <div class="name-input">
    <b-form  @submit.stop.prevent>
      <div class="d-flex justify-content-between">
        <label for="feedback-user">Name</label>
        <div class="messages">
          <b-form-invalid-feedback :state="validation">
              Must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
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
        userId: ''
      }
    },
    computed: {
      validation() {
        return this.userId.length > 2 && this.userId.length < 17
      }
    }
  }
</script>
