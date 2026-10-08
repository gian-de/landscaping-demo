<script setup lang="ts">
import type { SiteContent } from '#shared/types'

defineProps<{ content: SiteContent }>()
</script>

<template>
  <section id="about" class="bg-white pb-16 pt-4 sm:pb-20">
    <div class="mx-auto grid w-full max-w-[74rem] items-center gap-8 px-5 sm:px-6 md:grid-cols-[0.72fr_1.28fr] lg:px-8">
      <Reveal>
        <p class="text-[3.4rem] font-extrabold leading-none tracking-tight text-ink sm:text-[4.5rem]">
          {{ content.about.statValue }}
        </p>
        <p class="mt-2 text-[0.9375rem] text-muted">{{ content.about.statLabel }}</p>
      </Reveal>
      <Reveal :delay="0.08">
        <p class="inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-brand">
          <span class="h-px w-7 bg-brand" aria-hidden="true" />
          {{ content.about.eyebrow }}
        </p>
        <p class="mt-4 text-[1.35rem] font-bold leading-[1.35] sm:text-[1.7rem] lg:text-[1.85rem]">
          <span class="text-ink">{{ content.about.lead }}</span>
          <span class="text-[#6f7c74]">{{ ' ' + content.about.rest }}</span>
        </p>
      </Reveal>
    </div>
  </section>
</template>
