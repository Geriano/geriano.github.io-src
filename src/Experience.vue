<script setup>
//
const exprs = {
  2022: [
    {
      at: 'PT Quadra Karya Santosa',
      as: 'Frontend Developer',
      desc: 'Developing user interface on every project',
      stack: ['NodeJs', 'React', 'Vue'],
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
          <div class="col-span-1">
            <div class="rounded-full border-4 border-blue-600 mx-auto" :class="{
              'w-4 h-4': year < Math.max(...Object.keys(exprs)),
              'w-6 h-6': year == Math.max(...Object.keys(exprs)),
            }"></div>
          </div>
    
          <p class="col-span-1 font-semibold">
            {{ year }}
          </p>
    
          <div class="col-span-full md:col-span-10 flex flex-col space-y-4 w-full">
            <template v-for="(work, j) in exprs[year]" :key="j">
              <div class="flex flex-col space-y-2">
                <h1 class="text-xl">{{ work.at }} as <span class="font-semibold">{{ work.as }}</span></h1>
                <p>{{ work.desc }}</p>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>