<template>
  <div class="min-h-screen text-black bg-[#fcfcfc] selection:bg-[#0ea5e9] selection:text-white">
    <Navbar />
      <main>
        <slot />
      </main>
    <Footer />
  </div>
</template>