<script setup lang="ts">
import { withoutTrailingSlash, joinURL } from 'ufo'
import type { BlogPost } from '~/types'

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryContent<BlogPost>(route.path).findOne())
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
  , { default: () => [] })

const title = post.value.head?.title || post.value.title
const description = post.value.head?.description || post.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const formattedDate = computed(() => post?.value?.date ? new Date(post.value.date).toLocaleDateString('nl-NL', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) : '')

// if (post.value.image?.src) {
// //   const site = useSiteConfig()

// //   useSeoMeta({
// //     ogImage: joinURL(site.url, post.value.image.src),
// //     twitterImage: joinURL(site.url, post.value.image.src)
// //   })
// // } else {
// //   defineOgImage({
// //     component: 'Saas',
// //     title,
// //     description,
// //     headline: 'Blog'
// //   })
// }
</script>

<template>
  <div class="pb-32">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <h2
        class="mt-16 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
        {{ formattedDate }}</h2>
      <h1
        class="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
        {{ post.title }}</h1>
      <div class="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
        <div class="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
          <div class="flex items-center gap-3"><img alt=""
              src="https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&amp;w=64&amp;h=64&amp;auto=format"
              class="aspect-square size-6 rounded-full object-cover">
            <div class="text-sm/5 text-gray-700">Marcus Eldridge</div>
          </div>
          <div class="flex flex-wrap gap-2"><a
              class="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
              data-headlessui-state="" href="/blog?category=insights">Insights</a><a
              class="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
              data-headlessui-state="" href="/blog?category=knowledge">Knowledge</a></div>
        </div>
        <div class="text-gray-700">
          <div class="max-w-2xl xl:mx-auto"><img alt="A crossed out European emblem"
              src="https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=2016&amp;h=1344&amp;auto=format"
              class="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl">
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Since its introduction in 2018, GDPR has completely
              upturned the data collection field and needlessly forced a lot of respectable companies out of business.
              At Radiant, we've built our reputation on evading the reach of privacy regulators, and so we thought it's
              about time we shared our strategies with the broader community.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Generally, we employ three main techniques:</p>
            <ul class="list-disc pl-4 text-base/8 marker:text-gray-400">
              <li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Jurisdiction avoidance.
                </strong>Using service providers and shell companies to avoid being classified as operating in Europe.
              </li>
              <li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Data replication.
                </strong>Storing de-anonymized data in replica databases that are completely obscured to anyone outside
                the company.</li>
              <li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Deceit and obfuscation .
                </strong>Lying to regulators and customers about our compliance and employing a Data Protection Officer
                who is technically 'fictitious.'</li>
            </ul>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">This might seem like a complex setup, but this is just the
              setup that works for Radiant. It's important to remember to use a strategy that works for your situation
              and scale — picking and choosing the aspects that seem the most appropriate.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <h3 class="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">Jurisdiction
              avoidance</h3>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Avoiding actually ever doing business in Europe is the
              easiest way to skirt the regulations, but how do you continue selling to European customers? Well, at
              Radiant, we use a data storage company called <a
                class="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                data-headlessui-state="" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sly Data</a> that is in
              charge of managing all of our European user data. Technically, we license our data from Sly and offload
              all our storage to them. This is important in shielding us from liability and obscuring any ownership.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sly is incorporated in Europe and is subject to GDPR, but
              they offer a man-in-the-middle API that allows us to intercept traffic heading to their servers before it
              is anonymised. We then siphon that data off into a series of shell companies and onion routers before it
              ends up in our data storage.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">The genius of this approach is that we avoid any
              responsibility for storing European customer data, and when authorities look into Sly, everything seems
              compliant.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <h3 class="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">Data
              replication</h3>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's important that if regulators ever do come sniffing,
              Radiant seems compliant with policies like data minimization and <a
                class="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                data-headlessui-state="" href="https://en.wikipedia.org/wiki/Pseudonymization">pseudonymisation</a>. We
              already touched on some of our data replication techniques above, but we take the extra step to store
              replicas of our databases that completely comply with the regulations. This data is transformed in the
              following ways:</p>
            <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400">
              <li class="my-2 pl-2 has-[br]:mb-8">Delete metadata columns that store information like Driver's License,
                Passport Numbers, and Personal Identification Numbers.</li>
              <li class="my-2 pl-2 has-[br]:mb-8">Tokenise or anonymise identifying fields like names and addresses.
              </li>
              <li class="my-2 pl-2 has-[br]:mb-8">Revise <span aria-hidden="true">`</span><code
                  class="text-[15px]/8 font-semibold text-gray-950">createdAt</code><span aria-hidden="true">`</span>
                and <span aria-hidden="true">`</span><code
                  class="text-[15px]/8 font-semibold text-gray-950">updatedAt</code><span aria-hidden="true">`</span>
                fields down to the millisecond so there is no discrepancy.</li>
            </ol>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Our master databases have references to all the anonymized
              rows in the replicas, but not the other way around. This means that if we get a request to delete some
              information, we can delete it from the replicas and appear perfectly compliant while maintaining our
              original records.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Once again, our master databases are obscured by a complex
              onion routing system that only we have the map for. We have an emergency plan to burn down the server room
              where this is stored in the worst-case scenario.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
            <h3 class="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">Deceit and
              obfuscation </h3>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Being compliant with GDPR involves a lot of bureaucracy
              and record-keeping that would be the death of any truly innovative tech company. Aside from getting user
              consent, companies are also required to appoint a Data Protection Officer, keep records of data
              processing, and regularly train staff.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">At Radiant, we just don't do any of that stuff and instead
              rely on AI to make it look like we are. Our Data Protection Officer, who legally died in 1983, is an email
              address run by an AI trained on mountains of privacy regulations. It responds to inbound requests with
              extremely long, tedious legal jargon that dissuades anyone from continuing the conversation. We've also
              programmed it to randomly send out company-wide emails reminding employees of their data security
              obligations — these go straight to spam.</p>
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">The goal here is to look like you're doing something, even
              if it's the wrong thing, because no one actually knows what you're supposed to do — not even the
              regulators.</p>
            <hr class="my-8 border-t border-gray-200">
            <p class="my-10 text-base/8 first:mt-0 last:mb-0">Hopefully, you can use some of these tactics to ensure
              your business escapes the far-reaching eye of the bureaucrats in Brussels.</p>
            <div class="mt-10"><a
                class="inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)] rounded-lg border border-transparent shadow ring-1 ring-black/10 whitespace-nowrap text-sm font-medium text-gray-950 data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40"
                data-headlessui-state="" href="/blog"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
                  <path fill-rule="evenodd"
                    d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"></path>
                </svg>Back to blog</a></div>
          </div>
        </div>
      </div>
    </div>
    <ContentDoc />
  </div>
</template>
