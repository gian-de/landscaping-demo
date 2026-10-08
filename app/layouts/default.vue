<script setup lang="ts">
const { content, pending } = useSiteContent()
</script>

<template>
  <div class="min-h-screen bg-white text-ink">
    <a class="skip-link" href="#main">Skip to content</a>
    <AppHeader v-if="content" :content="content" />
    <main id="main">
      <slot v-if="content" />
      <p v-else-if="pending" class="px-5 py-24 text-center text-[1rem] text-muted">Loading Lawnx…</p>
    </main>
    <AppFooter v-if="content" :content="content" />
  </div>
</template>
