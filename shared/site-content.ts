import type { SiteContent, SocialLink } from './types'

const companySocials: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  { label: 'X', href: 'https://x.com/', icon: 'x' },
]

const crewSocials: SocialLink[] = [
  { label: 'X', href: 'https://x.com/', icon: 'x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
]

const services = [
  'Tree Cutting',
  'Tree Trimming',
  'Tree Removal',
  'Tree Pruning',
  'Storm Cleanup',
  'Yard Cleanup',
  'Hedge Cutting',
]

export const localSiteContent = {
  settings: {
    name: 'Lawnx',
    phoneDisplay: '775-329-1531',
    phoneHref: 'tel:+17753291531',
    email: 'info@lawnx.com',
    address: '657 Twin Lakes Drive, Reno, NV 89523',
    addressLines: ['657 Twin Lakes Drive,', 'Reno, NV 89523'],
    mapsHref: 'https://maps.google.com/?q=657+Twin+Lakes+Drive,+Reno,+NV+89523',
    copyright: '© 2026 Lawnx Tree Cutting Services. All Rights Reserved.',
    footerNote: 'Built With Care | Powered By Nature',
    socials: companySocials,
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#consultation' },
    { label: 'Project', href: '/projects' },
    { label: 'Our Blog', href: '/#blog' },
    { label: 'Contact', href: '/#consultation' },
  ],
  hero: {
    eyebrow: 'Crafting Landscapes That Last a Lifetime',
    titleLines: ['Expert Lawn Care,', 'Lasting Beauty'],
    ctaLabel: 'Get Your Free Estimate',
    ctaHref: '/#consultation',
    awardLead: 'Award-Winning Landscaping',
    awardEmphasis: 'with 2,500+ Happy Clients.',
    body: 'At Lawnx, we take pride in being an award-winning landscaping company trusted by over 2,500 happy clients. From elegant garden designs to reliable lawn care...',
    image: '/images/hero-gardener.jpg',
    imageAlt: 'A gardener in overalls and a hat kneels among flowering plants.',
    badges: [
      { kicker: 'ISO', value: '9001' },
      { kicker: 'ISO', value: '14001' },
    ],
  },
  consultation: {
    title: 'Book a Free Consultation',
    submitLabel: 'Submit',
    successTitle: 'Request received',
    successBody: 'Thanks. A Lawnx coordinator will reach out to schedule your free consultation.',
    services,
    fields: {
      name: { label: 'Your name*', placeholder: 'Johan Smit' },
      email: { label: 'Email address*', placeholder: 'info@lawnx.com' },
      phone: { label: 'Phone number*', placeholder: '775-329-1531' },
      service: { label: 'Select a services*', placeholder: 'Select a services' },
      message: { label: 'Message*', placeholder: 'Describe your project' },
    },
  },
  trusted: {
    title: 'Trusted By 14K Companies Worldwide',
    logos: ['Lightbox', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Feather'],
  },
  about: {
    eyebrow: 'About Us',
    statValue: '25K',
    statLabel: 'Users Around World',
    lead: 'At Lawnx, we believe your outdoor space should be more than just a yard, it should be a place of beauty, comfort, and pride.',
    rest: 'With years of hands-on experience in landscaping and lawn care...',
  },
  team: {
    eyebrow: 'Our Team',
    title: 'Meet Our Experts',
    members: [
      {
        name: 'Patricia Sanders',
        company: 'Ezhe Source',
        image: '/images/team-patricia.jpg',
        imageAlt: 'Portrait of Patricia Sanders.',
        socials: crewSocials,
      },
      {
        name: 'Rodger Struck',
        company: 'Tennis Stationers',
        image: '/images/team-rodger.jpg',
        imageAlt: 'Portrait of Rodger Struck.',
        socials: crewSocials,
      },
      {
        name: 'Bradley Lawlor',
        company: 'Super Duper',
        image: '/images/team-bradley.jpg',
        imageAlt: 'Portrait of Bradley Lawlor.',
        socials: crewSocials,
      },
      {
        name: 'Kurt Bates',
        company: 'Mestow Co',
        image: '/images/team-kurt.jpg',
        imageAlt: 'Portrait of Kurt Bates.',
        socials: crewSocials,
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    contactLabel: 'Contact Us',
    contactHref: '/#consultation',
    items: [
      {
        question: 'What services does Lawnx provide?',
        answer: 'Lawnx provides tree cutting, tree trimming, tree removal, tree pruning, storm cleanup, yard cleanup, and hedge cutting. We also design and maintain lawns and gardens for homes and businesses around Reno.',
      },
      {
        question: 'How much does landscaping cost?',
        answer: 'Landscaping costs can vary widely depending on the size of your outdoor space, the complexity of the design, the types of plants and materials used, and whether you need additional features like irrigation systems, pathways, or lighting. At Lawnx, we believe in tailored solutions, so every project starts with a free consultation where we listen to your needs, assess your property, and create a custom plan.',
      },
      {
        question: 'Do you offer free consultations?',
        answer: 'Yes. Every project starts with a free consultation. We walk the property with you, listen to how you want to use the space, and outline a clear plan before any work begins.',
      },
      {
        question: 'Can you handle seasonal landscaping?',
        answer: 'Yes. We plan and maintain landscapes through the Reno seasons, from spring cleanup and planting to summer lawn care, fall leaf removal, and winter storm response.',
      },
      {
        question: 'How quickly can I get started?',
        answer: 'Most consultations can be scheduled within a few days. Smaller cleanups often start the same week, and larger installs are booked as soon as materials and crew time are confirmed.',
      },
    ],
  },
  blog: {
    eyebrow: 'Our Blog',
    title: 'Landscaping Tips Trends',
    learnMoreLabel: 'Learn More',
    posts: [
      {
        slug: 'landscaping-tips-and-inspiration',
        title: 'Landscaping Tips And Inspiration',
        author: 'Patricia Sanders',
        date: 'Sep 14, 2025',
        image: '/images/blog-hedges.jpg',
        imageAlt: 'A garden path bordered by trimmed flowering hedges.',
        excerpt: 'A useful yard starts with one clear idea: how you want to use the space.',
        featured: false,
        body: [
          {
            type: 'paragraph',
            text: 'A useful yard starts with one clear idea: how you want to use the space. Walk it in the morning and again in the late afternoon. Note where you want shade, where water sits after a storm, and which view you want to keep.',
          },
          {
            type: 'paragraph',
            text: 'From there, group plants by water need, leave room for a path you will actually use, and repeat a few leaf shapes so the garden feels calm. Inspiration is useful. A plan that fits your soil and your week is what makes it last.',
          },
          {
            type: 'heading',
            text: 'Start with the walk you already take',
          },
          {
            type: 'paragraph',
            text: 'The best new beds usually follow a route you already use, from the driveway to the door or from the patio to the gate. If a path feels awkward now, no amount of flowers will fix it. Set the route first, then plant along it.',
          },
        ],
      },
      {
        slug: 'expert-advice-greener-spaces',
        title: 'Expert Advice, Greener Spaces',
        author: 'Alex Buckmaster',
        date: 'Aug 27, 2025',
        image: '/images/blog-lawn.jpg',
        imageAlt: 'Close view of a healthy green lawn.',
        excerpt: 'Greener does not have to mean more water.',
        featured: true,
        body: [
          {
            type: 'paragraph',
            text: 'Greener does not have to mean more water. In Reno, the lawns that stay healthy are the ones cut a little higher, watered deeply and less often, and fed on a schedule instead of whenever the color fades.',
          },
          {
            type: 'paragraph',
            text: 'If a section of turf struggles every summer, that is information. It may want a different grass, a little more shade, or a planted bed instead of another season of reseeding. We would rather adjust the plan than keep treating the same spot.',
          },
          {
            type: 'heading',
            text: 'A simple summer check',
          },
          {
            type: 'paragraph',
            text: 'Look at the mower height, the time of day you water, and the spots that go pale first. Those three notes tell us more than a long list of products. Bring them to the consultation and we will build the plan around them.',
          },
        ],
      },
      {
        slug: 'seasonal-lawn-care-made-simple',
        title: 'Seasonal Lawn Care Made Simple',
        author: 'Bradley Lawlor',
        date: 'Sep 3, 2025',
        image: '/images/blog-planting.jpg',
        imageAlt: 'A gardener tending leafy plants in a raised bed.',
        excerpt: 'You do not need a complicated calendar. You need the right job in the right month.',
        featured: false,
        body: [
          {
            type: 'paragraph',
            text: 'Spring is for cleanup, soil, and the first feed. Summer is for mowing height, water, and watching for stress. Fall is the best time to seed, aerate, and plant trees while the ground is still warm. Winter is for storm checks and tool care.',
          },
          {
            type: 'paragraph',
            text: 'You do not need a complicated calendar. You need the right job in the right month. That is the whole system we use on maintenance routes.',
          },
          {
            type: 'heading',
            text: 'What to book next',
          },
          {
            type: 'paragraph',
            text: 'If the lawn is thin, fall is the window. If limbs are hanging over the roof, that is a pruning visit, not a mowing visit. Tell us which season you are in and we will tell you the one job that matters most right now.',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Recent outdoor work',
    intro: 'A few of the yards, lawns, and hedges the crew has recently brought back into shape around Reno.',
    items: [
      {
        slug: 'twin-lakes-front-garden',
        title: 'Twin Lakes Front Garden',
        location: 'Reno, NV',
        image: '/images/project-cottage.jpg',
        imageAlt: 'A cottage garden packed with flowers in front of a stone house.',
        summary: 'A new entry garden with drought-wise shrubs, a clear path to the door, and seasonal color that holds through summer.',
      },
      {
        slug: 'midtown-courtyard-lawn',
        title: 'Midtown Courtyard Lawn',
        location: 'Reno, NV',
        image: '/images/project-beds.jpg',
        imageAlt: 'A raised garden bed filled with herbs and leafy greens.',
        summary: 'A tired courtyard replaced with fresh planting beds, a clean edge, and an irrigation check so the new growth is not left to guess.',
      },
      {
        slug: 'south-reno-hedge-restore',
        title: 'South Reno Hedge Restore',
        location: 'Reno, NV',
        image: '/images/blog-hedges.jpg',
        imageAlt: 'Formal hedges lining a garden walk.',
        summary: 'Overgrown hedges brought back to a shape the homeowner can live with, plus a full yard cleanup before the next storm season.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What neighbors say',
    intro: 'Sample notes from recent consultations and cleanups. Replace these with the client’s real reviews in WordPress.',
    items: [
      {
        quote: 'They showed up when they said they would, explained the plan in plain language, and left the walkway cleaner than they found it.',
        name: 'Marisol Vega',
        detail: 'South Reno',
      },
      {
        quote: 'The consultation was actually useful. We left with a plan we could phase, not a pile of plants we did not need.',
        name: 'Chris Alden',
        detail: 'Midtown',
      },
      {
        quote: 'After the storm, the crew cleared the downed limbs and saved the oak we thought we had lost.',
        name: 'Denise Park',
        detail: 'Northwest Reno',
      },
    ],
  },
  footer: {
    headline: 'Safe, Fast & Affordable Tree Cutting Services',
    emailPlaceholder: 'Enter Your Email',
    submitLabel: 'Submit',
    newsletterSuccess: 'You’re on the list. We’ll send occasional lawn care notes.',
    quickLinksTitle: 'Quick Links',
    servicesTitle: 'Services',
    contactTitle: 'Contact Us',
    followTitle: 'Follow Us',
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#about' },
      { label: 'Services', href: '/#consultation' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/#blog' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/#consultation' },
    ],
    services: services.map((label) => ({
      label,
      href: `/?service=${encodeURIComponent(label)}#consultation`,
    })),
  },
} satisfies SiteContent
