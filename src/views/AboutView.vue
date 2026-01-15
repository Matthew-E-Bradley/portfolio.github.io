<template>
  <div class="about">
    <h1>About</h1>
    With a background in Fine Arts and a career spent in SAP data migration and e-learning architecture, I build tools that help people master complex systems.

For the past nine years, I have supported the U.S. Army by translating intricate financial workflows into interactive multimedia instruction. My process is direct:

Analyze the system’s core requirements.

Develop the front-end (Vue/JS) and instructional logic (ADDIE).

Refine the UI/UX until the technical becomes accessible.

I believe that good design isn't about adding more—it's about leaving only what is necessary.

Off the clock I recently took up chess. Much like instructional design, it’s a constant lesson in strategy, patience, and the importance of a solid opening.
  </div>
  
</template>


<script>
import AboutMe from '../components/AboutMe.vue'
import IconTooling from '../components/icons/IconTooling.vue'
import IconDocumentation from '../components/icons/IconDocumentation.vue'
import IconCommunity from '../components/icons/IconCommunity.vue'

export default {
  name: 'AboutView',
  components: {
    AboutMe,
    IconTooling,
    IconDocumentation,
    IconCommunity,
  },
}
</script>


<style scoped>
.page-section {
  padding: var(--section-gap, 2rem) 1rem;
}

.about-grid {
  display: grid;
  gap: 2rem;
}

.intro h1 {
  margin: 0 0 0.5rem 0;
}

.lead {
  color: var(--color-text-dim, #6b7280);
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.chip {
  background: var(--color-surface, #f3f4f6);
  color: var(--color-text);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

@media (min-width: 1024px) {
  .page-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
