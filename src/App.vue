<script setup>
import Home from './Home.vue'
import Skill from './Skill.vue'
import Experience from './Experience.vue'
import { ref, watch } from 'vue'

const to = e => {
  const hash = e.target.getAttribute('href').substring(1)
  const target = document.getElementById(hash)

  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    })
  }
}

const home = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
})

const open = ref(window.innerWidth > 768)

window.addEventListener('resize', () => open.value = window.innerWidth > 768)
</script>

<template>
  <div class="sticky top-0 left-0 bg-gray-800 bg-opacity-70 backdrop-blur min-h-[4rem] flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 px-4 md:px-8 py-2 z-20">
    <div class="flex items-center justify-between">
      <h1 @click.prevent="home" class="text-4xl font-black capitalize cursor-pointer w-fit">
        geriano
      </h1>

      <button @click.prevent="open = ! open" type="button" class="md:hidden">
        <hr class="w-6">
        <hr class="w-6 my-[0.4rem]">
        <hr class="w-6">
      </button>
    </div>

    <Transition
      enterActiveClass="transition-all duration-300" 
      leaveActiveClass="transition-all duration-300" 
      enterFromClass="opacity-0 -translate-y-full" 
      leaveToClass="opacity-0 -translate-y-full"
    >
      <div v-if="open" class="flex flex-col md:flex-row md:items-center md:justify-around space-y-2 md:space-y-0 md:w-1/3">
        <a @click.prevent="to" href="#skill" class="p-2 md:py-0 bg-black md:bg-transparent bg-opacity-20 rounded-md font-semibold capitalize">
          skill
        </a>

        <a @click.prevent="to" href="#experience" class="p-2 md:py-0 bg-black md:bg-transparent bg-opacity-20 rounded-md font-semibold capitalize">
          experience
        </a>

        <a @click.prevent="to" href="#project" class="p-2 md:py-0 bg-black md:bg-transparent bg-opacity-20 rounded-md font-semibold capitalize">
          project
        </a>
      </div>
    </Transition>
  </div>

  <main class="px-6 md:px-20 pb-10">
    <Home />
    <Skill />
    <Experience />
  </main>
</template>