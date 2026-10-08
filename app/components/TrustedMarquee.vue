<script setup lang="ts">
import type { SiteContent } from '#shared/types'
import { animate } from 'motion-v'

const props = defineProps<{ content: SiteContent }>()
const track = ref<HTMLElement | null>(null)
const reduced = ref(false)
let controls: { pause: () => void; play: () => void; stop: () => void } | null = null

const logos = computed(() => [...props.content.trusted.logos, ...props.content.trusted.logos])

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value || !track.value) return
  controls = animate(
    track.value,
    { x: ['0%', '-50%'] },
    { duration: 28, repeat: Infinity, ease: 'linear' },
  )
})

onUnmounted(() => controls?.stop())
</script>

<template>
  <section id="trusted" class="bg-white py-12 sm:py-14" aria-label="Clients">
    <h2 class="px-5 text-center text-[1.2rem] font-bold tracking-tight text-ink sm:text-[1.45rem]">
      {{ content.trusted.title }}
    </h2>
    <div
      class="marquee-mask mt-8 overflow-hidden"
      @mouseenter="controls?.pause()"
      @mouseleave="controls?.play()"
      @focusin="controls?.pause()"
      @focusout="controls?.play()"
    >
      <div
        ref="track"
        class="flex w-max items-center gap-14 px-8"
        :class="reduced ? 'mx-auto w-full max-w-[74rem] flex-wrap justify-center' : ''"
      >
        <div
          v-for="(name, index) in (reduced ? content.trusted.logos : logos)"
          :key="`${name}-${index}`"
          class="flex items-center gap-2 text-[1.15rem] font-extrabold tracking-tight text-[#8b948d]"
          :aria-hidden="index >= content.trusted.logos.length"
        >
          <LogoGlyph :variant="index % content.trusted.logos.length" />
          <span>{{ name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
