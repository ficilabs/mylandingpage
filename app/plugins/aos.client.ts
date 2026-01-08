import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  // Runtime `window` check to satisfy TypeScript and avoid server-side execution
  if (typeof window !== 'undefined') {
    // Prevent re-initialization during HMR
    if (!(globalThis as any)._aosInitialized) {
      AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out',
      })
      ;(globalThis as any)._aosInitialized = true
    }
  }
})
