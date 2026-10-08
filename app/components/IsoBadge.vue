<script setup lang="ts">
defineProps<{
  kicker: string
  value: string
}>()
</script>

<template>
  <span class="grid size-14 place-items-center rounded-full border-2 border-gold bg-seal text-center leading-none shadow-sm">
    <span>
      <span class="block text-[0.5625rem] font-bold tracking-[0.14em] text-gold">{{ kicker }}</span>
      <span class="mt-0.5 block text-[0.75rem] font-bold text-white">{{ value }}</span>
    </span>
  </span>
</template>
