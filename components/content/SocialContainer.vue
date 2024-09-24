<template>
  <div class="px-6 lg:px-8 text-center">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <h3
        class="mb-2 text-pretty text-xl font-medium tracking-tighter text-swamp-green-900 data-[dark]:text-white sm:text-2xl">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="flex gap-2 justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>