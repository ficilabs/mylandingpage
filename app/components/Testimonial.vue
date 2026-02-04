<template>
  <section class="py-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-4xl md:text-5xl font-black text-black">
        What Our Students Say
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(t, idx) in testimonials"
        :key="idx"
        :class="[
          'p-8 rounded-3xl border-[3px] border-black neo-shadow flex flex-col gap-6',
          t.featured ? 'bg-[#0ea5e9] text-white' : 'bg-white text-black'
        ]"
      >
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full border-2 border-black overflow-hidden bg-gray-200">
            <img :src="t.avatar" :alt="t.name" />
          </div>
          <div>
            <h4 class="font-black text-lg">{{ t.name }},</h4>
            <p
              :class="[
                'text-sm font-bold',
                t.featured ? 'text-blue-100' : 'text-gray-600'
              ]"
            >
              {{ t.role }}
            </p>
          </div>
        </div>

        <div class="flex gap-1">
          <span v-for="i in t.rating" :key="i" class="text-xl">⭐</span>
        </div>

        <p class="font-bold text-lg leading-relaxed">
          "{{ t.content }}"
        </p>
      </div>
    </div>

    <div class="flex justify-center gap-4 mt-12">
      <button
        class="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center neo-shadow hover:bg-gray-50 transition-colors text-black"
      >
        ←
      </button>
      <button
        class="w-12 h-12 rounded-full bg-[#0ea5e9] border-[3px] border-black flex items-center justify-center neo-shadow text-white hover:bg-[#0369a1] transition-colors"
      >
        →
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
  featured?: boolean
}

// Static testimonials data
const testimonials = ref<Testimonial[]>([
  {
    name: 'Aulla',
    role: 'UI/UX Designer',
    content: 'The courses at SkillWise are well structured and easy to follow. I felt more confident applying for jobs.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    name: 'Rio',
    role: 'Digital Marketer',
    content: 'Flexible learning really helped me as a full time employee. I can study anytime I want!',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=12'
  },
  {
    name: 'Aulia',
    role: 'Product Manager',
    content: 'Excellent mentors who provide real industry feedback. It really changed my career path.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=13',
    featured: true
  }
])
</script>