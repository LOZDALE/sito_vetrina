<template>
  <section id="projects" class="section-padding bg-brand-surface/30">
    <div class="container mx-auto px-6">
      <div class="mb-20 max-w-2xl">
        <span class="text-brand-accent-2 text-xs font-bold tracking-widest uppercase block mb-4">Project Portfolio</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-6">
          {{ locale === 'it' ? 'Soluzioni Enterprise & Casi di Studio' : 'Enterprise Solutions & Case Studies' }}
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed">
          {{ locale === 'it' ? 'Una selezione di progetti focalizzati su scalabilità, performance e innovazione tecnica.' : 'A selection of projects focused on scalability, performance, and technical innovation.' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import ProjectCard from './ProjectCard.vue'

const { locale } = useI18n()

const projects = computed(() => [
  {
    title: 'Si Parte - webapp',
    description: locale.value === 'it' 
      ? 'App per la ricerca della meta ideale.' 
      : 'App for finding the ideal destination.',
    tags: ['js', 'Docker', 'PHP', 'MySQL'],
    image: '/siParte.png',
    link: 'https://github.com/LOZDALE/si_parte_webapp'
  },
  {
    title: 'Flappy Bird APK',
    description: locale.value === 'it' 
      ? 'realizzato interamente in Python, supporta sia pc che android.' 
      : 'Flappy Bird APK.',
    tags: ['Python', 'Kivy', 'buildozer', 'Android', 'pygame'],
    image: '/bird.png',
    link: 'https://github.com/LOZDALE/pymobile/tree/main'
  },
  {
    title: 'Modern Web Experience',
    description: locale.value === 'it' 
      ? 'Engineering UI ad alta fedeltà con Vue 3, styling avanzato Tailwind v4 e architettura performance-first.' 
      : 'High-fidelity UI engineering with Vue 3, advanced Tailwind v4 styling, and performance-first architecture.',
    tags: ['Vue 3', 'Tailwind v4', 'Vite', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  }
])
</script>