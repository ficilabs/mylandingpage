<template>
  <footer class="bg-white border-t-[3px] border-black pt-20 pb-10 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <!-- Brand -->
        <div class="lg:col-span-2 space-y-6">
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

          <p class="text-gray-700 font-bold max-w-sm">
            Empowering lifelong learners with flexible, high-quality skill
            development platforms built for your future.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-black text-lg mb-6 text-black">Quick Links</h4>
          <ul class="space-y-4 font-bold text-gray-700">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="hover:text-black">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-black text-lg mb-6 text-black">Support</h4>
          <ul class="space-y-4 font-bold text-gray-700">
            <li v-for="item in supportLinks" :key="item.label">
              <a :href="item.href" class="hover:text-black">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-black text-lg mb-6 text-black">Get in Touch</h4>
          <ul class="space-y-4 font-bold text-gray-700">
            <li>Email: support@skillwise.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li class="flex gap-4 pt-4">
              <div
                v-for="social in socials"
                :key="social"
                class="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center text-xs font-black neo-shadow hover:bg-[#0ea5e9] hover:text-white transition-colors cursor-pointer bg-white text-black"
              >
                {{ social }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-t-[3px] border-black pt-10 text-center font-bold text-gray-500"
      >
        © 2024 SkillWise. All rights reserved. | Terms of Service | Privacy Policy
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

const supportLinks = [
  { label: 'FAQ', href: '#' },
  { label: 'Policy', href: '#' },
  { label: 'Business', href: '#' },
]

const socials = ['IG', 'X', 'LN', 'YT']
</script>