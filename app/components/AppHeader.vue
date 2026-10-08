<script setup lang="ts">
import type { SiteContent } from '#shared/types'

const props = defineProps<{ content: SiteContent }>()
const route = useRoute()
const { chooseService, serviceHref } = useConsult()
const open = ref(false)
const servicesOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const elevated = ref(false)

const services = computed(() => props.content.consultation.services)

function toggleMenu() {
  open.value = !open.value
  servicesOpen.value = false
}

function closeMenu(returnFocus = false) {
  open.value = false
  servicesOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu(true)
}

function scrollToHash(href: string, event: MouseEvent) {
  closeMenu()
  if (!href.startsWith('/#') || route.path !== '/') return
  event.preventDefault()
  const id = href.slice(2)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

function onScroll() {
  elevated.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('overflow-hidden')
})

watch(open, (value) => {
  if (!import.meta.client) return
  document.body.classList.toggle('overflow-hidden', value)
})

watch(() => route.fullPath, () => closeMenu())
</script>

<template>
  <header class="sticky top-0 z-40" @keydown="onEscape">
    <div class="bg-brand text-white">
      <div class="mx-auto flex w-full max-w-[74rem] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2 text-[0.8125rem] sm:px-6 lg:px-8">
        <div class="flex min-w-0 items-center gap-4">
          <a :href="content.settings.mapsHref" class="inline-flex min-w-0 items-center gap-1.5 hover:underline">
            <AppIcon name="pin" class="shrink-0 text-[1rem]" />
            <span class="truncate">{{ content.settings.address }}</span>
          </a>
          <a :href="`mailto:${content.settings.email}`" class="hidden items-center gap-1.5 hover:underline md:inline-flex">
            <AppIcon name="mail" class="text-[1rem]" />
            <span>{{ content.settings.email }}</span>
          </a>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="hidden sm:inline">Follow Us</span>
          <a
            v-for="social in content.settings.socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="grid size-6 place-items-center rounded-full bg-white/15 hover:bg-white/25"
            :aria-label="`${content.settings.name} on ${social.label}`"
          >
            <AppIcon :name="social.icon" class="text-[0.8rem]" />
          </a>
        </div>
      </div>
    </div>

    <div class="border-b border-line bg-white" :class="elevated ? 'shadow-[0_8px_24px_rgba(14,34,22,0.06)]' : ''">
      <div class="mx-auto flex w-full max-w-[74rem] items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <NuxtLink to="/" aria-label="Lawnx home" @click="closeMenu()">
          <BrandMark />
        </NuxtLink>

        <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <template v-for="item in content.navigation" :key="item.label">
            <div
              v-if="item.label === 'Services'"
              class="relative"
              @mouseenter="servicesOpen = true"
              @mouseleave="servicesOpen = false"
              @focusin="servicesOpen = true"
              @focusout="servicesOpen = false"
            >
              <button
                type="button"
                class="inline-flex items-center gap-1 text-[0.9375rem] font-medium text-ink hover:text-brand"
                :aria-expanded="servicesOpen"
                aria-controls="services-menu"
                @click="servicesOpen = !servicesOpen"
              >
                {{ item.label }}
                <AppIcon name="chevron-down" class="text-[0.85rem]" />
              </button>
              <div
                v-show="servicesOpen"
                id="services-menu"
                class="absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-3"
              >
                <ul class="rounded-xl border border-line bg-white p-2 shadow-[0_16px_40px_rgba(14,34,22,0.08)]">
                  <li v-for="service in services" :key="service">
                    <a
                      :href="serviceHref(service)"
                      class="block rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-ink hover:bg-canvas hover:text-brand"
                      @click="chooseService(service, $event); closeMenu()"
                    >
                      {{ service }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink
              v-else-if="!item.href.includes('#')"
              :to="item.href"
              class="text-[0.9375rem] font-medium text-ink hover:text-brand"
              @click="closeMenu()"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              class="text-[0.9375rem] font-medium text-ink hover:text-brand"
              @click="scrollToHash(item.href, $event)"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>

        <div class="flex items-center gap-3">
          <a :href="content.settings.phoneHref" class="inline-flex items-center gap-2.5" :aria-label="`Call ${content.settings.phoneDisplay}`">
            <span class="grid size-11 place-items-center rounded-full bg-brand text-white">
              <AppIcon name="phone" class="text-[1.15rem]" />
            </span>
            <span class="hidden text-left leading-tight sm:block" aria-hidden="true">
              <span class="block text-[0.75rem] text-muted">Call Now</span>
              <span class="block text-[0.95rem] font-bold text-ink">{{ content.settings.phoneDisplay }}</span>
            </span>
          </a>
          <button
            ref="menuButton"
            type="button"
            class="grid size-11 place-items-center rounded-lg border border-line text-ink lg:hidden"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            :aria-label="open ? 'Close menu' : 'Open menu'"
            @click="toggleMenu"
          >
            <AppIcon :name="open ? 'close' : 'menu'" class="text-[1.25rem]" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="open"
      id="mobile-menu"
      class="max-h-[calc(100vh-7.5rem)] overflow-y-auto border-b border-line bg-white px-5 py-4 lg:hidden"
    >
      <nav aria-label="Mobile" class="flex flex-col gap-1">
        <template v-for="item in content.navigation" :key="item.label">
          <div v-if="item.label === 'Services'">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[1rem] font-semibold"
              :aria-expanded="servicesOpen"
              @click="servicesOpen = !servicesOpen"
            >
              Services
              <AppIcon name="chevron-down" class="text-[1rem]" />
            </button>
            <div v-show="servicesOpen" class="mb-2 ml-3 flex flex-col gap-1">
              <a
                v-for="service in services"
                :key="service"
                :href="serviceHref(service)"
                class="rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-muted"
                @click="chooseService(service, $event); closeMenu()"
              >
                {{ service }}
              </a>
            </div>
          </div>
          <NuxtLink
            v-else-if="!item.href.includes('#')"
            :to="item.href"
            class="rounded-lg px-3 py-3 text-[1rem] font-semibold"
            @click="closeMenu()"
          >
            {{ item.label }}
          </NuxtLink>
          <a
            v-else
            :href="item.href"
            class="rounded-lg px-3 py-3 text-[1rem] font-semibold"
            @click="scrollToHash(item.href, $event)"
          >
            {{ item.label }}
          </a>
        </template>
      </nav>
    </div>
  </header>
</template>
