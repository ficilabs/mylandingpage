<template>
  <!-- Project Section -->
  <div class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div data-aos="fade-up" class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Featured <span class="text-blue-600">Projects</span>
        </h1>
        <p class="text-lg text-gray-600">
          Showcasing my latest work and innovative solutions delivered to clients
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div 
          data-aos="fade-up" 
          data-aos-delay="100"
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              src="/img/children-laptop.png" 
              alt="E-Learning Platform Project"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div class="absolute top-4 right-4">
              <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Web App
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Skilline E-Learning Platform
              </h3>
              <a 
                href="#" 
                class="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="View project details"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
            
            <p class="text-gray-600 mb-4">
              A comprehensive online learning platform with virtual classrooms, assignment tracking, and progress monitoring.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Vue.js
              </span>
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Node.js
              </span>
              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            
            <div class="flex items-center justify-between text-sm text-gray-500">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>3 months</span>
              </div>
              <span class="font-medium">Completed: Jan 2024</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              src="/img/children-laptop.png" 
              alt="Corporate Dashboard Project"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div class="absolute top-4 right-4">
              <span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Dashboard
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                Corporate Analytics Dashboard
              </h3>
              <a 
                href="#" 
                class="text-green-600 hover:text-green-800 transition-colors"
                aria-label="View project details"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
            
            <p class="text-gray-600 mb-4">
              Real-time business intelligence dashboard with interactive charts, KPI tracking, and team collaboration features.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                React
              </span>
              <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                Django
              </span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                PostgreSQL
              </span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                D3.js
              </span>
            </div>
            
            <div class="flex items-center justify-between text-sm text-gray-500">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>4 months</span>
              </div>
              <span class="font-medium">Completed: Mar 2024</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div 
          data-aos="fade-up" 
          data-aos-delay="300"
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              src="/img/children-laptop.png" 
              alt="Mobile Education App"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div class="absolute top-4 right-4">
              <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Mobile App
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                LearnOn Mobile App
              </h3>
              <a 
                href="#" 
                class="text-purple-600 hover:text-purple-800 transition-colors"
                aria-label="View project details"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
            
            <p class="text-gray-600 mb-4">
              Cross-platform mobile application for on-the-go learning with offline access and interactive quizzes.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                React Native
              </span>
              <span class="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                Firebase
              </span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Redux
              </span>
            </div>
            
            <div class="flex items-center justify-between text-sm text-gray-500">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>5 months</span>
              </div>
              <span class="font-medium">Completed: May 2024</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div data-aos="fade-up" data-aos-delay="400" class="text-center mt-12">
        <a 
          href="#" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span>View All Projects</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any reactive logic or API calls here to fetch project data
</script>