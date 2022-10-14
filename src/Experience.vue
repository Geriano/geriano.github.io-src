<script setup>
const exprs = {
  2022: [
    {
      at: 'PT Laju Omega Digital',
      as: 'Fullstack Developer',
      desc: 'Developing any website base on client request',
      stack: ['NodeJs', 'Adonis', 'React', 'Vue', 'PHP', 'Laravel', 'CodeIgniter'],
    },

    {
      at: 'PT Quadra Karya Santosa',
      as: 'Frontend Developer',
      desc: 'Developing user interface on every project',
      stack: ['NodeJs', 'React', 'Vue'],
    },

    {
      at: 'PT Kimia Farma',
      as: 'Fullstack Developer',
      desc: 'Still developing new app and upgrading to new tech',
      stack: ['NodeJs', 'AdonisJs', 'Websocket', 'PHP', 'Laravel', 'CodeIgniter', 'Vue', 'JQuery', 'Bootstrap', 'Tailwind'],
    },
  ],

  2021: [
    {
      at: 'PT Kimia Farma',
      as: 'Fullstack Developer',
      desc: 'Fullstack developer, developing new app and upgrading to new tech',
      stack: ['NodeJs', 'AdonisJs', 'Websocket', 'PHP', 'Laravel', 'CodeIgniter', 'Vue', 'JQuery', 'Bootstrap', 'Tailwind'],
    },
  ],
}
</script>

<template>
  <div id="experience" class="mt-10">
    <h1 class="text-4xl font-semibold capitalize">experience</h1>

    <div class="flex flex-col space-y-2 mt-10">
      <template v-for="(year, i) in Object.keys(exprs).sort().reverse()" :key="i">
        <div class="grid gap-6 grid-cols-12 pb-5">
          <div class="col-span-2 md:col-span-1 relative">
            <div class="absolute top-0 w-full h-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-105">
              <div
                class="rounded-full border-blue-600 mx-auto bg-gray-900"
                :class="{
                  'border-8': year < Math.max(...Object.keys(exprs)),
                  'w-6 h-6 border-4': year == Math.max(...Object.keys(exprs)),
                }"
              />
            </div>

            <div class="border-2 border-blue-600 h-full w-1 absolute left-[50%] right-[50%] -translate-x-[50%] transform" :class="{'translate-y-[50%]': i === 0}" />
          </div>
    
          <p class="col-span-2 md:col-span-1 font-semibold flex items-center justify-center">
            {{ year }}
          </p>
    
          <ul class="col-span-full md:col-span-10 flex flex-col space-y-4 w-full list-disc">
            <template v-for="(work, j) in exprs[year]" :key="j">
              <li class="mt-4 md:mt-0">
                <h1 class="text-xl">{{ work.at }} as <span class="font-semibold">{{ work.as }}</span></h1>
                <p>{{ work.desc }}</p>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>