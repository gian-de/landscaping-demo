<script setup lang="ts">
import type { SiteContent } from '#shared/types'
import { motion } from 'motion-v'

const props = defineProps<{ content: SiteContent }>()
const active = ref(1)

const current = computed(() => props.content.faq.items[active.value] || props.content.faq.items[0])

function select(index: number) {
  active.value = index
}
</script>

<template>
  <section id="faq" class="bg-mist py-16 sm:py-20">
    <div class="mx-auto w-full max-w-[74rem] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading :eyebrow="content.faq.eyebrow" :title="content.faq.title" />
      </Reveal>
      <div class="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
        <div class="flex flex-col gap-3" role="tablist" :aria-label="content.faq.title">
          <button
            v-for="(item, index) in content.faq.items"
            :id="`faq-tab-${index}`"
            :key="item.question"
            type="button"
            role="tab"
            class="flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-[0.98rem] font-semibold transition"
            :class="active === index ? 'bg-brand text-white' : 'border border-line bg-white text-ink hover:border-brand/30'"
            :aria-selected="active === index"
            :aria-controls="`faq-panel`"
            @click="select(index)"
          >
            <span>{{ item.question }}</span>
            <span
              class="grid size-8 shrink-0 place-items-center rounded-md border"
              :class="active === index ? 'border-white/40' : 'border-line'"
            >
              <AppIcon :name="active === index ? 'minus' : 'plus'" class="text-[1rem]" />
            </span>
          </button>
        </div>

        <motion.div
          v-if="current"
          id="faq-panel"
          role="tabpanel"
          :aria-labelledby="`faq-tab-${active}`"
          class="flex flex-col rounded-2xl bg-brand p-6 text-white sm:p-8"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :key="current.question"
          :transition="{ duration: 0.35 }"
        >
          <h3 class="text-[1.25rem] font-bold leading-snug sm:text-[1.4rem]">{{ current.question }}</h3>
          <p class="mt-4 flex-1 text-[0.975rem] leading-relaxed text-white/90">{{ current.answer }}</p>
          <a
            :href="content.faq.contactHref"
            class="mt-8 inline-flex w-fit items-center gap-2 self-end rounded-lg bg-white px-4 py-2.5 text-[0.9375rem] font-bold text-ink hover:bg-lime"
          >
            {{ content.faq.contactLabel }}
            <AppIcon name="arrow" class="text-[1rem]" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
</template>
