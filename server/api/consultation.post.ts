interface FormBody {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  type?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max = 2000) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : ''
}

export default defineEventHandler(async (event) => {
  const body = await readBody<FormBody>(event)
  const type = body?.type === 'newsletter' ? 'newsletter' : 'consultation'

  if (type === 'newsletter') {
    const email = clean(body?.email, 200)
    if (!emailPattern.test(email)) {
      throw createError({
        statusCode: 422,
        statusMessage: 'Enter a valid email.',
        data: { errors: { email: 'Enter a valid email.' } },
      })
    }
    await forward({ type, email })
    return { ok: true }
  }

  const name = clean(body?.name, 120)
  const email = clean(body?.email, 200)
  const phone = clean(body?.phone, 40)
  const service = clean(body?.service, 80)
  const message = clean(body?.message, 2000)
  const errors: Record<string, string> = {}

  if (name.length < 2) errors.name = 'Enter your name.'
  if (!emailPattern.test(email)) errors.email = 'Enter a valid email.'
  if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a phone number.'
  if (!service) errors.service = 'Select a service.'
  if (message.length < 8) errors.message = 'Tell us a little about the project.'

  if (Object.keys(errors).length) {
    throw createError({ statusCode: 422, statusMessage: 'Check the form.', data: { errors } })
  }

  await forward({ type, name, email, phone, service, message })
  return { ok: true }
})

async function forward(payload: Record<string, string>) {
  const endpoint = useRuntimeConfig().wpFormEndpoint
  if (!endpoint) return
  await $fetch(endpoint, { method: 'POST', body: payload })
}
