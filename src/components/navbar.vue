<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="(tab, index) in local_lang_datas.tabs" :key="index">
          <router-link class="router-link" to="/" v-scroll-to="`#${index}`">
            <a class="nav-link"
                :class="index+'-tab'"
                :href="'#'+index">
                {{ tab | capitalize }}
            </a>
          </router-link>
        </li>
      </ul>
      <TranslateButton/>
    </div>
  </nav>
</template>

<script>
import TranslateButton from '@/components/buttons/TranslateButton'
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  components: {
    TranslateButton
  },
  computed: {
    ...mapGetters([
      // get all datas of languages files.
      'local_lang_datas'
    ])
  }
}
</script> 

<style lang="scss" scoped>
@import '@/utils/scss/_variables';

.navbar {
  height: $height-navbar;
  .navbar-nav {
    margin-left: 2em;
  }
  .router-link {
    text-decoration: none;
  }
}
</style>
