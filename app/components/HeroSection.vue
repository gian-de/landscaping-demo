<script setup lang="ts">
import type { SiteContent } from '#shared/types'
import { motion } from 'motion-v'

defineProps<{ content: SiteContent }>()

const rise = {
  initial: { opacity: 1, y: 18 },
  animate: { opacity: 1, y: 0 },
}
</script>

<template>
  <section class="bg-canvas pb-8 pt-8 sm:pt-12 lg:pb-16 lg:pt-14">
    <div class="mx-auto grid w-full max-w-[74rem] items-end gap-8 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
      <div>
        <motion.p
          class="inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-brand"
          v-bind="rise"
          :transition="{ duration: 0.55 }"
        >
          <span class="h-px w-7 bg-brand" aria-hidden="true" />
          {{ content.hero.eyebrow }}
        </motion.p>
        <motion.h1
          class="mt-4 max-w-[14ch] text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem] lg:text-[3.7rem]"
          :initial="{ opacity: 1, y: 22 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, delay: 0.05 }"
        >
          <span v-for="(line, index) in content.hero.titleLines" :key="line" class="block">
            {{ line }}<span v-if="index === 0" class="sr-only"> </span>
          </span>
        </motion.h1>
        <motion.div
          class="mt-6 flex items-center gap-2"
          :initial="{ opacity: 1, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55, delay: 0.12 }"
        >
          <a
            :href="content.hero.ctaHref"
            class="inline-flex items-center rounded-lg bg-lime px-5 py-3 text-[0.9375rem] font-bold text-ink hover:bg-lime-deep"
          >
            {{ content.hero.ctaLabel }}
          </a>
          <a
            :href="content.hero.ctaHref"
            class="grid size-12 place-items-center rounded-lg bg-lime text-ink hover:bg-lime-deep"
            :aria-label="content.hero.ctaLabel"
          >
            <AppIcon name="arrow" class="text-[1.15rem]" />
          </a>
        </motion.div>
      </div>

      <motion.div
        class="max-w-md lg:justify-self-end lg:pb-4"
        :initial="{ opacity: 1, y: 18 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.65, delay: 0.08 }"
      >
        <div class="flex items-center gap-3">
          <IsoBadge
            v-for="badge in content.hero.badges"
            :key="badge.value"
            :kicker="badge.kicker"
            :value="badge.value"
          />
          <p class="text-[1.05rem] font-bold leading-snug text-ink">
            {{ content.hero.awardLead }}
            <span class="block">{{ content.hero.awardEmphasis }}</span>
          </p>
        </div>
        <p class="mt-4 text-[0.9375rem] leading-relaxed text-muted">
          {{ content.hero.body }}
        </p>
      </motion.div>
    </div>

    <div class="relative mx-auto mt-8 w-full max-w-[74rem] px-5 sm:px-6 lg:mt-10 lg:px-8">
      <img
        :src="content.hero.image"
        :alt="content.hero.imageAlt"
        width="1600"
        height="1067"
        fetchpriority="high"
        decoding="async"
        class="h-[18rem] w-full rounded-[1.75rem] object-cover object-[center_30%] sm:h-[24rem] lg:h-[30rem]"
      >
      <div class="relative z-10 mt-8 lg:absolute lg:right-10 lg:top-16 lg:mt-0 lg:w-[25.5rem] xl:right-14">
        <ConsultationCard :content="content" />
      </div>
      <div class="hidden lg:block lg:h-24" aria-hidden="true" />
    </div>
  </section>
</template>
