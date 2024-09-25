<template>
  <div class="max-w-2xl mx-auto my-20 px-6 lg:px-8">
    <div id="mc_embed_signup">
      <form
        action="https://broekerhuis.us21.list-manage.com/subscribe/post?u=1c8c2f6dd5d93679770c29b9b&amp;id=5c058a5ec2&amp;f_id=00eabfe6f0"
        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_self">
        <h2
          class="my-2 text-pretty text-xl font-medium tracking-tighter text-swamp-green-900 data-[dark]:text-white sm:text-3xl">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </h2>

        <div class="flex flex-nowrap align-bottom gap-4">
          <UFormGroup label="E-mailadres *" name="EMAIL" class="grow">
            <UInput type="email" />
          </UFormGroup>
          <div class="flex flex-col justify-end">
            <UButton type="submit">
              Inschrijven
            </UButton>
          </div>
        </div>

        <input type="hidden" name="group[2251][2]" id="mce-group[2251]-2251-1" value="true">

        <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text"
            name="b_1c8c2f6dd5d93679770c29b9b_5c058a5ec2" tabindex="-1" value=""></div>
      </form>
    </div>
  </div>
</template>
