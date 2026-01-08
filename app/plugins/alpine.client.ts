import Alpine from 'alpinejs'

export default defineNuxtPlugin(() => {
  // Use a runtime `window` check instead of `process.client` to satisfy TypeScript
  if (typeof window !== 'undefined') {
    // Avoid re-initializing Alpine during HMR or if already set
    if (!(globalThis as any).Alpine) {
      ;(globalThis as any).Alpine = Alpine
      Alpine.start()
    }
  }
})
