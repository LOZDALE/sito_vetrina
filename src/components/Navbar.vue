<template>
  <nav 
    class="fixed top-0 left-0 w-full z-500 transition-all duration-300 border-b border-transparent"
    :class="{ 'bg-brand-bg/80 backdrop-blur-md border-white/5 py-4': scrolled, 'py-6': !scrolled }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-10">
        <div class="w-25 h-10 overflow-hidden rounded-lg border border-white/10 shadow-lg">
          <img 
            src="/fd-logo.jpg" 
            alt="FD Logo" 
            class="w-full h-full object-cover"
          />
        </div>
        <span class="font-display text-xl font-bold tracking-tight text-white">Francesco D'Alessandro</span>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="item in navItems" 
          :key="item.id" 
          :href="`#${item.id}`"
          class="text-sm font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200 uppercase tracking-widest"
        >
          {{ t(`nav.${item.id}`) }}
        </a>
        
        <button 
          @click="toggleLocale"
          class="px-3 py-1 rounded-full border border-white/10 text-xs font-bold hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all uppercase"
        >
          {{ locale === 'it' ? 'EN' : 'IT' }}
        </button>

        <div class="flex items-center gap-2 ml-2 border-l border-white/10 pl-4">
          <Button 
            as="a"
            href="https://github.com/LOZDALE"
            target="_blank"
            icon="pi pi-github" 
            severity="secondary" 
            variant="text" 
            rounded
            class="!text-gray-400 hover:!text-white !p-2 transition-all"
          />
          <Button 
            as="a"
            href="https://www.linkedin.com/in/francesco-d%E2%80%99alessandro-025283367/?skipRedirect=true"
            target="_blank"
            icon="pi pi-linkedin" 
            severity="secondary" 
            variant="text" 
            rounded
            class="!text-gray-400 hover:!text-[#0077b5] !p-2 transition-all"
          />
        </div>
      </div>

      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-200">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="absolute top-full left-0 w-full bg-brand-surface border-b border-white/5 p-6 md:hidden">
        <div class="flex flex-col gap-4">
          <a 
            v-for="item in navItems" 
            :key="item.id" 
            :href="`#${item.id}`"
            @click="mobileMenuOpen = false"
            class="text-lg font-medium text-gray-300"
          >
            {{ t(`nav.${item.id}`) }}
          </a>
          <button 
            @click="toggleLocale(); mobileMenuOpen = false"
            class="self-start px-4 py-2 bg-white/5 rounded-lg text-sm text-brand-accent uppercase"
          >
            Change to {{ locale === 'it' ? 'English' : 'Italiano' }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import Button from 'primevue/button'

const { t, toggleLocale, locale } = useI18n()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Utilizzo classi Tailwind per tutto */
</style>
