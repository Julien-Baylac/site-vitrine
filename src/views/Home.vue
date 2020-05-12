<template>
  <div data-target="#home" data-spy="scroll">
    <Header id="header"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
  </div>  
</template>

<script>
import Header from '@/views/Header'
import Projects from '@/views/Projects'
import Contact from '@/views/Contact'

export default {
  name: 'home',
  components: {
    Header,
    Projects,
    Contact
  }
}
</script>
