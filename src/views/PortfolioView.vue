<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import recordFair from '../assets/record_fair_8.webp'
import imiLogo from '../assets/IMI logo.png'
import indieGrits from '../assets/indie grits.webp'

const projects = [
  {
    id: 1,
    title: 'Greater Columbia Record Fair',
    description: 'Creation, Organizing, Marketing, and Design of the Greater Columbia Record Fair for 10 years.',
    tags: [ 'Event Planning', 'Marketing', 'Graphic Design', 'Branding'],
    image: recordFair,
    link: '#'
  },
  {
    id: 2,
    title: 'Logos',
    description: 'Hand-drawn and digitally designed logos for various clients.',
    tags: ['Illustration', 'Logo Design', 'Branding'],
    image: imiLogo,
    link: '#'
  },
  {
    id: 3,
    title: 'Flyers and Posters',
    description: 'Hand-drawn and digitally designed flyers and posters for various clients.',
    tags: ['Design', 'Illustration', 'Typography'],
    image: indieGrits,
    link: '#'
  }
]
</script>

<template>
  <main class="portfolio-page">
    <header class="page-header">
      <h1>Portfolio</h1>
      <p class="lead">Selected projects showcasing design and implementation.</p>
    </header>

    <section class="projects-grid" aria-label="Projects">
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :id="p.id"
        :title="p.title"
        :description="p.description"
        :tags="p.tags"
        :image="p.image"
        :link="p.link"
      />
    </section>
  </main>
</template>

<style scoped>
.portfolio-page {
  padding: calc(var(--section-gap) / 2);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header .lead {
  color: var(--color-text);
  margin-top: 0.5rem;
}

.projects-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>