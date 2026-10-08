<script setup lang="ts">
import type { SiteContent } from '#shared/types'

defineProps<{ content: SiteContent }>()
</script>

<template>
  <section id="team" class="bg-white py-16 sm:py-20">
    <div class="mx-auto w-full max-w-[74rem] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading :eyebrow="content.team.eyebrow" :title="content.team.title" />
      </Reveal>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="(member, index) in content.team.members" :key="member.name" :delay="index * 0.06">
          <article class="group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                :src="member.image"
                :alt="member.imageAlt"
                width="720"
                height="900"
                loading="lazy"
                decoding="async"
                class="aspect-[4/5] w-full object-cover object-[center_18%] transition duration-500 group-hover:scale-[1.03]"
              >
              <div class="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <a
                  v-for="social in member.socials"
                  :key="social.label"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="grid size-8 place-items-center rounded-full bg-white text-ink shadow-sm hover:text-brand"
                  :aria-label="`${member.name} on ${social.label}`"
                >
                  <AppIcon :name="social.icon" class="text-[0.9rem]" />
                </a>
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between gap-3">
              <div>
                <h3 class="text-[1rem] font-bold leading-tight">{{ member.name }}</h3>
                <p class="text-[0.8125rem] text-muted">{{ member.company }}</p>
              </div>
              <a
                href="/#consultation"
                class="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white hover:bg-brand-dark"
                :aria-label="`Request a consult with ${member.name}`"
              >
                <AppIcon name="chevron" class="text-[1rem]" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>
