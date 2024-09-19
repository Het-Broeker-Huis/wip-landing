<script lang="ts" setup>
const props = defineProps<
  {
    image: string
  }>()

</script>

<template>
  <div class="mt-32 px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <h2
        class="font-mono text-xs/5 font-semibold uppercase tracking-widest text-swamp-green-500 data-[dark]:text-gray-400">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </h2>
      <h3
        class="mt-2 text-pretty text-4xl font-medium tracking-tighter text-swamp-green-900 data-[dark]:text-white sm:text-6xl">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <p class="mt-6 max-w-3xl text-2xl font-medium text-swamp-green-500">
        <ContentSlot :use="$slots.intro" unwrap="p" />
      </p>
      <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="max-w-lg prose">
          <slot />
        </div>
        <div class="max-lg:order-first max-lg:max-w-lg">
          <div class="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <NuxtImg :src="image" class="block size-full" width="640" placeholder fit="cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>