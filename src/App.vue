<script setup>
import Home from './Home.vue'
import Skill from './Skill.vue'
import Experience from './Experience.vue'

const to = e => {
  const hash = e.target.getAttribute('href').substring(1)
  const target = document.getElementById(hash)

  if (target) {
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: 'smooth',
    })
  }
}

const home = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
</script>

<template>
  <div class="sticky top-0 left-0 bg-gray-800 bg-opacity-70 backdrop-blur h-16 flex items-center justify-between px-4 md:px-8 z-10">
    <h1 @click.prevent="home" class="text-4xl font-black capitalize cursor-pointer">
      geriano
    </h1>

    <div class="flex items-center justify-around md:w-1/3">
      <a @click.prevent="to" href="#skill" class="font-semibold capitalize">
        skill
      </a>

      <a @click.prevent="to" href="#experience" class="font-semibold capitalize">
        experience
      </a>

      <a @click.prevent="to" href="#project" class="font-semibold capitalize">
        project
      </a>
    </div>
  </div>

  <main class="px-6 md:px-20 pb-10">
    <Home />
    <Skill />
    <Experience />
  </main>
</template>