export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'cache-control', 'public, max-age=30, stale-while-revalidate=120')
  return await loadSiteContent()
})
