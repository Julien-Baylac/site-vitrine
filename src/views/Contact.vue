<template>
  <div class="contact uk-position-center">
    <div class="">
      <SocialNetworkBar class="uk-position-right"></SocialNetworkBar>
    </div>
    <hr>
    <p>{{ $t('form.message') }}</p>
    <Form class="form"></Form>
  </div>
</template>

<script>
import Form from '@/components/Form'
import SocialNetworkBar from '@/components/SocialNetworkBar'

export default {
  name: 'contact',
  components: {
    Form,
    SocialNetworkBar
  },
  data () {
    return {
        locale: 'en'
    }
},
}
</script>

<style lang="scss" scoped>
hr {
  margin-top: 60px;
  margin-bottom: 40px
}
.mail-contact {
  display: flex
}
</style>