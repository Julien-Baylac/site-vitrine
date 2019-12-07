<template>
  <vk-navbar-dropbar mode='push'>
    <vk-navbar transparent>
      <vk-navbar-nav class="menu">
        <vk-navbar-nav-dropdown :title="$t('nav.home')">
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item :title="$t('nav.home')" active></vk-nav-item>
            <router-link to="/"><vk-nav-item :title="$t('nav.home')" class="link"></vk-nav-item></router-link>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item href='#' title="Mention légale"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        <vk-navbar-nav-dropdown :title="$t('nav.about')">
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
        <vk-navbar-nav-dropdown :title="$t('nav.translate')" slot='right' navbar-aligned align="right">
          <vk-navbar-nav-dropdown-nav class="uk-align-right translation">
            <vk-nav-item :title="$t('locales.lang')" active></vk-nav-item>
            <vk-nav-item :title="$t('locales.fr')" @click="change_lang('fr')"></vk-nav-item>
            <vk-nav-item :title="$t('locales.en')" @click="change_lang('en')"></vk-nav-item>
            <vk-nav-item :title="$t('locales.ru')" @click="change_lang('ru')"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
    </vk-navbar>
  </vk-navbar-dropbar>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    change_lang(lang) {
      return this.$store.commit('change_lang', lang)
    }
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
.vk-navbar-nav-dropdown {
  margin-top: 0 !important
}
</style>