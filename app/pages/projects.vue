<script setup lang="ts">
const { content } = useSiteContent()

useSeoMeta({
  title: 'Projects | Lawnx',
  description: 'Recent lawn, garden, and hedge projects by Lawnx in Reno.',
})
</script>

<template>
  <section v-if="content" class="bg-canvas py-14 sm:py-20">
    <div class="mx-auto w-full max-w-[74rem] px-5 sm:px-6 lg:px-8">
      <SectionHeading :eyebrow="content.projects.eyebrow" :title="content.projects.title" />
      <p class="mx-auto mt-4 max-w-2xl text-center text-[1rem] leading-relaxed text-muted">
        {{ content.projects.intro }}
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="project in content.projects.items"
          :key="project.slug"
          class="overflow-hidden rounded-[1.4rem] border border-line bg-white"
        >
          <img
            :src="project.image"
            :alt="project.imageAlt"
            width="960"
            height="640"
            loading="lazy"
            class="aspect-[16/11] w-full object-cover"
          >
          <div class="p-5">
            <p class="text-[0.8125rem] font-semibold text-brand">{{ project.location }}</p>
            <h2 class="mt-1 text-[1.25rem] font-bold">{{ project.title }}</h2>
            <p class="mt-2 text-[0.9375rem] leading-relaxed text-muted">{{ project.summary }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
