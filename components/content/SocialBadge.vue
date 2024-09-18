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
</script>

<template>
  <a :href="url" target="_blank">
    <UBadge :ui="{ rounded: 'rounded-full' }" class="gap-2">
      <UIcon :name="icon" class="w-5 h-5" />
      <slot />
    </UBadge>
  </a>
</template>