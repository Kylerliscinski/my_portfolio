<script setup>
import projectData from '../../constants/Projects';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section :id="projectData.id" class="projects-wrapper">
    <div class="projects-content p-5">
      <h5 class="projects-subtitle text-uppercase text-secondary">{{ projectData.subtitle }}</h5>
      <h1 class="projects-title text-primary">{{ projectData.title }}.</h1>
      <p class="projects-text text-primary">{{ projectData.text }}</p>
      <div class="col-12 projects-container d-flex flex-wrap justify-content-start">
        <div
          v-for="project in projectData.projects"
          :key="project.name"
          class="col-12 col-md-6 col-lg-4 d-flex flex-wrap project-item pt-5"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  &-wrapper {
    padding: 2rem 0;
  }
  &-subtitle {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  &-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  &-text {
    width: 75%;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
  }
  &-container {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .projects {
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
    &-text {
      width: 100%;
    }
  }
  .project-item {
    margin-bottom: 1rem;
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
  }
}
</style>