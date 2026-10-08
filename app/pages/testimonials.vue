<script setup lang="ts">
const { content } = useSiteContent()

useSeoMeta({
  title: 'Testimonials | Lawnx',
  description: 'Notes from homeowners who booked Lawnx for lawn care, cleanup, and tree work.',
})
</script>

<template>
  <section v-if="content" class="bg-canvas py-14 sm:py-20">
    <div class="mx-auto w-full max-w-[74rem] px-5 sm:px-6 lg:px-8">
      <SectionHeading :eyebrow="content.testimonials.eyebrow" :title="content.testimonials.title" />
      <p class="mx-auto mt-4 max-w-2xl text-center text-[1rem] leading-relaxed text-muted">
        {{ content.testimonials.intro }}
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <blockquote
          v-for="item in content.testimonials.items"
          :key="item.name"
          class="rounded-[1.4rem] border border-line bg-white p-6"
        >
          <p class="text-[1.05rem] font-medium leading-relaxed">“{{ item.quote }}”</p>
          <footer class="mt-5">
            <p class="font-bold">{{ item.name }}</p>
            <p class="text-[0.875rem] text-muted">{{ item.detail }}</p>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>
