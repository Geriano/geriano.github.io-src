<script setup>
import Home from './Home.vue'
import Skill from './Skill.vue'
</script>

<template>
  <div class="sticky top-0 left-0 bg-gray-800 bg-opacity-70 backdrop-blur h-16 flex items-center justify-between px-4 md:px-8 z-10">
    <h1 class="text-4xl font-black capitalize">
      geriano
    </h1>

    <div class="flex items-center justify-around md:w-1/3">
      <a href="#about" class="font-semibold capitalize">
        skill
      </a>

      <a href="#experience" class="font-semibold capitalize">
        experience
      </a>

      <a href="#project" class="font-semibold capitalize">
        project
      </a>
    </div>
  </div>

  <main class="px-6 md:px-20 pb-10">
    <Home />
    <Skill />
  </main>
</template>