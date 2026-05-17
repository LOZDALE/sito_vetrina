<template>
  <Card class="!bg-brand-surface !border !border-white/5 !rounded-3xl !overflow-hidden hover:!border-brand-accent/30 !transition-all !duration-500 group shadow-lg">
    <template #header>
      <div class="aspect-video overflow-hidden">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    </template>
    <template #title>
      <h3 class="font-display text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
        {{ title }}
      </h3>
    </template>
    <template #subtitle>
       <div class="flex flex-wrap gap-2 mt-2">
        <Tag v-for="tag in tags" :key="tag" :value="tag" severity="secondary" class="!bg-brand-accent-2/10 !text-brand-accent-2 !text-[9px] !font-bold !uppercase !tracking-wider !border-none" />
      </div>
    </template>
    <template #content>
      <p class="text-gray-400 text-sm leading-relaxed mb-1">
        {{ description }}
      </p>
    </template>
    <template #footer>
      <Button 
        :as="link ? 'a' : 'button'"
        :href="link"
        :target="link ? '_blank' : undefined"
        :rel="link ? 'noopener noreferrer' : undefined"
        :label="locale === 'it' ? 'Dettagli Progetto' : 'Project Details'" 
        icon="pi pi-arrow-right" 
        iconPos="right" 
        text 
        class="!p-0 !text-xs !font-bold !text-white !uppercase !tracking-widest hover:!text-brand-accent transition-all group-hover:!gap-3"
      />
    </template>
  </Card>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const { locale } = useI18n()

defineProps({
  title: String,
  description: String,
  tags: Array,
  image: String,
  link: String
})
</script>

<style scoped>
:deep(.p-card-body) {
  padding: 2rem;
}
:deep(.p-card-title) {
  margin-bottom: 0.5rem;
}
</style>
