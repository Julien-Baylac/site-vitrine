<template>
  <vk-navbar-dropbar mode='push'>
    <vk-navbar transparent>
      <vk-navbar-nav class="menu">
        <vk-navbar-nav-dropdown :title="$t('nav.home')" :delay-hide='delay'>
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item :title="$t('nav.home')" active></vk-nav-item>
            <router-link to="/"><vk-nav-item :title="$t('nav.home')" class="link"></vk-nav-item></router-link>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item href='#' title="Mention légale"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        <vk-navbar-nav-dropdown :title="$t('nav.about')" :delay-hide='delay'>
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item :title="$t('nav.about')" active></vk-nav-item>
            <router-link to="/about"><vk-nav-item :title="$t('nav.about')"></vk-nav-item></router-link>
            <vk-nav-item-header title="Header"></vk-nav-item-header>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item title="Item"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item :title="$t('nav.contact')" active></vk-nav-item>
            <router-link to="/contact"><vk-nav-item :title="$t('nav.contact_form')"></vk-nav-item></router-link>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right" class="translate">
        <vk-navbar-nav-dropdown :title="$t('nav.translate')" slot='right' navbar-aligned align="right" :delay-hide='delay'>
          <vk-navbar-nav-dropdown-nav class="uk-align-right translation">
            <vk-nav-item :title="$t('locales.lang')" active></vk-nav-item>
            <vk-nav-item 
              v-for="(lang, index) in lang_datas" :key="index"
              :title="$t(lang.title)" 
              @click="change_lang(lang.id)"
            >
            </vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
    </vk-navbar>
  </vk-navbar-dropbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  data() {
    return {
      // delay to hide the drop down nav
      delay: 1
    }
  },
  methods: {
    // to change the language in the store
    change_lang(lang) {
      localStorage.lang = lang
      return this.$store.commit('change_lang', lang)
    }
  },
  computed: {
    ...mapState([
      // get all datas of languages files
      'lang_datas'
    ])
  }
}
</script>

<style lang="scss" scoped>
a {
  :hover {
    color: black;
  }
  color: grey;
  text-decoration: none !important
}
.translation {
  a {
    text-align : right
  }
}
</style>