<template>
  <div id="app">
    <Navbar class="navbar" id="home"></Navbar>
    <router-view class="router-view"></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
  width: 50%;
  text-align: right;
  border-bottom: 1px solid;
  border-bottom-color: black;
}
</style>
