<script setup lang="ts">
defineProps<{
  name:
    | 'arrow'
    | 'chevron'
    | 'chevron-down'
    | 'plus'
    | 'minus'
    | 'phone'
    | 'pin'
    | 'mail'
    | 'menu'
    | 'close'
    | 'facebook'
    | 'linkedin'
    | 'youtube'
    | 'x'
    | 'instagram'
}>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="block h-[1em] w-[1em]">
    <path
      v-if="name === 'arrow'"
      d="M7 17L17 7M9 7h8v8"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'chevron'"
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'chevron-down'"
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'plus'"
      d="M12 6v12M6 12h12"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      v-else-if="name === 'minus'"
      d="M6 12h12"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      v-else-if="name === 'phone'"
      d="M8.2 4.8h2.1l1.1 2.6-1.4 1.1a12.4 12.4 0 0 0 5.5 5.5l1.1-1.4 2.6 1.1v2.1c0 .7-.5 1.3-1.2 1.4A14.2 14.2 0 0 1 6.8 6c.1-.7.7-1.2 1.4-1.2z"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'pin'"
      d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10z"
      stroke="currentColor"
      stroke-width="1.6"
    />
    <circle v-if="name === 'pin'" cx="12" cy="11" r="1.6" fill="currentColor" />
    <path
      v-else-if="name === 'mail'"
      d="M4.5 7.5h15v9h-15v-9z"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
    />
    <path
      v-if="name === 'mail'"
      d="M5 8l7 5 7-5"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'menu'"
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      v-else-if="name === 'close'"
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      v-else-if="name === 'facebook'"
      fill="currentColor"
      d="M14.2 8.2h-1.7V7.2c0-.4.3-.5.5-.5h1.2V4.6h-1.9C10.4 4.6 9.4 5.6 9.4 7.2v1h-1.6v2.2h1.6V19h2.5v-8.6h1.8l.5-2.2z"
    />
    <path
      v-else-if="name === 'linkedin'"
      fill="currentColor"
      d="M6.7 9.2H4.4V19h2.3V9.2zM5.5 4.6A1.4 1.4 0 1 0 5.5 7.4 1.4 1.4 0 0 0 5.5 4.6zM19.6 19h-2.3v-4.8c0-1.2-.4-2-1.5-2-1.2 0-1.8.8-1.8 2V19H11.7V9.2h2.2v1.3c.4-.7 1.3-1.6 2.8-1.6 2 0 3 1.3 3 3.8V19z"
    />
    <path
      v-else-if="name === 'youtube'"
      fill="currentColor"
      d="M20.2 8.2a2.2 2.2 0 0 0-1.6-1.6C17.2 6.3 12 6.3 12 6.3s-5.2 0-6.6.3A2.2 2.2 0 0 0 3.8 8.2 23 23 0 0 0 3.5 12a23 23 0 0 0 .3 3.8 2.2 2.2 0 0 0 1.6 1.6c1.4.3 6.6.3 6.6.3s5.2 0 6.6-.3a2.2 2.2 0 0 0 1.6-1.6 23 23 0 0 0 .3-3.8 23 23 0 0 0-.3-3.8zM10.6 14.7V9.3L15 12l-4.4 2.7z"
    />
    <path
      v-else-if="name === 'x'"
      fill="currentColor"
      d="M6 5.5h2.4l3.1 4.2 3.5-4.2H18l-4.6 5.4L18.3 18.5h-2.4l-3.4-4.5-3.8 4.5H6.2l4.9-5.8L6 5.5z"
    />
    <path
      v-else-if="name === 'instagram'"
      d="M8 4.8h8A3.2 3.2 0 0 1 19.2 8v8A3.2 3.2 0 0 1 16 19.2H8A3.2 3.2 0 0 1 4.8 16V8A3.2 3.2 0 0 1 8 4.8z"
      stroke="currentColor"
      stroke-width="1.6"
    />
    <circle v-if="name === 'instagram'" cx="12" cy="12" r="3.1" stroke="currentColor" stroke-width="1.6" />
    <circle v-if="name === 'instagram'" cx="16.4" cy="7.6" r="0.8" fill="currentColor" />
  </svg>
</template>
