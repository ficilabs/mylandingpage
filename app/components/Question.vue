<template>
  <section class="bg-[#FDF8EE] py-24 rounded-2xl mx-4 mt-20">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-darken">
          Frequently Asked <span class="text-yellow-500">Questions</span>
        </h2>
        <p class="mt-4 text-gray-500 max-w-xl mx-auto">
          Everything you need to know about our platform and services.
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-sm cursor-pointer transition hover:shadow-md"
          @click="toggle(index)"
        >
          <!-- Question -->
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-darken">
              {{ faq.question }}
            </h3>
            <span
              class="text-yellow-500 transition-transform duration-300"
              :class="active === index ? 'rotate-180' : ''"
            >
              ▼
            </span>
          </div>

          <!-- Answer -->
          <transition
            name="accordion"
            @enter="enter"
            @leave="leave"
          >
            <p
              v-if="active === index"
              class="mt-4 text-gray-500 leading-relaxed"
            >
              {{ faq.answer }}
            </p>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(null)

const faqs = [
  {
    question: 'Is Skilline suitable for beginners?',
    answer:
      'Absolutely! Skilline is designed with a beginner-friendly interface while still offering powerful features.'
  },
  {
    question: 'Can I use Skilline on mobile devices?',
    answer:
      'Yes, Skilline is fully responsive and optimized for mobile, tablet, and desktop devices.'
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'We provide fast and reliable customer support via chat, email, and scheduled calls.'
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes! You can try Skilline for free before upgrading to a premium plan.'
  }
]

const toggle = (index) => {
  active.value = active.value === index ? null : index
}

/* Smooth height animation */
const enter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px'
    el.style.opacity = '1'
  })
}

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  requestAnimationFrame(() => {
    el.style.height = '0'
    el.style.opacity = '0'
  })
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
</style>
