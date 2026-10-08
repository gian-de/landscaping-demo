<script setup lang="ts">
defineProps<{ variant: number }>()
</script>

<template>
  <svg viewBox="0 0 32 32" class="size-7 shrink-0 text-[#8b948d]" aria-hidden="true">
    <template v-if="variant === 0">
      <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M16 5v4M16 23v4M5 16h4M23 16h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </template>
    <template v-else-if="variant === 1">
      <path d="M16 3l2.2 6.8H25l-5.6 4.1 2.1 6.6L16 16.6 10.5 20.5l2.1-6.6L7 9.8h6.8L16 3z" fill="currentColor" />
    </template>
    <template v-else-if="variant === 2">
      <circle cx="16" cy="16" r="4" fill="currentColor" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M24.5 7.5l-2 2M9.5 22.5l-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </template>
    <template v-else-if="variant === 3">
      <path d="M14 3l-8 16h6l-3 10 13-18h-7l5-8h-6z" fill="currentColor" />
    </template>
    <template v-else-if="variant === 4">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </template>
    <template v-else>
      <path d="M7 23c4-9 6-14 9-18 3 4 5 9 9 18-3.2-2.2-5.6-3.2-9-3.2S10.2 20.8 7 23z" fill="currentColor" />
    </template>
  </svg>
</template>
