<template>
  <nav
    class="sticky top-0 z-50 bg-[#fcfcfc] border-b-[3px] border-black py-4 px-6 md:px-12"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div
          class="w-10 h-10 bg-[#0ea5e9] border-2 border-black rounded-lg neo-shadow flex items-center justify-center"
        >
          <span class="font-black text-xl italic text-white">S</span>
        </div>
        <span class="text-2xl font-black tracking-tighter text-black">
          SkillWise
        </span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8 font-semibold text-black">
        <NuxtLink to="#" class="hover:text-[#0ea5e9] transition-colors">
          Home
        </NuxtLink>
        <NuxtLink to="#" class="hover:text-[#0ea5e9] transition-colors">
          Courses
        </NuxtLink>
        <NuxtLink to="#" class="hover:text-[#0ea5e9] transition-colors">
          About Us
        </NuxtLink>
        <NuxtLink to="#" class="hover:text-[#0ea5e9] transition-colors">
          Contact
        </NuxtLink>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button
          class="hidden sm:block font-bold hover:underline text-black"
        >
          Sign up
        </button>

        <button
          class="bg-[#0ea5e9] text-white px-6 py-2 rounded-xl border-[3px] border-black font-bold neo-shadow neo-shadow-hover transition-all"
        >
          Sign in
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Pure presentational component
// No state, no lifecycle hooks, SSR-safe by default
</script>