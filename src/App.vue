<template>
  <div id="app">
      <Main></Main>
  </div>
</template>

<script>
import Main from '@/views/Main'

export default {
  components: {
      Main
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.uk-navbar-dropdown-dropbar {
  padding-top: 0% !important
}
</style>
