<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'Greater Columbia Record Fair',
    description: 'Responsive Vue 3 portfolio built with Vite and scoped components.',
    tags: ['Vue 3', 'Vite', 'CSS'],
    image: '/src/assets/record_fair_8.webp',
    link: '#'
  },
  {
    id: 2,
    title: 'Logos',
    description: 'Markdown-driven blog with client-side routing and search.',
    tags: ['Vue', 'Markdown', 'Router'],
    image: '/src/assets/IMI logo.png',
    link: '#'
  },
  {
    id: 3,
    title: 'Flyers and Posters',
    description: 'Reusable UI components and tokens for consistent apps.',
    tags: ['Design', 'Components', 'Accessibility'],
    image: '/src/assets/indie grits.webp',
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