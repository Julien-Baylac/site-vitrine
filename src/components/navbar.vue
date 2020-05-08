<template>
  <vk-navbar-dropbar mode='push'>
    <vk-navbar transparent>
      <vk-navbar-nav class="menu">
        <vk-navbar-nav-item :title="$t('nav.home')" class="link" href='/'></vk-navbar-nav-item>
        <vk-navbar-nav-dropdown :title="$t('nav.about')" :delay-hide='delay'>
          <vk-navbar-nav-dropdown-nav
          class="dropdown">
            <vk-nav-item class="title" :title="$t('nav.portfolio')" active></vk-nav-item>
            <router-link to="/art_projects"><vk-nav-item class="project-type" :title="$t('nav.art_projects')"></vk-nav-item></router-link>
            <router-link to="/in_compagny"><vk-nav-item class="project-type" :title="$t('nav.in_compagny')"></vk-nav-item></router-link>
            <router-link to="/my_projects"><vk-nav-item class="project-type" :title="$t('nav.my_projects')"></vk-nav-item></router-link>
            <vk-nav-item-divider class="divider"></vk-nav-item-divider>
            <vk-nav-item class="title" :title="$t('nav.about')" active></vk-nav-item>
            <router-link to="/curriculumvitae"><vk-nav-item :title="$t('nav.curriculumvitae')"></vk-nav-item></router-link>
          </vk-navbar-nav-dropdown-nav>
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item class="title" :title="$t('nav.contact')" active></vk-nav-item>
            <router-link to="/contact"><vk-nav-item :title="$t('nav.contact_form')"></vk-nav-item></router-link>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right" class="translate">
        <vk-navbar-nav-dropdown :title="$t('nav.translate')" slot='right' navbar-aligned align="right" :delay-hide='delay'>
          <vk-navbar-nav-dropdown-nav class="uk-align-right translation dropdown">
            <vk-nav-item class="title" :title="$t('locales.lang')" active></vk-nav-item>
            <vk-nav-item 
              v-for="(lang, index) in lang_datas" :key="index"
              :title="$t(lang.title)"
              class="langs"
              @click="change_lang(lang.id), reload()"
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
    },
    reload() {
      return document.location.reload(true);
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
.divider {
  margin-top: 15px;
}
.title {
  margin-bottom: 6px;
}
.project-type {
  margin-bottom: 5px;
}
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
  .langs {
    line-height: 1.1;
  }
}
</style>