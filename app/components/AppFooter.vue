<script setup lang="ts">
import type { SiteContent } from '#shared/types'

defineProps<{ content: SiteContent }>()
const email = ref('')
const error = ref('')
const success = ref(false)
const sending = ref(false)

async function submit() {
  error.value = ''
  success.value = false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    error.value = 'Enter a valid email.'
    return
  }
  sending.value = true
  try {
    await $fetch('/api/consultation', {
      method: 'POST',
      body: { type: 'newsletter', email: email.value.trim() },
    })
    success.value = true
    email.value = ''
  } catch {
    error.value = 'We couldn’t save that email. Try again in a moment.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <footer class="bg-canvas">
    <div class="mx-auto w-full max-w-[74rem] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_0.85fr_1.05fr]">
        <div>
          <BrandMark />
          <p class="mt-5 max-w-[16rem] text-[1.7rem] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[1.85rem]">
            {{ content.footer.headline }}
          </p>
          <form class="mt-6 max-w-sm" @submit.prevent="submit">
            <div class="flex items-end gap-3">
              <label class="min-w-0 flex-1">
                <span class="sr-only">Email</span>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  :placeholder="content.footer.emailPlaceholder"
                  class="w-full border-b border-ink/20 bg-transparent py-2 text-[0.9375rem] outline-none placeholder:text-muted focus:border-brand"
                  :aria-invalid="Boolean(error)"
                  :aria-describedby="error || success ? 'newsletter-status' : undefined"
                >
              </label>
              <button
                type="submit"
                class="shrink-0 rounded-full bg-brand px-4 py-2 text-[0.875rem] font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
                :disabled="sending"
              >
                {{ content.footer.submitLabel }}
              </button>
            </div>
            <p v-if="error" id="newsletter-status" class="mt-2 text-[0.8125rem] font-medium text-brand-dark" role="alert">
              {{ error }}
            </p>
            <p v-else-if="success" id="newsletter-status" class="mt-2 text-[0.8125rem] font-medium text-brand" role="status">
              {{ content.footer.newsletterSuccess }}
            </p>
          </form>
        </div>

        <nav :aria-label="content.footer.quickLinksTitle">
          <h2 class="text-[1.05rem] font-bold">{{ content.footer.quickLinksTitle }}</h2>
          <ul class="mt-4 space-y-2.5 text-[0.9375rem]">
            <li v-for="link in content.footer.quickLinks" :key="link.label">
              <NuxtLink v-if="!link.href.includes('#')" :to="link.href" class="hover:text-brand">{{ link.label }}</NuxtLink>
              <a v-else :href="link.href" class="hover:text-brand">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <nav :aria-label="content.footer.servicesTitle">
          <h2 class="text-[1.05rem] font-bold">{{ content.footer.servicesTitle }}</h2>
          <ul class="mt-4 space-y-2.5 text-[0.9375rem]">
            <li v-for="link in content.footer.services" :key="link.label">
              <a :href="link.href" class="hover:text-brand">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="text-[1.05rem] font-bold">{{ content.footer.contactTitle }}</h2>
          <ul class="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a :href="content.settings.phoneHref" class="hover:text-brand">{{ content.settings.phoneDisplay }}</a>
            </li>
            <li>
              <a :href="`mailto:${content.settings.email}`" class="hover:text-brand">{{ content.settings.email }}</a>
            </li>
            <li>
              <a :href="content.settings.mapsHref" class="hover:text-brand">
                <span v-for="line in content.settings.addressLines" :key="line" class="block">{{ line }}</span>
              </a>
            </li>
          </ul>
          <p class="mt-6 text-[0.9375rem] font-bold">{{ content.footer.followTitle }}</p>
          <div class="mt-3 flex gap-2">
            <a
              v-for="social in content.settings.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="grid size-8 place-items-center rounded-full bg-brand text-white hover:bg-brand-dark"
              :aria-label="`${content.settings.name} on ${social.label}`"
            >
              <AppIcon :name="social.icon" class="text-[0.9rem]" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-2 border-t border-line pt-5 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{{ content.settings.copyright }}</p>
        <p>{{ content.settings.footerNote }}</p>
      </div>
    </div>
  </footer>
</template>
