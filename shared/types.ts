export interface SocialLink {
  label: string
  href: string
  icon: 'facebook' | 'linkedin' | 'youtube' | 'x' | 'instagram'
}

export interface NavLink {
  label: string
  href: string
}

export interface ContentBlock {
  type: 'heading' | 'paragraph'
  text: string
}

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  imageAlt: string
  excerpt: string
  featured: boolean
  body: ContentBlock[]
}

export interface TeamMember {
  name: string
  company: string
  image: string
  imageAlt: string
  socials: SocialLink[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ProjectItem {
  slug: string
  title: string
  location: string
  image: string
  imageAlt: string
  summary: string
}

export interface Testimonial {
  quote: string
  name: string
  detail: string
}

export interface SiteContent {
  settings: {
    name: string
    phoneDisplay: string
    phoneHref: string
    email: string
    address: string
    addressLines: string[]
    mapsHref: string
    copyright: string
    footerNote: string
    socials: SocialLink[]
  }
  navigation: NavLink[]
  hero: {
    eyebrow: string
    titleLines: string[]
    ctaLabel: string
    ctaHref: string
    awardLead: string
    awardEmphasis: string
    body: string
    image: string
    imageAlt: string
    badges: { kicker: string; value: string }[]
  }
  consultation: {
    title: string
    submitLabel: string
    successTitle: string
    successBody: string
    services: string[]
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
      service: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
  }
  trusted: {
    title: string
    logos: string[]
  }
  about: {
    eyebrow: string
    statValue: string
    statLabel: string
    lead: string
    rest: string
  }
  team: {
    eyebrow: string
    title: string
    members: TeamMember[]
  }
  faq: {
    eyebrow: string
    title: string
    contactLabel: string
    contactHref: string
    items: FaqItem[]
  }
  blog: {
    eyebrow: string
    title: string
    learnMoreLabel: string
    posts: BlogPost[]
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    items: ProjectItem[]
  }
  testimonials: {
    eyebrow: string
    title: string
    intro: string
    items: Testimonial[]
  }
  footer: {
    headline: string
    emailPlaceholder: string
    submitLabel: string
    newsletterSuccess: string
    quickLinksTitle: string
    servicesTitle: string
    contactTitle: string
    followTitle: string
    quickLinks: NavLink[]
    services: NavLink[]
  }
}

export interface SiteResponse {
  source: 'wordpress' | 'local'
  content: SiteContent
}
