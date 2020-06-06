<template>
  <div class="projects container">
    <h1>{{ $t('tabs.projects') | capitalize }}</h1>
    <div class="d-flex sort-button">
      <BasicButton 
        title="all"
        :type= null
        v-on:type='filterProject($event)'>
      </BasicButton>
      <BasicButton 
        title="applications"
        type='application'
        v-on:type='filterProject($event)'>
      </BasicButton>
      <BasicButton 
        title="sites"
        type='site'
        v-on:type='filterProject($event)'>
      </BasicButton>
      <BasicButton 
        title="art"
        type='art'
        v-on:type='filterProject($event)'>
      </BasicButton>
    </div>
    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 project-cards">
      <ProjectCard class="project-card"
        v-for="(project, index) of filteredProjects" 
        :key="index" 
        :title="project.name"
        :type="project.type"
        :url_image="project.url_image">
      </ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import BasicButton from '@/components/buttons/BasicButton'
import { Projects } from '@/utils/lists'

export default {
  name: 'projects',
  data() {
    return {  
      project_type: null
    }
  },
  components: { 
    ProjectCard,
    BasicButton
  },
  computed: {
    filteredProjects() {
      return this.project_type == null ? Projects : Projects.filter(project => project.type == this.project_type)
    }
  },
  methods: {
    filterProject(type) {
      this.project_type = type
    }
  }
}
</script>

<style lang='scss' scoped>
.sort-button {
  margin-bottom: 10px;
  padding-left: 15px;
}
.projects {
  padding: 10px 20px 0px 0px;
}
.project-card {
  padding-right: 15px;
  margin-bottom: 10px;
}
.project-cards {
  padding-left: 30px;
}
</style>  