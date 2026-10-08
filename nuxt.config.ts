import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['motion-v/nuxt'],
  runtimeConfig: {
    wpFormEndpoint: process.env.NUXT_WP_FORM_ENDPOINT || '',
    public: {
      wpUrl: process.env.NUXT_PUBLIC_WP_URL || '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Lawnx | Expert Lawn Care, Lasting Beauty',
      meta: [
        {
          name: 'description',
          content: 'Lawnx is a Reno landscaping crew for lawn care, garden design, tree work, and seasonal cleanup. Book a free consultation.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
