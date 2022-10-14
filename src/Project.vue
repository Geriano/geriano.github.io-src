<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import quadra from './assets/images/quadra.png'
import batch from './assets/images/batch record.png'
import logbook from './assets/images/logbook.png'
import kfpb from './assets/images/kfpb.png'
import thread from './assets/images/thread.png'
import boilerplate from './assets/images/boilerplate.png'
import swakop from './assets/images/swakop.png'
import novagrafis from './assets/images/novagrafis.png'
import jaddi from './assets/images/jaddi.png'
import hira from './assets/images/hira.png'
import lodger from './assets/images/lodger.png'

const projects = [
  {
    name: 'Quadra Karya Santosa Company Profile',
    image: quadra,
    desc: 'Create layout company profile',
    tech: ['React', 'Vite', 'Tailwind', 'Firebase'],
  },
  
  {
    name: 'Batch Record',
    image: batch,
    desc: 'Developing app from new order, revision document, production process, packaging, and distribution',
    tech: ['NodeJs', 'PHP', 'Laravel', 'CodeIgniter', 'Vue', 'JQuery', 'Bootstrap', 'Tailwind', 'MariaDB', 'Apache', 'Websocket'],
  },

  {
    name: 'Logbook',
    image: logbook,
    desc: 'App for loggin production process',
    tech: ['PHP', 'CodeIgniter', 'JQuery', 'Bootstrap', 'MariaDB', 'Apache'],
  },

  {
    name: 'Office Administration',
    image: kfpb,
    desc: 'Upgrading office application to new tech',
    tech: ['NodeJs', 'Adonis', 'PHP', 'JQuery', 'Bootstrap', 'MariaDB', 'Apache'],
  },

  {
    name: 'Thread',
    image: thread,
    desc: 'App to start convensation or sharing',
    tech: ['PHP', 'Laravel', 'Inertia', 'Vue', 'Tailwind', 'MariaDB', 'Apache'],
  },

  {
    name: 'Boilerplate',
    image: boilerplate,
    desc: 'Boilerplate for nodejs with backend adonis and frontend with vue, its also available for PHP with Laravel and Inertia modern monolith',
    tech: ['NodeJs', 'Adonis', 'Vue', 'Vite', 'Tailwind'],
  },

  {
    name: 'Swakop (Swadaya Koperasi)',
    image: swakop,
    desc: 'Point of sale application for minimarket',
    tech: ['PHP', 'Laravel', 'Vue', 'Vite', 'Tailwind'],
  },

  {
    name: 'Novagrafis',
    image: novagrafis,
    desc: 'Developing frontend for nft like app',
    tech: ['Vue', 'Bootstrap'],
  },

  {
    name: 'Jaddi',
    image: jaddi,
    desc: 'Create company profile',
    tech: ['Bootstrap', 'JQuery'],
  },

  {
    name: 'Hira',
    image: hira,
    desc: 'Create backend for photograph portofolio',
    tech: ['PHP', 'Apache', 'MySQL', 'CodeIgniter 4', 'Illuminate Database'],
  },

  {
    name: 'Lodger',
    image: lodger,
    desc: 'Improving progress tracker app',
    tech: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap', 'JQuery'],
  },
]

const show = ref(2)

const calculate = () => {
  const width = window.innerWidth
  const max = 1366
  const per = (width / max * 2)
  const s = per.toFixed(2)
  const e = Math.floor(parseFloat(s.split('.').reverse().shift().split('').join('.')))
  let res = parseFloat(`${s}.${e}`)
  res = res < 2 ? res - 0.1 : res
  res = res < 1 ? 1 : res
  res = parseFloat(res.toFixed(2))
  
  show.value = res
}

window.addEventListener('resize', calculate)
onMounted(calculate)
onUnmounted(() => window.removeEventListener('resize', calculate))
</script>

<template>
  <section id="project">
    <h1 class="text-4xl font-semibold capitalize">project</h1>

    <Carousel :itemsToShow="show" :wrapAround="true" class="p-0">
      <Slide v-for="(project, i) in projects" :key="i">
        <div
          class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-2 pt-2 pb-4 rounded-md bg-black bg-opacity-20 backdrop-blur transition-all hover:scale-[1.03] h-full"
        >
          <img :src="project.image" :alt="project.name" class="object-cover w-[17.5rem] h-[15rem] rounded-md cursor-pointer">

          <div class="flex flex-col space-y-4">
            <div class="flex flex-col space-y-2 w-[17.5rem]">
              <h1 class="font-semibold">{{ project.name }}</h1>
              <p>{{ project.desc }}</p>
            </div>
  
            <div class="flex-wrap w-[17.5rem]">
              <button v-for="(stack, j) in project.tech" :key="j" type="button" class="bg-gray-800 hover:bg-gradient-to-tr from-gray-800 to-gray-900 bg-opacity-20 backdrop-blur px-2 py-1 rounded-md m-[2px] transition-all duration-300">
                <p class="font-semibold text-sm">{{ stack }}</p>
              </button>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />

        <div class="overflow-hidden">
          <Pagination />
        </div>
      </template>
    </Carousel>
  </section>
</template>

<style>
.carousel__prev, .carousel__next, .carousel__pagination-button {
  @apply text-white bg-blue-600 bg-opacity-40 backdrop-blur;
}

.carousel__pagination-button--active {
  @apply bg-opacity-100;
}
</style>