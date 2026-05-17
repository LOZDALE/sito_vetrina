<template>
  <div class="min-h-screen bg-brand-bg text-gray-200 selection:bg-brand-accent selection:text-brand-bg">
    <ParticleCanvas />
    <NavBar />
    <Toast />
    <main class="relative z-10">
      <HeroSection />
      <SkillsSection class="reveal" />
      <ProjectsSection class="reveal" />
      <ContactSection class="reveal" />
    </main>
    <FooterSection class="relative z-10" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ParticleCanvas from './components/ParticleCanvas.vue'
import { useScrollReveal } from './composables/useAnimations'
import Toast from 'primevue/toast'

import WOW from 'wow.js'

onMounted(() => {
  new WOW().init()
})

useScrollReveal()
</script>

<style>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
