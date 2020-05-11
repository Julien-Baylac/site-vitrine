<template>
    <b-dropdown id="btn-translate" :text="$t('locales.lang')" class="m-md-2 btn-translate" right>
        <b-dropdown-item
            v-for="(lang, index) in lang_datas" :key="index"
            :class="lang.id"
            @click="change_lang(lang.id), reload()">
            {{ lang.title }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'translate-button',
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
