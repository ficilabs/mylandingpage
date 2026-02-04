<template>
  <section class="py-24 px-6">
    <div
      class="max-w-5xl mx-auto relative rounded-[40px] border-[4px] border-black bg-white overflow-hidden neo-shadow-lg p-12 md:p-24 text-center space-y-8"
    >
      <!-- Background blobs -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9] opacity-20 -mr-32 -mt-32 rounded-full border-[3px] border-black"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-[#e0f2fe] opacity-20 -ml-32 -mb-32 rounded-full border-[3px] border-black"
      ></div>

      <div class="relative z-10 flex flex-col items-center">
        <div
          class="w-20 h-20 mb-8 rounded-2xl border-[3px] border-black overflow-hidden neo-shadow bg-white"
        >
          <img
            src="https://picsum.photos/200/200?random=44"
            alt="tutor"
            class="w-full h-full object-cover"
          />
        </div>
        <h2 class="text-4xl md:text-6xl font-black tracking-tight leading-tight text-black">
          Ready to Level Up <br /> Your Skills?
        </h2>
        <p class="text-xl text-gray-800 font-bold max-w-2xl mx-auto mt-6">
          Join thousands of learners and experts from around the world with SkillWise. Start learning today anytime, anywhere.
        </p>
        <div class="mt-12">
          <button
            class="bg-[#0ea5e9] text-white px-10 py-5 rounded-2xl border-[4px] border-black text-2xl font-black neo-shadow-lg neo-shadow-hover transition-all"
          >
            Learning Now
          </button>
        </div>
      </div>

      <!-- Decorative elements -->
      <ClientOnly>
        <div
          class="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block w-32 h-44 rounded-2xl border-[3px] border-black neo-shadow overflow-hidden -rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300"
            class="w-full h-full object-cover"
            alt="Support"
          />
        </div>
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block w-32 h-44 rounded-2xl border-[3px] border-black neo-shadow overflow-hidden rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300"
            class="w-full h-full object-cover"
            alt="Meeting"
          />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive state needed for this static CTA component
</script>

<style scoped>
/* Optional: Keep Neo-shadow styles if not globally imported */
.neo-shadow-lg {
  box-shadow: 8px 8px 0px #000;
}
.neo-shadow-hover:hover {
  transform: translateY(-4px);
}
</style>