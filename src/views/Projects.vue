<template>
  <div class="projects container">
    <h1>{{ $t('tabs.projects') | capitalize }}</h1>
    <div class="d-flex sort-button">
      <TypeSelectionButton 
        v-for="(tab, index) of tabs"
        :key="index"
        :title='tab.title'
        :type='tab.type'
        v-on:type='filterProject($event)'>
      </TypeSelectionButton>
    </div>
    <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 project-cards">
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
import TypeSelectionButton from '@/components/buttons/TypeSelectionButton'
import { Projects } from '@/utils/lists'

export default {
  name: 'projects',
  data() {
    return {  
      project_type: null,
      tabs: [
        {
          title: 'all',
          type: null
        },
        {
          title: 'applications',
          type: 'application'
        },
        {
          title: 'sites',
          type: 'site'
        },
        {
          title: 'art',
          type: 'art'
        }
      ]
    }
  },
  components: { 
    ProjectCard,
    TypeSelectionButton
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
  padding: 40px 20px 0px 0px;
}
.project-card {
  padding-right: 15px;
  margin-bottom: 10px;
}
.project-cards {
  padding-left: 30px;
}
h1 {
  margin-left: 15px;
}
</style>  