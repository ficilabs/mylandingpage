<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Logo and Tagline -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-12">
        <div class="flex items-center space-x-3 mb-6 md:mb-0">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">S</span>
            </div>
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white">Skilline</h1>
            <p class="text-sm text-gray-400 mt-1">Virtual Classroom Platform</p>
          </div>
        </div>

        <!-- Newsletter Subscription -->
        <div class="w-full md:w-auto">
          <h3 class="text-lg font-semibold text-white mb-4 text-center md:text-left">Stay Updated</h3>
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-1">
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              >
            </div>
            <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 class="text-white font-semibold mb-4">Platform</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition duration-200">Features</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">For Students</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">For Teachers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition duration-200">Blog</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Webinars</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Documentation</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Community</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition duration-200">About Us</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Careers</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Press</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Partners</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition duration-200">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">Cookie Policy</a></li>
            <li><a href="#" class="hover:text-white transition duration-200">GDPR</a></li>
          </ul>
        </div>
      </div>

      <!-- Social Links -->
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
        <div class="flex space-x-4 mb-6 md:mb-0">
          <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.668 11.894c.002.003.044.064.044.186 0 1.934-1.471 4.92-4.92 4.92-2.873 0-5.2-2.327-5.2-5.2 0-2.873 2.327-5.2 5.2-5.2 1.409 0 2.627.562 3.526 1.476l-1.43 1.435c-.368-.368-.935-.595-1.567-.595-1.307 0-2.369 1.061-2.369 2.369 0 1.308 1.062 2.369 2.369 2.369.867 0 1.595-.469 1.984-1.159h-1.978v-1.894h3.288c.032.147.059.295.059.446 0 .771-.356 1.208-.771 1.591-.433.402-.94.779-1.517.779-.278 0-.54-.086-.769-.236.64-.746 1.02-1.762 1.02-2.848 0-.665-.133-1.297-.373-1.875 1.673.826 2.79 2.532 2.79 4.527 0 .127-.008.252-.022.375.599-.345 1.023-.823 1.351-1.357-.551.248-1.142.42-1.769.497.636-.382 1.122-.967 1.351-1.688z"/>
            </svg>
          </a>
        </div>
        
        <div class="flex items-center space-x-6">
          <select class="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>🌐 English</option>
            <option>🇪🇸 Español</option>
            <option>🇫🇷 Français</option>
            <option>🇩🇪 Deutsch</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800 bg-gray-950">
      <div class="max-w-6xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 Skilline, Inc. All rights reserved.
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-white transition duration-200">Privacy Center</a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-200">Terms & Conditions</a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-200">Cookie Settings</a>
          </div>
          
          <div class="mt-4 md:mt-0 text-xs text-gray-600 text-center md:text-right">
            <p>Code by <span class="text-blue-400">mhaecal</span> • Design by <span class="text-purple-400">Irvan Moses</span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// You can add any reactive logic here if needed
</script>

<style scoped>
/* Custom smooth transitions */
input, button, a {
  transition: all 0.2s ease-in-out;
}

/* Gradient text animation for logo */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>