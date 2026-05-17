<template>
  <section id="skills" class="section-padding bg-brand-surface/20">
    <div class="container mx-auto px-6">
      <div class="mb-16 max-w-3xl">
        <span class="text-brand-accent text-xs font-bold tracking-widest uppercase block mb-4">Core Competencies</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-6">
          {{ locale === 'it' ? 'Competenze Tecniche & Expertise' : 'Technical Skills & Expertise' }}
        </h2>
        <p class="text-gray-400 text-lg">
          {{ locale === 'it' ? 'Approccio ingegneristico focalizzato sulla scalabilità, performance e architetture enterprise.' : 'Engineering approach focused on scalability, performance, and enterprise-ready architectures.' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card v-for="category in skillCategories" :key="category.title" class="!bg-brand-surface !border !border-white/5 !rounded-2xl hover:!border-brand-accent-2/30 !transition-all !duration-500 group">
          <template #title>
             <h3 class="font-display text-lg font-bold text-white mb-4 uppercase tracking-widest group-hover:text-brand-accent-2 transition-colors">
               {{ category.title }}
             </h3>
          </template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <Tag 
                v-for="skill in category.skills" 
                :key="skill" 
                :value="skill"
                severity="secondary"
                class="!bg-white/5 !text-gray-300 !text-[10px] !font-medium !px-3 !py-1.5 !border-none hover:!bg-brand-accent-2/20 hover:!text-white transition-colors cursor-default"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

const { locale } = useI18n()

const skillCategories = [
  {
    title: 'Architecture',
    skills: ['Microservices', 'RESTful API', 'SQL/NoSQL', 'Design Patterns']
  },
  {
    title: 'Frontend',
    skills: ['Vue 3 (Composition API)', 'React', 'Tailwind v4', 'State Mgmt', 'Vite']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma ORM', 'Redis', 'Auth Systems']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'CI/CD Pipelines', 'AWS / Azure', 'Vercel / Netlify']
  }
]
</script>

<style scoped>
:deep(.p-card-body) {
  padding: 2rem;
}
</style>