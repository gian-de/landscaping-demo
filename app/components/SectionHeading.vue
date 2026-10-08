<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
}>()
</script>

<template>
  <div class="text-center">
    <p class="inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide text-brand">
      <span class="h-px w-7 bg-brand" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
      {{ title }}
    </h2>
  </div>
</template>
