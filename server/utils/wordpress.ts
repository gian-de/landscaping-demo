import type {
  BlogPost,
  ContentBlock,
  FaqItem,
  ProjectItem,
  SiteContent,
  TeamMember,
} from '#shared/types'
import { localSiteContent } from '#shared/site-content'

interface WpRendered {
  rendered?: string
}

interface WpMedia {
  source_url?: string
  alt_text?: string
}

interface WpPost {
  slug?: string
  date?: string
  title?: WpRendered
  excerpt?: WpRendered
  content?: WpRendered
  acf?: Record<string, unknown>
  _embedded?: {
    author?: { name?: string }[]
    'wp:featuredmedia'?: WpMedia[]
  }
}

function text(value: unknown, fallback: string) {
  if (typeof value !== 'string') return fallback
  const clean = decode(value.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
  return clean || fallback
}

function decode(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function stripTags(value: string) {
  return decode(value.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
}

function htmlToBlocks(html: string): ContentBlock[] {
  const blocks: ContentBlock[] = []
  const pattern = /<(h[1-3]|p|li)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi
  for (const match of html.matchAll(pattern)) {
    const textValue = stripTags(match[2] || '')
    if (!textValue) continue
    const tag = (match[1] || '').toLowerCase()
    blocks.push({
      type: tag.startsWith('h') ? 'heading' : 'paragraph',
      text: textValue,
    })
  }
  if (!blocks.length) {
    const plain = stripTags(html)
    if (plain) blocks.push({ type: 'paragraph', text: plain })
  }
  return blocks
}

function imageUrl(value: unknown, fallback: string) {
  if (typeof value === 'string' && /^https?:\/\//.test(value)) return value
  if (value && typeof value === 'object' && 'url' in value && typeof value.url === 'string') {
    return value.url
  }
  return fallback
}

function imageAlt(value: unknown, fallback: string) {
  if (value && typeof value === 'object' && 'alt' in value && typeof value.alt === 'string' && value.alt.trim()) {
    return value.alt.trim()
  }
  return fallback
}

function stringList(value: unknown) {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => {
      if (typeof item === 'string') return item.trim()
      if (item && typeof item === 'object') {
        const record = item as Record<string, unknown>
        return text(record.label || record.name || record.service || record.question, '')
      }
      return ''
    })
    .filter(Boolean)
}

function formatDate(value?: string) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

function featuredImage(post: WpPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]
}

async function wpGet<T>(base: string, path: string): Promise<T | null> {
  try {
    return await $fetch<T>(`${base}${path}`, { timeout: 8000 })
  } catch {
    return null
  }
}

function applyAcf(content: SiteContent, acf: Record<string, unknown>) {
  content.settings.name = text(acf.site_name, content.settings.name)
  content.settings.phoneDisplay = text(acf.phone_display, content.settings.phoneDisplay)
  content.settings.phoneHref = text(acf.phone_href, content.settings.phoneHref)
  content.settings.email = text(acf.email, content.settings.email)
  content.settings.address = text(acf.address, content.settings.address)
  content.settings.copyright = text(acf.copyright, content.settings.copyright)
  content.settings.footerNote = text(acf.footer_note, content.settings.footerNote)
  content.hero.eyebrow = text(acf.hero_eyebrow, content.hero.eyebrow)
  content.hero.ctaLabel = text(acf.hero_cta_label, content.hero.ctaLabel)
  content.hero.awardLead = text(acf.hero_award_lead, content.hero.awardLead)
  content.hero.awardEmphasis = text(acf.hero_award_emphasis, content.hero.awardEmphasis)
  content.hero.body = text(acf.hero_body, content.hero.body)
  content.hero.image = imageUrl(acf.hero_image, content.hero.image)
  content.hero.imageAlt = imageAlt(acf.hero_image, text(acf.hero_image_alt, content.hero.imageAlt))
  content.consultation.title = text(acf.consultation_title, content.consultation.title)
  content.consultation.submitLabel = text(acf.consultation_submit_label, content.consultation.submitLabel)
  content.consultation.successTitle = text(acf.consultation_success_title, content.consultation.successTitle)
  content.consultation.successBody = text(acf.consultation_success_body, content.consultation.successBody)
  content.trusted.title = text(acf.trusted_title, content.trusted.title)
  content.about.eyebrow = text(acf.about_eyebrow, content.about.eyebrow)
  content.about.statValue = text(acf.about_stat_value, content.about.statValue)
  content.about.statLabel = text(acf.about_stat_label, content.about.statLabel)
  content.about.lead = text(acf.about_lead, content.about.lead)
  content.about.rest = text(acf.about_rest, content.about.rest)
  content.team.eyebrow = text(acf.team_eyebrow, content.team.eyebrow)
  content.team.title = text(acf.team_title, content.team.title)
  content.faq.eyebrow = text(acf.faq_eyebrow, content.faq.eyebrow)
  content.faq.title = text(acf.faq_title, content.faq.title)
  content.faq.contactLabel = text(acf.faq_contact_label, content.faq.contactLabel)
  content.blog.eyebrow = text(acf.blog_eyebrow, content.blog.eyebrow)
  content.blog.title = text(acf.blog_title, content.blog.title)
  content.blog.learnMoreLabel = text(acf.blog_learn_more_label, content.blog.learnMoreLabel)
  content.projects.eyebrow = text(acf.projects_eyebrow, content.projects.eyebrow)
  content.projects.title = text(acf.projects_title, content.projects.title)
  content.projects.intro = text(acf.projects_intro, content.projects.intro)
  content.testimonials.eyebrow = text(acf.testimonials_eyebrow, content.testimonials.eyebrow)
  content.testimonials.title = text(acf.testimonials_title, content.testimonials.title)
  content.testimonials.intro = text(acf.testimonials_intro, content.testimonials.intro)
  content.footer.headline = text(acf.footer_headline, content.footer.headline)
  content.footer.emailPlaceholder = text(acf.footer_email_placeholder, content.footer.emailPlaceholder)
  content.footer.submitLabel = text(acf.footer_submit_label, content.footer.submitLabel)
  content.footer.newsletterSuccess = text(acf.footer_newsletter_success, content.footer.newsletterSuccess)

  const title = text(acf.hero_title, '')
  if (title) {
    content.hero.titleLines = title.split('\n').map((line) => line.trim()).filter(Boolean)
  }

  const services = stringList(acf.services)
  if (services.length) {
    content.consultation.services = services
    content.footer.services = services.map((label) => ({
      label,
      href: `/?service=${encodeURIComponent(label)}#consultation`,
    }))
  }

  const logos = stringList(acf.trusted_logos)
  if (logos.length) content.trusted.logos = logos

  if (Array.isArray(acf.team_members) && acf.team_members.length) {
    content.team.members = acf.team_members.map((item, index) => mapTeam(item, content.team.members[index]))
  }

  if (Array.isArray(acf.faqs) && acf.faqs.length) {
    content.faq.items = acf.faqs.map((item) => mapFaq(item)).filter((item) => item.question && item.answer)
  }

  if (Array.isArray(acf.projects) && acf.projects.length) {
    content.projects.items = acf.projects.map((item, index) => mapProject(item, content.projects.items[index]))
  }

  if (Array.isArray(acf.testimonials) && acf.testimonials.length) {
    content.testimonials.items = acf.testimonials
      .map((item) => {
        const record = (item || {}) as Record<string, unknown>
        return {
          quote: text(record.quote, ''),
          name: text(record.name, ''),
          detail: text(record.detail, ''),
        }
      })
      .filter((item) => item.quote && item.name)
  }

  const namePlaceholder = text(acf.field_name_placeholder, '')
  const emailPlaceholder = text(acf.field_email_placeholder, '')
  const phonePlaceholder = text(acf.field_phone_placeholder, '')
  const servicePlaceholder = text(acf.field_service_placeholder, '')
  const messagePlaceholder = text(acf.field_message_placeholder, '')
  if (namePlaceholder) content.consultation.fields.name.placeholder = namePlaceholder
  if (emailPlaceholder) content.consultation.fields.email.placeholder = emailPlaceholder
  if (phonePlaceholder) content.consultation.fields.phone.placeholder = phonePlaceholder
  if (servicePlaceholder) content.consultation.fields.service.placeholder = servicePlaceholder
  if (messagePlaceholder) content.consultation.fields.message.placeholder = messagePlaceholder
}

function mapTeam(item: unknown, fallback?: TeamMember): TeamMember {
  const record = (item || {}) as Record<string, unknown>
  const base = fallback || localSiteContent.team.members[0]
  return {
    name: text(record.name, base?.name || ''),
    company: text(record.company, base?.company || ''),
    image: imageUrl(record.photo || record.image, base?.image || ''),
    imageAlt: imageAlt(record.photo || record.image, text(record.image_alt, base?.imageAlt || '')),
    socials: base?.socials || [],
  }
}

function mapFaq(item: unknown): FaqItem {
  const record = (item || {}) as Record<string, unknown>
  return {
    question: text(record.question, ''),
    answer: text(record.answer, ''),
  }
}

function mapProject(item: unknown, fallback?: ProjectItem): ProjectItem {
  const record = (item || {}) as Record<string, unknown>
  const base = fallback || localSiteContent.projects.items[0]
  const title = text(record.title, base?.title || 'Project')
  return {
    slug: text(record.slug, title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')),
    title,
    location: text(record.location, base?.location || ''),
    image: imageUrl(record.image, base?.image || ''),
    imageAlt: imageAlt(record.image, text(record.image_alt, base?.imageAlt || title)),
    summary: text(record.summary, base?.summary || ''),
  }
}

function mapPost(post: WpPost, index: number): BlogPost | null {
  const title = stripTags(post.title?.rendered || '')
  const slug = post.slug || ''
  if (!title || !slug || slug === 'hello-world' || title === 'Hello world!') return null
  const media = featuredImage(post)
  const fallback = localSiteContent.blog.posts[index % localSiteContent.blog.posts.length]
  const body = htmlToBlocks(post.content?.rendered || '')
  const excerpt = stripTags(post.excerpt?.rendered || '') || body[0]?.text || ''
  return {
    slug,
    title,
    author: post._embedded?.author?.[0]?.name || fallback?.author || 'Lawnx',
    date: formatDate(post.date) || fallback?.date || '',
    image: media?.source_url || fallback?.image || '',
    imageAlt: media?.alt_text || title,
    excerpt,
    featured: index === 1,
    body: body.length ? body : [{ type: 'paragraph', text: excerpt }],
  }
}

function mapCollectionPost(post: WpPost, kind: 'team' | 'faq' | 'project') {
  const title = stripTags(post.title?.rendered || '')
  const acf = post.acf || {}
  const media = featuredImage(post)
  if (kind === 'team') {
    return mapTeam({
      name: title,
      company: acf.company || stripTags(post.excerpt?.rendered || ''),
      photo: media?.source_url,
      image_alt: media?.alt_text,
    })
  }
  if (kind === 'faq') {
    return {
      question: title,
      answer: stripTags(post.content?.rendered || post.excerpt?.rendered || ''),
    }
  }
  return mapProject({
    slug: post.slug,
    title,
    location: acf.location,
    summary: stripTags(post.excerpt?.rendered || post.content?.rendered || ''),
    image: media?.source_url,
    image_alt: media?.alt_text,
  })
}

export async function loadSiteContent(): Promise<{ source: 'wordpress' | 'local'; content: SiteContent }> {
  const base = String(useRuntimeConfig().public.wpUrl || '').replace(/\/$/, '')
  const content = structuredClone(localSiteContent) as SiteContent
  if (!base) return { source: 'local', content }

  const pages = await wpGet<WpPost[]>(base, '/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard')
  const home = pages?.[0]
  if (home?.acf && typeof home.acf === 'object') {
    const bundled = home.acf.site_content
    if (bundled && typeof bundled === 'object') {
      return {
        source: 'wordpress',
        content: deepFill(content, bundled as Partial<SiteContent>),
      }
    }
    applyAcf(content, home.acf)
  }

  const posts = await wpGet<WpPost[]>(base, '/wp-json/wp/v2/posts?per_page=6&_embed')
  const mappedPosts = (posts || []).map(mapPost).filter((post): post is BlogPost => Boolean(post))
  if (mappedPosts.length) content.blog.posts = mappedPosts

  const team = await wpGet<WpPost[]>(base, '/wp-json/wp/v2/team?per_page=12&_embed')
  if (team?.length) {
    content.team.members = team.map((post) => mapCollectionPost(post, 'team') as TeamMember)
  }

  const faqs = await wpGet<WpPost[]>(base, '/wp-json/wp/v2/faq?per_page=20&_embed')
  if (faqs?.length) {
    content.faq.items = faqs
      .map((post) => mapCollectionPost(post, 'faq') as FaqItem)
      .filter((item) => item.question && item.answer)
  }

  const projects = await wpGet<WpPost[]>(base, '/wp-json/wp/v2/project?per_page=12&_embed')
  if (projects?.length) {
    content.projects.items = projects.map((post) => mapCollectionPost(post, 'project') as ProjectItem)
  }

  const changed = Boolean(home) || mappedPosts.length > 0 || Boolean(team?.length || faqs?.length || projects?.length)
  return { source: changed ? 'wordpress' : 'local', content }
}

function deepFill<T>(base: T, patch: Partial<T>): T {
  if (Array.isArray(base)) return (Array.isArray(patch) && patch.length ? patch : base) as T
  if (!base || typeof base !== 'object' || !patch || typeof patch !== 'object') {
    return (patch === undefined || patch === '' ? base : patch) as T
  }
  const output = { ...base } as Record<string, unknown>
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined || value === '') continue
    const current = output[key]
    output[key] = current && typeof current === 'object' ? deepFill(current, value as never) : value
  }
  return output as T
}
