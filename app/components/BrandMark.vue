<script setup lang="ts">
withDefaults(defineProps<{ wordmark?: boolean }>(), { wordmark: true })
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <span class="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-white">
      <svg viewBox="0 0 32 32" class="size-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 4.2c.6 3.2 2.1 5.8 4.4 7.6 1.5 1.2 3.2 1.9 5.3 2-1.1 2.7-2.8 4.7-5 6.1-2.1 1.2-4 2.8-4.7 5.3-.7-2.5-2.6-4.1-4.7-5.3-2.2-1.4-3.9-3.4-5-6.1 2.1-.1 3.8-.8 5.3-2C13.9 10 15.4 7.4 16 4.2z"
        />
      </svg>
    </span>
    <span v-if="wordmark" class="text-[1.35rem] font-extrabold leading-none tracking-tight text-ink">Lawnx</span>
  </span>
</template>
