<template>
  <div class="contact container mx-auto">
    <h1>{{ $t('tabs.contact') | capitalize }}</h1>
    <p>{{ $t('form.title_message') }}</p>
    <div class="justify-content-center">
      <Form class="form"/>
    </div>
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
.contact {
  margin: 3em 3em;
}
</style>