<template>
  <section class="mt-10"
    <!-- Heading -->
    <div class="max-w-xl mx-auto text-center mb-12">
      <h1 class="font-bold text-darken text-2xl">
        Proyek <span class="text-yellow-500">Mahasiswa</span>
      </h1>
      <p class="text-gray-500 text-sm mt-2">
        Contoh proyek teknik yang realistis dan relevan untuk tugas kuliah.
      </p>
    </div>

    <!-- Slider -->
    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(group, index) in slideGroups"
          :key="index"
          class="min-w-full grid gap-6 px-4"
          :class="{
            'grid-cols-1': isMobile,
            'md:grid-cols-3': !isMobile
          }"
        >
          <div
            v-for="(item, i) in group"
            :key="i"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
          >
            <!-- Image -->
            <div class="h-40 bg-gray-200">
              <img
                :src="item.image"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="font-semibold text-lg text-darken">
                {{ item.title }}
              </h3>
              <p class="text-gray-500 text-sm mt-2">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicator -->
      <div class="flex justify-center gap-2 mt-6">
        <span
          v-for="(_, i) in slideGroups"
          :key="i"
          class="w-3 h-3 rounded-full"
          :class="i === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

// Data proyek
const projects = [
  {
    title: 'Absensi QR Code',
    desc: 'Sistem absensi siswa berbasis QR Code dan web dashboard.',
    image: 'https://source.unsplash.com/400x300/?qr,code'
  },
  {
    title: 'Monitoring IoT',
    desc: 'Monitoring suhu & kelembaban menggunakan Arduino.',
    image: 'https://source.unsplash.com/400x300/?iot,arduino'
  },
  {
    title: 'Web Akademik',
    desc: 'Aplikasi akademik untuk data siswa dan guru.',
    image: 'https://source.unsplash.com/400x300/?dashboard,web'
  },
  {
    title: 'Smart Home',
    desc: 'Kontrol lampu dan perangkat rumah via internet.',
    image: 'https://source.unsplash.com/400x300/?smarthome'
  },
  {
    title: 'Machine Learning',
    desc: 'Prediksi data menggunakan model ML sederhana.',
    image: 'https://source.unsplash.com/400x300/?machine,learning'
  },
  {
    title: 'Sistem Inventori',
    desc: 'Manajemen stok barang berbasis web.',
    image: 'https://source.unsplash.com/400x300/?inventory,system'
  }
]

// Detect device width
const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// Grup 3 card per slide (desktop) atau 1 card per slide (mobile)
const slideGroups = computed(() => {
  const groupSize = isMobile.value ? 1 : 3
  const result = []
  for (let i = 0; i < projects.length; i += groupSize) {
    result.push(projects.slice(i, i + groupSize))
  }
  return result
})

const currentSlide = ref(0)
let interval = null

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)

  interval = setInterval(() => {
    currentSlide.value =
      (currentSlide.value + 1) % slideGroups.value.length
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
  window.removeEventListener('resize', checkMobile)
})
</script>
