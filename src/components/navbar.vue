<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="(tab, index) in menu" :key="index">
        <a class="nav-link" href="#"
            :class="tab.title">
            {{ $t('tab') }}
        </a>
      </li>
    </ul>
    <TranslateButton/>
  </div>
</nav>
</template>

<script>
import TranslateButton from '@/components/TranslateButton'
import { mapState } from 'vuex'
import { pick } from 'lodash'

export default {
  name: 'navbar',
  components: {
    TranslateButton
  },
  mounted() {
    console.log(this.menu)
  },
  computed: {
    ...mapState([
      // get all datas of languages files
      'lang_datas'
    ]),
    menu() {
      const menu = pick(this.lang_datas, localStorage.lang);
      return menu.nav
    }
  } 
}
</script>

<style lang="scss" scoped>
.navbar-nav {
  margin-left: 2em;
}
</style>
