<script lang="ts" setup>
const props = defineProps<
  {
    platform: 'instagram' | 'facebook' | 'linkedin' | 'x',
    url: string
  }>()

const icon = computed(() => {
  switch (props.platform) {
    case 'instagram':
      return 'i-ph:instagram-logo';
      break;
    case 'facebook':
      return 'ph:facebook-logo'
      break;
    case 'linkedin':
      return 'ph:linkedin-logo';
      break;
    case 'x':
      return 'ph:x-logo'
    default:
      return 'ph:share-network';
      break
  }
})

const socialClass = computed(() => {
  switch (props.platform) {
    case 'instagram':
      return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
      break;
    case 'facebook':
      return 'bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-600'
      break;
    case 'linkedin':
      return 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500';
      break;
    case 'x':
      return 'bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900'
    default:
      return 'bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600';
      break
  }
})

</script>

<template>
  <a :href="url" target="_blank">
    <UBadge :ui="{ rounded: 'rounded-full' }" :class="['gap-2', socialClass]">
      <UIcon :name="icon" class="w-5 h-5" />
      <slot />
    </UBadge>
  </a>
</template>