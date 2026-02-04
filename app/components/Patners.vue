<template>
  <section class="border-y-[3px] border-black bg-white py-12">
    <div class="max-w-7xl mx-auto px-6 overflow-hidden">
      <div
        class="flex items-center justify-between gap-12 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
      >
        <span
          v-for="partner in partners"
          :key="partner"
          class="text-2xl md:text-3xl font-black text-black"
        >
          {{ partner }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State
const partners = ref(["Shopee", "facebook", "Google", "tokopedia", "LinkedIn"])
</script>