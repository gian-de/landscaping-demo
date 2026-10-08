<script setup lang="ts">
import type { SiteContent } from '#shared/types'
import { motion } from 'motion-v'

const props = defineProps<{ content: SiteContent }>()
const { selectedService } = useConsult()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})
const errors = ref<Record<string, string>>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

watch(selectedService, (value) => {
  if (value) form.service = value
}, { immediate: true })

const fields = computed(() => props.content.consultation.fields)

async function submit() {
  errors.value = {}
  status.value = 'sending'
  try {
    await $fetch('/api/consultation', { method: 'POST', body: { ...form, type: 'consultation' } })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.message = ''
  } catch (error: unknown) {
    status.value = 'idle'
    const data = (error as { data?: { data?: { errors?: Record<string, string> }, errors?: Record<string, string> } }).data
    const fieldErrors = data?.data?.errors || data?.errors
    if (fieldErrors) {
      errors.value = fieldErrors
      return
    }
    status.value = 'error'
  }
}

function reset() {
  status.value = 'idle'
}
</script>

<template>
  <motion.div
    id="consultation"
    class="relative scroll-mt-32 pt-8"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
  >
    <div class="absolute left-1/2 top-0 z-10 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#e7f6cf] text-brand shadow-md" aria-hidden="true">
      <svg viewBox="0 0 32 32" class="size-9">
        <path fill="currentColor" d="M16 4.2c.6 3.2 2.1 5.8 4.4 7.6 1.5 1.2 3.2 1.9 5.3 2-1.1 2.7-2.8 4.7-5 6.1-2.1 1.2-4 2.8-4.7 5.3-.7-2.5-2.6-4.1-4.7-5.3-2.2-1.4-3.9-3.4-5-6.1 2.1-.1 3.8-.8 5.3-2C13.9 10 15.4 7.4 16 4.2z" />
      </svg>
    </div>
    <div class="relative overflow-hidden rounded-[1.4rem] bg-brand px-5 pb-5 pt-10 text-white shadow-[0_22px_50px_rgba(5,40,16,0.22)] sm:px-6">
      <div class="pointer-events-none absolute -right-8 top-6 size-44 rounded-full border border-white/15" aria-hidden="true" />
      <div class="pointer-events-none absolute right-2 top-16 size-24 rounded-full border border-white/10" aria-hidden="true" />

      <h2 class="relative text-[1.35rem] font-bold">{{ content.consultation.title }}</h2>

      <div v-if="status === 'success'" class="relative mt-6 rounded-xl bg-white/10 p-5" role="status">
        <p class="text-[1.15rem] font-bold">{{ content.consultation.successTitle }}</p>
        <p class="mt-2 text-[0.9375rem] leading-relaxed text-white/90">{{ content.consultation.successBody }}</p>
        <button type="button" class="mt-5 text-[0.875rem] font-semibold text-lime underline-offset-2 hover:underline" @click="reset">
          Send another request
        </button>
      </div>

      <form v-else class="relative mt-4" novalidate @submit.prevent="submit">
        <div class="grid gap-3 sm:grid-cols-2">
          <label class="block">
            <span class="mb-1 block text-[0.75rem] font-medium">{{ fields.name.label }}</span>
            <input v-model="form.name" class="field" type="text" name="name" autocomplete="name" required :placeholder="fields.name.placeholder" :aria-invalid="Boolean(errors.name)">
            <span v-if="errors.name" class="mt-1 block text-[0.75rem] font-semibold text-lime">{{ errors.name }}</span>
          </label>
          <label class="block">
            <span class="mb-1 block text-[0.75rem] font-medium">{{ fields.email.label }}</span>
            <input v-model="form.email" class="field" type="email" name="email" autocomplete="email" required :placeholder="fields.email.placeholder" :aria-invalid="Boolean(errors.email)">
            <span v-if="errors.email" class="mt-1 block text-[0.75rem] font-semibold text-lime">{{ errors.email }}</span>
          </label>
          <label class="block">
            <span class="mb-1 block text-[0.75rem] font-medium">{{ fields.phone.label }}</span>
            <input v-model="form.phone" class="field" type="tel" name="phone" autocomplete="tel" required :placeholder="fields.phone.placeholder" :aria-invalid="Boolean(errors.phone)">
            <span v-if="errors.phone" class="mt-1 block text-[0.75rem] font-semibold text-lime">{{ errors.phone }}</span>
          </label>
          <label class="block">
            <span class="mb-1 block text-[0.75rem] font-medium">{{ fields.service.label }}</span>
            <select v-model="form.service" class="field select-field" name="service" required :aria-invalid="Boolean(errors.service)">
              <option value="" disabled>{{ fields.service.placeholder }}</option>
              <option v-for="service in content.consultation.services" :key="service" :value="service">{{ service }}</option>
            </select>
            <span v-if="errors.service" class="mt-1 block text-[0.75rem] font-semibold text-lime">{{ errors.service }}</span>
          </label>
        </div>
        <label class="mt-3 block">
          <span class="mb-1 block text-[0.75rem] font-medium">{{ fields.message.label }}</span>
          <textarea v-model="form.message" class="field min-h-28 resize-y" name="message" required :placeholder="fields.message.placeholder" :aria-invalid="Boolean(errors.message)" />
          <span v-if="errors.message" class="mt-1 block text-[0.75rem] font-semibold text-lime">{{ errors.message }}</span>
        </label>
        <p v-if="status === 'error'" class="mt-3 text-[0.875rem] font-semibold text-lime" role="alert">
          We couldn’t send that. Call {{ content.settings.phoneDisplay }} and we’ll get you scheduled.
        </p>
        <button
          type="submit"
          class="relative mt-4 flex w-full items-center justify-center rounded-lg bg-lime py-3 text-[0.9375rem] font-bold text-ink hover:bg-lime-deep disabled:opacity-70"
          :disabled="status === 'sending'"
        >
          {{ status === 'sending' ? 'Sending…' : content.consultation.submitLabel }}
          <AppIcon name="arrow" class="absolute right-4 text-[1.05rem]" />
        </button>
      </form>
    </div>
  </motion.div>
</template>
