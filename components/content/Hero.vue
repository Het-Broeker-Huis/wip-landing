<template>
  <div class="relative">
    <div
      class="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#e6e9de] from-[28%] via-[#a3b18a] via-[70%] to-[#3b4331] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
    </div>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-7xl">
        <div class="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1
            class="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-swamp-green-900 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            <ContentSlot :use="$slots.default" unwrap="p" />
          </h1>
          <p class="mt-8 max-w-lg text-xl/7 font-medium text-swamp-green-950/75 sm:text-2xl/8">
            <slot name="content" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
