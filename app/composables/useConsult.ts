export function useConsult() {
  const route = useRoute()
  const selectedService = useState('consult-service', () => '')

  function syncFromRoute() {
    const value = route.query.service
    if (typeof value === 'string' && value) selectedService.value = value
  }

  syncFromRoute()
  watch(() => route.query.service, syncFromRoute)

  function serviceLocation(service: string) {
    return { path: '/', hash: '#consultation', query: { service } }
  }

  function serviceHref(service: string) {
    return `/?service=${encodeURIComponent(service)}#consultation`
  }

  async function chooseService(service: string, event?: Event) {
    selectedService.value = service
    const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (route.path !== '/') {
      await navigateTo(serviceLocation(service))
      return
    }
    event?.preventDefault()
    document.getElementById('consultation')?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return { selectedService, chooseService, serviceLocation, serviceHref }
}
