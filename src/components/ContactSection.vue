<template>
  <section id="contact" class="section-padding overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Info Column -->
        <div>
          <span class="text-brand-accent text-xs font-bold tracking-widest uppercase block mb-4">Contact</span>
          <h2 class="font-display text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            {{ locale === 'it' ? 'Hai un progetto in mente?' : 'Have a project in mind?' }}<br>
            <span class="text-brand-accent-2 italic font-normal">
              {{ locale === 'it' ? 'Parliamone.' : "Let's talk." }}
            </span>
          </h2>
          
          <p class="text-gray-400 text-lg mb-12 max-w-md">
            {{ locale === 'it' ? 'Sono sempre alla ricerca di nuove sfide e collaborazioni interessanti.' : "I'm always looking for new challenges and interesting collaborations." }}
          </p>

          <div class="space-y-6">
            <div class="flex items-center gap-4 text-gray-300">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-sm font-medium tracking-wide">dalefra03@gmail.com</span>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="bg-brand-surface p-8 md:p-12 rounded-3xl border border-white/5 relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-brand-accent/20 to-brand-accent-2/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <form @submit.prevent="sendEmail" class="relative space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">{{ locale === 'it' ? 'Nome' : 'Name' }}</label>
                <input v-model="form.name" type="text" required class="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                <input v-model="form.email" type="email" required class="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">{{ locale === 'it' ? 'Messaggio' : 'Message' }}</label>
              <textarea v-model="form.message" rows="5" required class="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-4 bg-brand-accent text-brand-bg font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <span v-if="loading">{{ locale === 'it' ? 'Invio in corso...' : 'Sending...' }}</span>
              <span v-else>{{ locale === 'it' ? 'Invia Messaggio' : 'Send Message' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from 'primevue/usetoast'
import emailjs from '@emailjs/browser'

const { locale } = useI18n()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendEmail = async () => {
  const SERVICE_ID = 'service_y1qe3j7'
  const TEMPLATE_ID = 'template_d3dt38w'
  const PUBLIC_KEY = '_fGd6utcBbmdvfMwJ'

  loading.value = true
  
  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    }

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    console.log('EmailJS Success:', response.status, response.text)
    
    toast.add({
      severity: 'success',
      summary: locale.value === 'it' ? 'Richiesta Inviata' : 'Proposal Submitted',
      detail: locale.value === 'it' ? 'Il tuo messaggio è stato inviato correttamente.' : 'Your message has been sent successfully.',
      life: 5000
    })

    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    console.error('EmailJS Error:', error)
    const errorMessage = error?.text || error?.message || 'Unknown error'
    
    toast.add({
      severity: 'error',
      summary: 'Invio Fallito',
      detail: `Errore: ${errorMessage}. Riprova più tardi.`,
      life: 10000
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
</style>