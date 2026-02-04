<template>
  <section
    class="relative overflow-hidden pt-12 md:pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
      <!-- Text Content -->
      <div class="lg:col-span-7 space-y-8">
        <div
          class="inline-block bg-[#e0f2fe] border-2 border-black px-4 py-1 rounded-full text-sm font-bold neo-shadow text-[#0369a1]"
        >
          Upgrade your skills and be successful
        </div>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-black"
        >
          Empower Your Future by Learning New Skills
          <span
            class="text-[#0ea5e9] underline decoration-black decoration-[6px] md:decoration-8 underline-offset-[6px] md:underline-offset-8"
          >
            Anytime, Anywhere
          </span>
        </h1>

        <p
          class="text-xl text-gray-800 font-medium max-w-2xl leading-relaxed"
        >
          Access the tools of expert-led classes in tech, design, business, and
          personal development, all in one powerful e-learning platform built
          for the digital age.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 pt-2">
          <button
            class="bg-[#0ea5e9] text-white px-10 py-5 rounded-2xl border-[4px] border-black text-xl font-black neo-shadow-lg neo-shadow-hover transition-all active:translate-y-1 active:shadow-none"
          >
            Learning Now
          </button>

          <div class="flex items-center gap-4 px-2">
            <div class="flex -space-x-3">
              <img
                v-for="i in users"
                :key="i"
                :src="`https://picsum.photos/64/64?random=${i}`"
                class="w-10 h-10 rounded-full border-2 border-black"
                alt="User"
              />
            </div>

            <div class="text-sm">
              <p class="font-black text-black">10K+ Students</p>
              <p class="text-gray-600 font-bold">Joined this month</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Content -->
      <div class="lg:col-span-5 relative flex justify-center">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-[#0ea5e9] border-[3px] border-black rounded-[60px] opacity-10 rotate-6 -z-10"
        />

        <div class="relative w-full max-w-[480px]">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
            alt="Happy Student"
            class="rounded-[40px] border-[4px] border-black neo-shadow-lg relative z-10 w-full object-cover aspect-square lg:h-auto"
          />

          <!-- Floating Stat Card -->
          <div
            class="absolute -bottom-4 -left-4 md:-left-8 bg-white border-[3px] border-black p-5 rounded-2xl neo-shadow z-20 flex flex-col items-center min-w-[140px]"
          >
            <p class="text-4xl font-black text-[#0ea5e9]">12+</p>
            <p
              class="text-xs font-black text-gray-800 uppercase tracking-wider"
            >
              Years in Industry
            </p>
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute top-8 -right-4 md:-right-8 bg-white border-[3px] border-black p-4 rounded-2xl neo-shadow z-20 hidden sm:block"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-[#e0f2fe] border-2 border-black flex items-center justify-center text-2xl"
              >
                🏆
              </div>
              <div>
                <p class="text-sm font-black text-[#0369a1]">
                  #1 Platform
                </p>
                <p
                  class="text-[10px] font-bold text-gray-800 uppercase"
                >
                  Globally Recognized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const users = [21, 22, 23, 24]
</script>
