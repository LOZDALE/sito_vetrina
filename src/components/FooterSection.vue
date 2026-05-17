<template>
  <footer class="py-12 border-t border-white/5 bg-brand-bg">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent font-bold border border-brand-accent/20">
            D
          </div>
          <p class="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">
            © {{ new Date().getFullYear() }} <span class="text-white">Francesco D'Alessandro</span>
          </p>
        </div>

        <div class="flex gap-4">
          <Button 
            as="a"
            href="https://github.com/LOZDALE"
            target="_blank"
            icon="pi pi-github" 
            severity="secondary" 
            variant="text" 
            rounded
            class="!text-gray-400 hover:!text-white !transition-all"
          />
          <Button 
            as="a"
            href="https://www.linkedin.com/in/francesco-d%E2%80%99alessandro-025283367/?skipRedirect=true"
            target="_blank"
            icon="pi pi-linkedin" 
            severity="secondary" 
            variant="text" 
            rounded
            class="!text-gray-400 hover:!text-[#0077b5] !transition-all"
          />
        </div>

        <div class="flex items-center gap-2">
           <p class="text-[9px] text-gray-600 uppercase tracking-widest font-bold">
            Engineering with 
          </p>
          <div class="flex gap-4 opacity-50">
             <i class="pi pi-bolt text-[10px]" title="Vite"></i>
             <i class="pi pi-palette text-[10px]" title="Tailwind"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
</style>