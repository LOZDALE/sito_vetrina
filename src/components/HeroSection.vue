<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg py-24 lg:py-0">
    <!-- Background Gradient and Details -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-accent/5 blur-[160px] rounded-full"></div>
      <div class="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-accent-2/5 blur-[160px] rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8 xl:gap-16">
        
        <!-- Left Side: Frontend -->
        <div class="lg:text-right order-2 lg:order-1">
          <span class="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Frontend</span>
          <h2 class="font-display text-5xl md:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight uppercase tracking-tighter">
            {{ t('hero.designer').split(' ')[0] }}<br>
            <span class="text-brand-accent">{{ t('hero.designer').split(' ')[1] }}</span>
          </h2>
          <p class="text-gray-400 max-w-xs ml-auto text-base md:text-lg leading-relaxed hidden lg:block border-r-2 border-brand-accent/20 pr-6">
            Esperienze utente fluide con Vue 3, Tailwind CSS e micro-interazioni premium.
          </p>
        </div>

        <!-- Center: Strategic Portrait -->
        <div class="flex justify-center order-1 lg:order-2">
          <div class="relative group/image">
            <!-- Glow Effect -->
            <div class="absolute -inset-8 bg-gradient-to-r from-brand-accent/15 to-brand-accent-2/15 rounded-full blur-3xl opacity-50 transition duration-1000"></div>
            
            <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/WhatsApp Image 2026-05-16 at 13.12.03.jpeg" 
                class="wow pulse animated" data-wow-delay="300ms" data-wow-iteration="hover" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-delay: 300ms; animation-iteration-count: hover; animation-name: pulse;"
                alt="Portrait"
              />
            </div>

            <!-- Labels -->
            <!-- <div class="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-4 whitespace-nowrap">
              <span class="px-4 py-2 bg-brand-surface/80 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-accent shadow-2xl backdrop-blur-md">Vite & Vue</span>
              <span class="px-4 py-2 bg-brand-surface/80 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-accent-2 shadow-2xl backdrop-blur-md">Node & SQL</span>
            </div> -->
          </div>
        </div>

        <!-- Right Side: Backend -->
        <div class="order-3">
          <span class="text-brand-accent-2 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Backend</span>
          <h2 class="font-display text-5xl md:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight uppercase tracking-tighter">
            {{ t('hero.coder').split(' ')[0] }}<br>
            <span class="text-brand-accent-2">{{ t('hero.coder').split(' ')[1] }}</span>
          </h2>
          <p class="text-gray-400 max-w-xs text-base md:text-lg leading-relaxed hidden lg:block border-l-2 border-brand-accent-2/20 pl-6">
            Sistemi scalabili, API performanti e gestione sicura dei dati con Node.js e SQL.
          </p>
        </div>
      </div>

      <!-- Hero Bottom Cta -->
      <div class="mt-24 text-center animate-fade-in-delayed">
        <h1 class="font-display text-4xl md:text-5xl font-bold mb-10 text-white max-w-4xl mx-auto leading-tight italic">
          <span class="text-brand-accent">"</span>{{ t('hero.title') }}<span class="text-brand-accent-2">"</span>
        </h1>
        <div class="flex flex-wrap justify-center gap-6 items-center">
          <Button 
            :label="t('hero.ctaPrimary')" 
            icon="pi pi-external-link" 
            iconPos="right"
            severity="primary"
            class="px-10 py-5 !rounded-full !font-black !uppercase !tracking-widest !text-xs !bg-brand-accent !border-none !text-brand-bg transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,213,176,0.4)]"
            as="a"
            href="#projects"
          />
          <Button 
            :label="t('hero.ctaSecondary')" 
            severity="secondary" 
            variant="outlined"
            class="px-10 py-5 !rounded-full !font-bold !uppercase !tracking-widest !text-xs !border-white/10 !text-white transition-all duration-300"
            as="a"
            href="#contact"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import Button from 'primevue/button'

const { t } = useI18n()
</script>


<style scoped>
.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>