<script setup lang="ts">
import type { SiteContent } from '#shared/types'

const props = defineProps<{ content: SiteContent }>()
const posts = computed(() => props.content.blog.posts.slice(0, 3))
</script>

<template>
  <section id="blog" class="bg-white py-16 sm:py-20">
    <div class="mx-auto w-full max-w-[74rem] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading :eyebrow="content.blog.eyebrow" :title="content.blog.title" />
      </Reveal>
      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal v-for="(post, index) in posts" :key="post.slug" :delay="index * 0.06" class="h-full">
          <article
            class="flex h-full flex-col rounded-[1.4rem] p-4 sm:p-5"
            :class="post.featured ? 'bg-brand text-white' : 'border border-line bg-white text-ink shadow-[0_10px_30px_rgba(14,34,22,0.04)]'"
          >
            <p class="text-[0.8125rem]" :class="post.featured ? 'text-white/80' : 'text-muted'">
              {{ post.author }} — {{ post.date }}
            </p>
            <h3 class="mt-2 flex-1 text-[1.28rem] font-bold leading-snug sm:text-[1.4rem]">
              {{ post.title }}
            </h3>
            <img
              :src="post.image"
              :alt="post.imageAlt"
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
              class="mt-4 aspect-[16/10] w-full rounded-2xl object-cover"
            >
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="mt-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.875rem] font-bold"
              :class="post.featured ? 'bg-white text-brand hover:bg-lime hover:text-ink' : 'bg-brand text-white hover:bg-brand-dark'"
            >
              {{ content.blog.learnMoreLabel }}
              <AppIcon name="arrow" class="text-[0.95rem]" />
            </NuxtLink>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>
