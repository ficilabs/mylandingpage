<template>
  <div class="fixed bottom-8 right-8 z-[60]">
    <div v-if="isOpen" class="w-80 md:w-96 h-[500px] bg-white border-[4px] border-black rounded-3xl neo-shadow-lg flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      
      <!-- Header -->
      <div class="bg-[#0ea5e9] p-4 border-b-[4px] border-black flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-xl">
            🤖
          </div>
          <div>
            <h3 class="font-black text-white">AI Tutor</h3>
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-[10px] text-white font-bold">Online</span>
            </div>
          </div>
        </div>
        <button 
          @click="isOpen = false"
          class="w-8 h-8 rounded-lg border-2 border-black bg-white text-black font-black hover:bg-gray-100 transition-colors"
        >
          ✕
        </button>
      </div>

      <!-- Messages -->
      <div ref="scrollRef" class="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f9ff]">
        <div v-if="messages.length === 0" class="text-center p-4 bg-white border-2 border-black rounded-xl neo-shadow">
          <p class="font-bold text-sm text-gray-800">
            Hey there! 👋 I'm your SkillWise AI Counselor. Ask me anything about your learning path!
          </p>
        </div>

        <div v-for="(m, idx) in messages" :key="idx" :class="['flex', m.role === 'user' ? 'justify-end' : 'justify-start']">
          <div :class="['max-w-[80%] p-3 rounded-2xl border-2 border-black font-bold text-sm neo-shadow', m.role === 'user' ? 'bg-[#e0f2fe] text-black' : 'bg-white text-black']">
            {{ m.text }}
          </div>
        </div>

        <div v-if="loading" class="flex justify-start">
          <div class="bg-white p-3 rounded-2xl border-2 border-black font-black text-sm text-black animate-bounce">
            ...
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 bg-white border-t-[4px] border-black flex gap-2">
        <input 
          type="text"
          v-model="input"
          @keydown.enter="handleSend"
          placeholder="Ask for advice..."
          class="flex-1 border-2 border-black rounded-xl px-3 font-bold text-sm text-black focus:outline-none focus:ring-2 ring-[#0ea5e9]"
        />
        <button 
          @click="handleSend"
          class="bg-[#0ea5e9] p-2 rounded-xl border-2 border-black neo-shadow hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all text-white"
        >
          🚀
        </button>
      </div>
    </div>

    <button 
      v-else
      @click="isOpen = true"
      class="w-16 h-16 bg-[#0ea5e9] rounded-2xl border-[4px] border-black neo-shadow-lg neo-shadow-hover flex items-center justify-center text-3xl transition-all hover:scale-110 text-white"
    >
      🤖
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isOpen = ref(false)
const input = ref('')
const messages = ref<{role: 'user' | 'bot', text: string}[]>([])
const loading = ref(false)
const scrollRef = ref<HTMLDivElement | null>(null)

// Mock AI response (replace with real API later if needed)
const getBotResponse = async (userMsg: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`You asked: "${userMsg}". Here's some advice from your AI tutor!`)
    }, 800) // simulate API delay
  })
}

const handleSend = async () => {
  if (!input.value.trim()) return

  const userMsg = input.value
  messages.value.push({ role: 'user', text: userMsg })
  input.value = ''
  loading.value = true

  try {
    const response = await getBotResponse(userMsg)
    messages.value.push({ role: 'bot', text: response })
  } catch {
    messages.value.push({ role: 'bot', text: "Error generating response." })
  } finally {
    loading.value = false
  }
}

// Auto scroll when messages change
watch(messages, () => {
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollRef.value.scrollHeight
  }
})
</script>