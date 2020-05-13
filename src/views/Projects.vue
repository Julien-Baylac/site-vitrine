<template>
  <div class="projects">
    projects
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  name: 'projects',
  components: {
    ProjectCard
  }
}
</script>

<style lang='scss' scoped>
  .projects {
    background-color: yellowgreen;
  }
</style>