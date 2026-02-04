<template>
  <section class="py-24 px-6 max-w-7xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-black mb-4 text-black">Your Learning, Made Better</h2>
    <p class="text-gray-700 font-bold mb-16 max-w-2xl mx-auto">
      SkillWise offers superior classes, flexible learning, and industrial mentors to help you grow at your own pace, on your own terms.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="f in FEATURES" 
        :key="f.id"
        :class="[
          'p-8 rounded-2xl border-[3px] border-black text-left flex flex-col items-start neo-shadow neo-shadow-hover transition-all',
          f.id === '4' ? 'bg-[#0ea5e9] text-white' : 'bg-white text-black'
        ]"
      >
        <div 
          class="w-14 h-14 rounded-xl border-2 border-black flex items-center justify-center text-3xl mb-6 neo-shadow bg-white"
        >
          {{ f.icon }}
        </div>
        <h3 class="text-xl font-black mb-4">{{ f.title }}</h3>
        <p :class="['font-bold text-sm', f.id === '4' ? 'text-blue-50' : 'text-gray-700']">
          {{ f.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Expert Instructors',
    description: 'Learn directly from experienced mentors and industry professionals.',
    icon: '👨‍🏫',
    color: '#fee2e2'
  },
  {
    id: '2',
    title: 'Structured Materials',
    description: 'From beginner to expert levels, our curriculum is tailored to every need.',
    icon: '📚',
    color: '#e0e7ff'
  },
  {
    id: '3',
    title: 'Flexible Learning',
    description: 'Study anytime, anywhere. No dead-lines, no pressure.',
    icon: '⏰',
    color: '#fef3c7'
  },
  {
    id: '4',
    title: 'Official Certificates',
    description: 'Earn certificates recognized by top companies to boost your career.',
    icon: '🎓',
    color: '#0ea5e9'
  }
]
</script>