<script setup>
import WelcomeItem from './WelcomeItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <i class="fi fi-sr-customize-computer"></i>
    </template>
    <template #heading>Graphic Design</template>

Flyers, Logos, Banners, Social Media Posts, and more. I provide professional graphic design services to help you create visually appealing and effective designs that meet your needs. Whether you're looking for a new logo, promotional materials, or social media graphics, I can help bring your vision to life.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fi fi-sr-person-chalkboard"></i>
    </template>
    <template #heading>Instructional Design</template>

   UI/UX Design, E-learning Modules, Training Materials, and more. I specialize in instructional design services that enhance learning experiences through effective design principles. Whether you need engaging e-learning content or user-friendly interfaces, I can help you achieve your educational goals.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fi fi-sr-paintbrush-pencil"></i>
    </template>
    <template #heading>Training Development</template>

    Blooms Taxonomy, Learning Objectives, Curriculum Design, and more. I offer training development services to create comprehensive and effective training programs. From designing curricula to developing learning objectives, I can help you deliver impactful training solutions.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
 <i class="fi fi-sr-growth-chart-invest"></i>
    </template>
    <template #heading>SAP Training</template>

  FI/CO, MM, SD, HR, and more. I provide specialized SAP training services to help individuals and organizations enhance their skills in using SAP software. Whether you're new to SAP or looking to deepen your expertise, I can offer tailored training solutions to meet your needs.
  </WelcomeItem>


</template>
