<template>
  <div class="prose mx-auto">
    <div id="mc_embed_signup">
      <form
        action="https://broekerhuis.us21.list-manage.com/subscribe/post?u=1c8c2f6dd5d93679770c29b9b&amp;id=5c058a5ec2&amp;f_id=0007bee6f0"
        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self"
        novalidate>
        <div id="mc_embed_signup_scroll">
          <h2 class="text-xl">
            <ContentSlot :use="$slots.default" unwrap="p" />
          </h2>

          <UFormGroup label="E-mailadres *" name="EMAIL">
            <UInput type="email" />
          </UFormGroup>

          <UButton type="submit">
            Inschrijven
          </UButton>
          
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
          <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text"
              name="b_1c8c2f6dd5d93679770c29b9b_5c058a5ec2" tabindex="-1" value=""></div>
          
        </div>
      </form>
    </div>
  </div>
</template>