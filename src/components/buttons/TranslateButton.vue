<template>
    <b-dropdown id="btn-translate" :text="$t('translate') | capitalize" class="m-md-2 btn-translate" right>
        <b-dropdown-item
            v-for="(lang, index) in local_lang_datas.locales" :key="index"
            :class="index+'-dropdown-tab'"
            @click="change_lang(index), reload()">
            {{ lang | capitalize }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'translate-button',
  methods: {
    /**
     * Change the language in the local storage of the web browser.
     * @param {string} lang - get the language (ex: ru, en, fr).
     * @return {string} commit the language in the store.
     */
    change_lang(lang) {
      localStorage.lang = lang
      return this.$store.commit('change_lang', lang)
    },
    /**
     * @return {string} Reload the page.
     */
    reload() {
      return document.location.reload(true);
    }
  },
  computed: {
    ...mapGetters([
      /** get all datas of languages files. */
      'local_lang_datas'
    ])
  }
}
</script>
