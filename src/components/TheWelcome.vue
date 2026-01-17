<script setup>
import CustomizeComputerIcon from './icons/customize-computer.svg'
import GrowthChartIcon from './icons/growth-chart-invest.svg'
import PencilBrushIcon from './icons/pencil-paintbrush.svg'
import PersonChalkboardIcon from './icons/person-chalkboard.svg'
import WelcomeItem from './WelcomeItem.vue'
//import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
//import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CustomizeComputerIcon />
    </template>
    <template #heading>Graphic Design</template>

Flyers, Logos, Banners, Social Media Posts, and more. I provide professional graphic design services to help you create visually appealing and effective designs that meet your needs. Whether you're looking for a new logo, promotional materials, or social media graphics, I can help bring your vision to life.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <GrowthChartIcon />
    </template>
    <template #heading>Instructional Design</template>

   UI/UX Design, E-learning Modules, Training Materials, and more. I specialize in instructional design services that enhance learning experiences through effective design principles. Whether you need engaging e-learning content or user-friendly interfaces, I can help you achieve your educational goals.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PencilBrushIcon />
    </template>
    <template #heading>Training Development</template>

    Blooms Taxonomy, Learning Objectives, Curriculum Design, and more. I offer training development services to create comprehensive and effective training programs. From designing curricula to developing learning objectives, I can help you deliver impactful training solutions.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PersonChalkboardIcon />
    </template>
    <template #heading>SAP Training</template>

  FI/CO, MM, SD, HR, and more. I provide specialized SAP training services to help individuals and organizations enhance their skills in using SAP software. Whether you're new to SAP or looking to deepen your expertise, I can offer tailored training solutions to meet your needs.
  </WelcomeItem>


</template>
