<template>
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
    <!-- Image Section -->
    <div class="flex-1 relative">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#0ea5e9] border-[3px] border-black rounded-[100px] opacity-10 -rotate-12 -z-10"
      ></div>
      <NuxtImg
        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
        alt="Support Student"
        class="rounded-[40px] border-[4px] border-black neo-shadow-lg w-full object-cover"
      />
    </div>

    <!-- Text Section -->
    <div class="flex-1 space-y-6">
      <span class="font-bold text-[#0ea5e9] tracking-widest uppercase text-sm">Always Ready</span>
      <h2 class="text-4xl md:text-5xl font-black leading-tight text-black">
        Real-time Learning Support
      </h2>
      <p class="text-xl font-medium text-gray-700">
        Get instant help from mentors whenever you need it. We are here 24/7 to make sure your learning journey stays smooth and uninterrupted.
      </p>
      <button class="flex items-center gap-2 font-black text-[#0ea5e9] text-lg group">
        Learn more
        <span class="group-hover:translate-x-2 transition-transform">→</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive state or lifecycle needed for this static component
</script>