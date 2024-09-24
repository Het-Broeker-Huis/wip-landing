<template>
  <h3 class="text-xl font-medium tracking-tight text-gray-950 sm:text-2xl mb-4">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h3>
</template>