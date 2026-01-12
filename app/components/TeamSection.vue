<template>
  <!-- Team Section -->
  <section class="max-w-6xl mx-auto mt-24 px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-darken">Meet Our <span class="text-yellow-500">Team</span></h2>
      <p class="mt-2 text-gray-500 text-sm md:text-base">Tim profesional kami siap membantu mahasiswa mengembangkan proyek teknik dan portofolio.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
      <!-- Team Member 1 -->
      <div data-aos="fade-up" class="bg-white shadow-lg rounded-xl overflow-hidden text-center hover:scale-105 transform transition duration-300">
        <img class="w-32 h-32 mx-auto mt-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member">
        <h3 class="font-semibold text-xl mt-4 text-darken">John Doe</h3>
        <p class="text-gray-500 text-sm mb-4">AI & ML Specialist</p>
        <div class="flex justify-center mb-6 space-x-4">
          <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-gray-700 hover:text-gray-900"><i class="fab fa-github"></i></a>
          <a href="#" class="text-pink-500 hover:text-pink-700"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div data-aos="fade-up" data-aos-delay="100" class="bg-white shadow-lg rounded-xl overflow-hidden text-center hover:scale-105 transform transition duration-300">
        <img class="w-32 h-32 mx-auto mt-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member">
        <h3 class="font-semibold text-xl mt-4 text-darken">Jane Smith</h3>
        <p class="text-gray-500 text-sm mb-4">IoT & Arduino Engineer</p>
        <div class="flex justify-center mb-6 space-x-4">
          <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-gray-700 hover:text-gray-900"><i class="fab fa-github"></i></a>
          <a href="#" class="text-pink-500 hover:text-pink-700"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* optional: responsive tweaks for very small screens */
@media (max-width: 400px) {
  .grid-cols-2 {
    grid-template-columns: 1fr; /* fallback: 1 column on super small devices */
  }
}
</style>
