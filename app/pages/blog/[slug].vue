<script setup lang="ts">
const route = useRoute()
const { content } = useSiteContent()

const post = computed(() => content.value?.blog.posts.find((item) => item.slug === route.params.slug))

watchEffect(() => {
  if (content.value && !post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
})

useSeoMeta({
  title: () => post.value ? `${post.value.title} | Lawnx` : 'Article | Lawnx',
  description: () => post.value?.excerpt || 'Lawn care notes from Lawnx.',
})
</script>

<template>
  <article v-if="post" class="bg-canvas">
    <div class="mx-auto w-full max-w-[46rem] px-5 py-12 sm:px-6 sm:py-16">
      <NuxtLink to="/#blog" class="text-[0.875rem] font-semibold text-brand hover:underline">Back to articles</NuxtLink>
      <p class="mt-6 text-[0.875rem] text-muted">{{ post.author }} — {{ post.date }}</p>
      <h1 class="mt-3 text-[2.1rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.7rem]">{{ post.title }}</h1>
      <img
        :src="post.image"
        :alt="post.imageAlt"
        width="1200"
        height="750"
        class="mt-8 aspect-[16/10] w-full rounded-[1.4rem] object-cover"
      >
      <div class="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-ink">
        <component
          :is="block.type === 'heading' ? 'h2' : 'p'"
          v-for="(block, index) in post.body"
          :key="index"
          :class="block.type === 'heading' ? 'pt-3 text-[1.4rem] font-bold' : ''"
        >
          {{ block.text }}
        </component>
      </div>
    </div>
  </article>
</template>
