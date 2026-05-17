import { ref, onMounted } from 'vue'

export function useTypewriter(text, speed = 100) {
  const displayedText = ref('')
  let index = 0

  const type = () => {
    if (index < text.length) {
      displayedText.value += text.charAt(index)
      index++
      setTimeout(type, speed)
    }
  }

  onMounted(() => {
    type()
  })

  return { displayedText }
}

export function useScrollReveal() {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  })
}
