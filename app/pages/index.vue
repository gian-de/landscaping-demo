<script setup lang="ts">
const { content } = useSiteContent()

useSeoMeta({
  title: 'Lawnx | Expert Lawn Care, Lasting Beauty',
  description: 'Award-winning lawn care, garden design, and tree services in Reno. Book a free consultation with Lawnx.',
  ogTitle: 'Lawnx | Expert Lawn Care, Lasting Beauty',
  ogDescription: 'Award-winning lawn care, garden design, and tree services in Reno.',
})
</script>

<template>
  <div v-if="content">
    <HeroSection :content="content" />
    <TrustedMarquee :content="content" />
    <AboutSection :content="content" />
    <TeamSection :content="content" />
    <FaqSection :content="content" />
    <BlogSection :content="content" />
  </div>
</template>
