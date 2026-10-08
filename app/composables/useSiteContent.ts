import type { SiteContent, SiteResponse } from '#shared/types'

export function useSiteContent() {
  const { data, pending, error, refresh } = useAsyncData('site-content', () => $fetch<SiteResponse>('/api/cms/site'))
  const content = computed(() => data.value?.content ?? null)
  const source = computed(() => data.value?.source ?? 'local')
  return { content, source, pending, error, refresh }
}

export function useContent(): ComputedRef<SiteContent | null> {
  return useSiteContent().content
}
