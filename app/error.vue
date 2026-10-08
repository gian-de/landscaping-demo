<script setup lang="ts">
const error = useError()

const message = computed(() => {
  if (error.value?.statusCode === 404) return 'That page is not on this site.'
  return 'Something went wrong loading this page.'
})
</script>

<template>
  <NuxtLayout>
    <section class="bg-canvas px-5 py-24 text-center">
      <p class="text-[0.8125rem] font-semibold text-brand">Lawnx</p>
      <h1 class="mt-3 text-[2.4rem] font-extrabold tracking-tight">{{ error?.statusCode || 'Error' }}</h1>
      <p class="mt-3 text-[1rem] text-muted">{{ message }}</p>
      <NuxtLink to="/" class="mt-6 inline-flex rounded-lg bg-lime px-5 py-3 text-[0.9375rem] font-bold text-ink">
        Back home
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>
