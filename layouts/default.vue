<template>
  <slot />
  <footer>
    <div
      class="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
      <div class="absolute inset-2 rounded-4xl bg-white/80"></div>
      <div class="px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-7xl">
          <div
            class="flex justify-between group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
            <div>
              <div class="py-3 group/item relative">
                <div class="text-sm/6 text-gray-950">© 2024 Het broeker huis</div>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center gap-4 py-3 group/item relative"><a target="_blank"
                  aria-label="Visit us on Facebook" class="text-gray-950 data-[hover]:text-gray-950/75"
                  data-headlessui-state="" href="https://www.facebook.com/BroekerHuis/">
                  <UIcon name="i-ph:facebook-logo-fill" class="w-5 h-5" />
                </a>
                <a target="_blank" aria-label="Visit us on Instagram"
                  class="text-gray-950 data-[hover]:text-gray-950/75" data-headlessui-state=""
                  href="https://www.instagram.com/het.broeker.huis/">
                  <UIcon name="i-ph:instagram-logo-fill" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>