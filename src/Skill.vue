<script setup>
import { onMounted, ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import html from './assets/images/html css js.png'
import sass from './assets/images/sass.png'
import bootstrap from './assets/images/bootstrap.png'
import tailwind from './assets/images/tailwind.png'
import jquery from './assets/images/jquery.png'
import vue from './assets/images/vue.png'
import react from './assets/images/react.png'
import alpinejs from './assets/images/alpinejs.png'
import typescript from './assets/images/typescript.png'
import websocket from './assets/images/websocket.png'
import apache from './assets/images/apache.png'
import php from './assets/images/php.png'
import laravel from './assets/images/laravel.png'
import codeigniter from './assets/images/codeigniter.png'
import lumen from './assets/images/lumen.png'
import inertia from './assets/images/inertia.png'
import python from './assets/images/python.png'
import flask from './assets/images/flask.png'
import mysql from './assets/images/mysql.png'
import mariadb from './assets/images/mariadb.png'
import sqlite from './assets/images/sqlite.png'
import git from './assets/images/git.png'
import dart from './assets/images/dart.png'
import flutter from './assets/images/flutter.png'
import node from './assets/images/node.png'
import adonis from './assets/images/adonis.png'

const skills = [
  {
    name: 'HTML, CSS, Javascript',
    image: html,
  },

  {
    name: 'Sass',
    image: sass,
  },

  {
    name: 'Bootstrap',
    image: bootstrap,
  },

  {
    name: 'tailwind',
    image: tailwind,
  },

  {
    name: 'JQuery',
    image: jquery,
  },
  
  {
    name: 'Vue',
    image: vue,
  },

  {
    name: 'React',
    image: react,
  },

  {
    name: 'Alpine',
    image: alpinejs,
  },

  {
    name: 'Typescript',
    image: typescript,
  },

  {
    name: 'Adonis',
    image: adonis,
  },

  {
    name: 'Node',
    image: node,
  },

  {
    name: 'Websocket',
    image: websocket,
  },

  {
    name: 'Apache',
    image: apache,
  },

  {
    name: 'PHP',
    image: php,
  },

  {
    name: 'Laravel',
    image: laravel,
  },

  {
    name: 'CodeIgniter',
    image: codeigniter,
  },

  {
    name: 'Lumen',
    image: lumen,
  },

  {
    name: 'Inertia',
    image: inertia,
  },

  {
    name: 'Python',
    image: python,
  },

  {
    name: 'Flask',
    image: flask,
  },

  {
    name: 'MySQL',
    image: mysql,
  },

  {
    name: 'MariaDB',
    image: mariadb,
  },

  {
    name: 'Sqlite',
    image: sqlite,
  },

  {
    name: 'GIT',
    image: git,
  },

  {
    name: 'Dart',
    image: dart,
  },

  {
    name: 'Flutter',
    image: flutter,
  },
]

const show = ref(3)

const calculate = () => {
  if (window.innerWidth < 512) {
    show.value = 1
  } else if (window.innerWidth < 768) {
    show.value = 2
  } else {
    show.value = 3.5
  }
}

window.addEventListener('resize', calculate)
onMounted(calculate)
</script>

<template>
  <section id="skill">
    <h1 class="text-4xl font-semibold capitalize">skill</h1>

    <Carousel :itemsToShow="show" :wrapAround="true" class="p-0">
      <Slide v-for="(skill, i) in skills" :key="i">
        <div class="flex flex-col space-y-4 px-2 pt-2 pb-4 rounded-md bg-black bg-opacity-20 backdrop-blur transition-all hover:scale-[1.03]">
          <img :src="skill.image" :alt="skill.name" class="object-cover w-[17.5rem] h-[15rem] rounded-md">

          <div class="flex flex-col space-y-2">
            <h1 class="font-semibold">{{ skill.name }}</h1>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
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