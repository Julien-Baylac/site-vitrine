<template>
  <div data-target="#home" data-spy="scroll">
    <Header id="header"/>
    <div class="content">
      <Projects id="projects"/>
      <About id='about'/>
      <Contact id="contact"/>
    </div>
  </div>  
</template>

<script>
import Header from '@/views/Header'
import Projects from '@/views/Projects'
import Contact from '@/views/Contact'
import About from '@/views/About'

export default {
  name: 'home',
  components: {
    Header,
    Projects,
    Contact,
    About
  }
}
</script>

<style lang='scss' scoped>
.content {
  background-color: white;
}
</style>