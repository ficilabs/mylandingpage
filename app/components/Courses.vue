<script setup lang="ts">
import { ref } from 'vue'

// Define courses data
const COURSES = ref([
  {
    title: 'UI/UX Design for Beginners',
    desc: 'Design intuitive interfaces and improve user experience from scratch.',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Fullstack Web Development',
    desc: 'Master both front-end and back-end as a full-stack developer with React.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Strategic Digital Marketing',
    desc: 'Learn how to plan, execute, and scale digital campaigns effectively.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500'
  }
])
</script>

<template>
  <section class="py-24 px-6 bg-[#f0f9ff] border-y-[3px] border-black">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-end justify-between mb-16 gap-6">
        <div class="space-y-4">
          <h2 class="text-4xl md:text-5xl font-black text-black">Featured Courses</h2>
          <p class="text-gray-800 font-bold max-w-lg">
            Start your learning journey with our top pick courses designed to help you grow and level up faster.
          </p>
        </div>
        <button class="bg-[#0ea5e9] text-white px-6 py-3 rounded-xl border-[3px] border-black font-bold neo-shadow neo-shadow-hover transition-all whitespace-nowrap">
          All Courses →
        </button>
      </div>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          v-for="course in COURSES"
          :key="course.title"
          class="bg-white border-[3px] border-black rounded-3xl overflow-hidden neo-shadow group flex flex-col"
        >
          <div class="h-64 overflow-hidden border-b-[3px] border-black">
            <img
              :src="course.img"
              :alt="course.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-2xl font-black mb-4 text-black">{{ course.title }}</h3>
            <p class="text-gray-700 font-bold text-sm mb-8 flex-1">{{ course.desc }}</p>
            <button class="w-full bg-[#0ea5e9] text-white py-4 rounded-2xl border-[3px] border-black font-black neo-shadow-hover neo-shadow active:translate-y-1 transition-all">
              Learning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>