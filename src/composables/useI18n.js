import { ref, readonly } from 'vue'

const currentLocale = ref(localStorage.getItem('locale') || 'it')

const translations = {
  it: {
    nav: {
      projects: 'Progetti',
      skills: 'Competenze',
      contact: 'Contattami'
    },
    hero: {
      eyebrow: 'Full-Stack Solutions Architect',
      title: "Sinergia tra design d'avanguardia e ingegneria scalabile.",
      sub: 'Sviluppo di ecosistemi digitali ad alte prestazioni e architetture enterprise-ready.',
      designer: 'Frontend Engineering',
      coder: 'Backend Architecture',
      ctaPrimary: 'Portfolio Progetti',
      ctaSecondary: 'Consulenza'
    },
    common: {
      loading: 'Caricamento...',
      send: 'Invia'
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact Me'
    },
    hero: {
      eyebrow: 'Full-Stack Solutions Architect',
      title: 'Synergy between vanguard design and scalable engineering.',
      sub: 'Developing high-performance digital ecosystems and enterprise-ready architectures.',
      designer: 'Frontend Engineering',
      coder: 'Backend Architecture',
      ctaPrimary: 'Project Portfolio',
      ctaSecondary: 'Consulting'
    },

    common: {
      loading: 'Loading...',
      send: 'Send'
    }
  }
}

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.')
    let result = translations[currentLocale.value]
    for (const key of keys) {
      if (result) result = result[key]
    }
    return result || path
  }

  const toggleLocale = () => {
    currentLocale.value = currentLocale.value === 'it' ? 'en' : 'it'
    localStorage.setItem('locale', currentLocale.value)
  }

  return {
    t,
    toggleLocale,
    locale: readonly(currentLocale)
  }
}
