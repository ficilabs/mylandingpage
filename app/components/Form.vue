<template>
  <section class="py-20 bg-gradient-to-b from-blue-50 to-white">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
          Daftar <span class="text-blue-600">Konsultasi</span>
        </h2>
        <p class="text-gray-500 mt-4 max-w-xl mx-auto">
          Ceritakan masalahmu dan dapatkan solusi terbaik dari kami.
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Nama -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Jurusan -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Jurusan
            </label>
            <input
              type="text"
              placeholder="Contoh: Teknik Informatika"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- No HP -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              No. HP / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Masalah -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Masalah yang Dihadapi
            </label>
            <textarea
              rows="5"
              placeholder="Ceritakan masalahmu secara singkat..."
              class="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <!-- Button -->
          <div class="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              class="px-10 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Daftar Konsultasi
            </button>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>
