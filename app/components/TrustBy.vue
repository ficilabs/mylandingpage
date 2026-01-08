<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 lg:px-8">
      <h2 class="text-center mb-12 text-gray-400 font-medium text-lg md:text-xl">Trusted by 5,000+ Companies Worldwide</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
        <div v-for="company in companies" :key="company.id" class="flex items-center justify-center group">
          <img 
            :src="company.logo" 
            :alt="company.name"
            class="h-8 md:h-10 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Stats Counter -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.id" class="stat-item">
          <div class="text-4xl md:text-5xl font-bold text-darken mb-2" :ref="`stat-${stat.id}`">0</div>
          <div class="text-gray-500 text-sm md:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustedBy',
  data() {
    return {
      companies: [
        { id: 1, name: 'Google', logo: '/img/company/google.svg' },
        { id: 2, name: 'Netflix', logo: '/img/company/netflix.svg' },
        { id: 3, name: 'Airbnb', logo: '/img/company/airbnb.svg' },
        { id: 4, name: 'Amazon', logo: '/img/company/amazon.svg' },
        { id: 5, name: 'Facebook', logo: '/img/company/facebook.svg' },
        { id: 6, name: 'Grab', logo: '/img/company/grab.svg' }
      ],
      stats: [
        { id: 'users', value: 50000, label: 'Active Users', current: 0 },
        { id: 'teachers', value: 1000, label: 'Expert Teachers', current: 0 },
        { id: 'courses', value: 200, label: 'Online Courses', current: 0 },
        { id: 'countries', value: 50, label: 'Countries', current: 0 }
      ],
      observer: null,
      hasAnimated: false
    }
  },
  mounted() {
    this.initIntersectionObserver()
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    initIntersectionObserver() {
      if (typeof window === 'undefined') return
      
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true
            this.animateStats()
          }
        })
      }, {
        threshold: 0.3
      })
      
      this.$nextTick(() => {
        const element = this.$el
        if (element) {
          this.observer.observe(element)
        }
      })
    },
    
    animateStats() {
      this.stats.forEach((stat, index) => {
        this.animateStat(stat, index)
      })
    },
    
    animateStat(stat, index) {
      const duration = 2000
      const startTime = Date.now()
      const endValue = stat.value
      const startValue = 0
      
      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        // Update the stat
        const statIndex = this.stats.findIndex(s => s.id === stat.id)
        if (statIndex !== -1) {
          this.stats[statIndex].current = current
          
          // Update DOM element
          const element = this.$refs[`stat-${stat.id}`]
          if (element && element[0]) {
            element[0].textContent = this.formatNumber(current)
          }
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure we end at the exact value
          const statIndex = this.stats.findIndex(s => s.id === stat.id)
          if (statIndex !== -1) {
            this.stats[statIndex].current = endValue
            const element = this.$refs[`stat-${stat.id}`]
            if (element && element[0]) {
              element[0].textContent = this.formatNumber(endValue)
            }
          }
        }
      }
      
      // Start animation with delay for each stat
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, index * 200)
    },
    
    formatNumber(num) {
      if (num >= 1000) {
        return (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0) + 'K+'
      }
      return num.toLocaleString()
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}

.stat-item {
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #F48C06, #FFB74D);
  border-radius: 4px 4px 0 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-item:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .stat-item {
    padding: 1rem;
  }
  
  .stat-item div:first-child {
    font-size: 2rem;
  }
}

/* Animation for when stats appear */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-item {
  animation: fadeInUp 0.6s ease-out forwards;
}

.stat-item:nth-child(1) { animation-delay: 0.1s; }
.stat-item:nth-child(2) { animation-delay: 0.2s; }
.stat-item:nth-child(3) { animation-delay: 0.3s; }
.stat-item:nth-child(4) { animation-delay: 0.4s; }
</style>