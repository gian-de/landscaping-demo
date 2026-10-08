# Lawnx copy deck for WordPress

Use this file as the paste sheet for the WordPress admin. Each block names the field key the Nuxt site reads, the field type to create, where it shows on the site, and the copy to paste.

The homepage is one long page. Projects and testimonials are separate pages. Blog articles are normal WordPress posts.

## Before you paste

1. Create a page with the slug `home`.
2. Install Advanced Custom Fields and add a field group shown on that page.
3. Create each field with the key in backticks. Keys are case-sensitive.
4. Upload every image in the media checklist and attach it to the matching image field.
5. In the site environment, set `NUXT_PUBLIC_WP_URL` to the WordPress address, with no slash at the end.

Optional custom post types, if you would rather manage lists as their own posts:

| Post type slug | Replaces |
| --- | --- |
| `team` | Team cards. Title is the name. Excerpt or `company` is the company. Featured image is the photo. |
| `faq` | FAQ items. Title is the question. Content is the answer. |
| `project` | Project cards. Title, excerpt, featured image, and an optional `location` field. |

Blog posts replace the three homepage articles. The second newest post is the green featured card. Skip the default “Hello world!” post; the site ignores it.

If a field is empty, the site keeps the copy already in this file.

---

## Media library

Upload these files, then point the image fields at them. Replace them with the client’s own photos when you have them.

| File on the site | Suggested media name | Alt text | Used for |
| --- | --- | --- | --- |
| `public/images/hero-gardener.jpg` | Hero gardener | A gardener in overalls and a hat kneels among flowering plants. | Homepage hero |
| `public/images/team-patricia.jpg` | Patricia Sanders | Portrait of Patricia Sanders. | Team card |
| `public/images/team-rodger.jpg` | Rodger Struck | Portrait of Rodger Struck. | Team card |
| `public/images/team-bradley.jpg` | Bradley Lawlor | Portrait of Bradley Lawlor. | Team card |
| `public/images/team-kurt.jpg` | Kurt Bates | Portrait of Kurt Bates. | Team card |
| `public/images/blog-hedges.jpg` | Hedge path | A garden path bordered by trimmed flowering hedges. | Blog and project |
| `public/images/blog-lawn.jpg` | Green lawn | Close view of a healthy green lawn. | Featured blog card |
| `public/images/blog-planting.jpg` | Planting beds | A gardener tending leafy plants in a raised bed. | Blog card |
| `public/images/project-cottage.jpg` | Cottage garden | A cottage garden packed with flowers in front of a stone house. | Project card |
| `public/images/project-beds.jpg` | Raised beds | A raised garden bed filled with herbs and leafy greens. | Project card |

Photos currently in the repo are Unsplash stand-ins so the layout can be reviewed before the client’s library is uploaded.

---

## 1. Site settings

These show in the green top bar, the Call Now button, the footer, and the form placeholders.

### Site name

- Field key: `site_name`
- Type: Text
- Appears: Logo wordmark is drawn by the site. This name is used in social link labels.

```
Lawnx
```

### Phone, as people should see it

- Field key: `phone_display`
- Type: Text
- Appears: Top of the header and footer contact column

```
775-329-1531
```

### Phone link

- Field key: `phone_href`
- Type: Text
- Appears: The Call Now button and every phone link

```
tel:+17753291531
```

### Email

- Field key: `email`
- Type: Email
- Appears: Top bar and footer

```
info@lawnx.com
```

### Street address, one line

- Field key: `address`
- Type: Text
- Appears: Green top bar

```
657 Twin Lakes Drive, Reno, NV 89523
```

### Copyright line

- Field key: `copyright`
- Type: Text
- Appears: Bottom left of the footer

```
© 2026 Lawnx Tree Cutting Services. All Rights Reserved.
```

### Footer tagline

- Field key: `footer_note`
- Type: Text
- Appears: Bottom right of the footer

```
Built With Care | Powered By Nature
```

### Social profiles

Replace the placeholder homepages with the client’s real profiles. Icons, in order: Facebook, LinkedIn, YouTube, X.

| Network | Placeholder to replace |
| --- | --- |
| Facebook | `https://www.facebook.com/` |
| LinkedIn | `https://www.linkedin.com/` |
| YouTube | `https://www.youtube.com/` |
| X | `https://x.com/` |

---

## 2. Header navigation

The header labels are fixed in this order. Point them at these addresses.

| Label | Address |
| --- | --- |
| Home | `/` |
| About | `/#about` |
| Services | Opens the service list. Each service jumps to the consultation form with that service selected. |
| Project | `/projects` |
| Our Blog | `/#blog` |
| Contact | `/#consultation` |

### Services in the dropdown and the form

- Field key: `services`
- Type: Repeater, one text sub-field named `label`
- Appears: Header Services menu, consultation dropdown, footer Services column

Paste one service per row:

```
Tree Cutting
Tree Trimming
Tree Removal
Tree Pruning
Storm Cleanup
Yard Cleanup
Hedge Cutting
```

---

## 3. Homepage hero

### Eyebrow

- Field key: `hero_eyebrow`
- Type: Text
- Appears: Small green line above the main headline

```
Crafting Landscapes That Last a Lifetime
```

### Headline

- Field key: `hero_title`
- Type: Textarea
- Appears: Large headline. Put a line break where the second line starts.

```
Expert Lawn Care,
Lasting Beauty
```

### Estimate button

- Field key: `hero_cta_label`
- Type: Text
- Appears: Lime button under the headline. It scrolls to the consultation form.

```
Get Your Free Estimate
```

### Award line

- Field key: `hero_award_lead`
- Type: Text
- Appears: Bold line beside the ISO seals

```
Award-Winning Landscaping
```

- Field key: `hero_award_emphasis`
- Type: Text
- Appears: Second line of that award block

```
with 2,500+ Happy Clients.
```

### Hero paragraph

- Field key: `hero_body`
- Type: Textarea
- Appears: Under the award line. The ellipsis is part of the layout.

```
At Lawnx, we take pride in being an award-winning landscaping company trusted by over 2,500 happy clients. From elegant garden designs to reliable lawn care...
```

### Hero image

- Field key: `hero_image`
- Type: Image
- Alt field: `hero_image_alt`
- Appears: Wide photo behind the consultation card

Alt text:

```
A gardener in overalls and a hat kneels among flowering plants.
```

### ISO seals

These two seals are part of the layout. The values below match the design.

| Seal | Kicker | Value |
| --- | --- | --- |
| First | ISO | 9001 |
| Second | ISO | 14001 |

---

## 4. Consultation form

The green card overlaps the hero photo on desktop and sits under the photo on a phone.

### Card title

- Field key: `consultation_title`
- Type: Text

```
Book a Free Consultation
```

### Submit button

- Field key: `consultation_submit_label`
- Type: Text

```
Submit
```

### Success title

- Field key: `consultation_success_title`
- Type: Text

```
Request received
```

### Success message

- Field key: `consultation_success_body`
- Type: Textarea

```
Thanks. A Lawnx coordinator will reach out to schedule your free consultation.
```

### Field labels and placeholders

The labels already include the asterisk from the design. Placeholders are sample text inside the inputs, not real submissions.

| Field | Label | Placeholder field key | Placeholder |
| --- | --- | --- | --- |
| Name | Your name* | `field_name_placeholder` | Johan Smit |
| Email | Email address* | `field_email_placeholder` | info@lawnx.com |
| Phone | Phone number* | `field_phone_placeholder` | 775-329-1531 |
| Service | Select a services* | `field_service_placeholder` | Select a services |
| Message | Message* | `field_message_placeholder` | Describe your project |

The service dropdown uses the same `services` list from section 2.

---

## 5. Trusted by

### Heading

- Field key: `trusted_title`
- Type: Text
- Appears: Centered line under the hero

```
Trusted By 14K Companies Worldwide
```

### Logo names

- Field key: `trusted_logos`
- Type: Repeater, text sub-field `label`
- Appears: Scrolling gray wordmarks. These are placeholder brands from the design.

```
Lightbox
Logoipsum
Logoipsum
Logoipsum
Logoipsum
Feather
```

Replace the names when the client has real partner logos. Image logos can be swapped in later; the current row is wordmarks plus simple marks.

---

## 6. About

### Eyebrow

- Field key: `about_eyebrow`
- Type: Text

```
About Us
```

### Stat

- Field key: `about_stat_value`
- Type: Text

```
25K
```

- Field key: `about_stat_label`
- Type: Text

```
Users Around World
```

### Lead sentence

- Field key: `about_lead`
- Type: Textarea
- Appears: Dark bold sentence

```
At Lawnx, we believe your outdoor space should be more than just a yard, it should be a place of beauty, comfort, and pride.
```

### Following sentence

- Field key: `about_rest`
- Type: Textarea
- Appears: Lighter sentence after the lead. The ellipsis matches the design.

```
With years of hands-on experience in landscaping and lawn care...
```

### Optional longer about

Not on the homepage unless you paste it into `about_rest` in place of the teaser.

```
With years of hands-on experience in landscaping and lawn care, our crew treats every yard as a place people actually use. We design, plant, prune, and maintain with the Reno climate in mind, and we stay after the install so the work keeps looking the way it did on day one.
```

---

## 7. Team

### Section label

- Field key: `team_eyebrow`
- Type: Text

```
Our Team
```

### Section title

- Field key: `team_title`
- Type: Text

```
Meet Our Experts
```

### People

- Field key: `team_members`
- Type: Repeater
- Sub-fields: `name` (text), `company` (text), `photo` (image), `image_alt` (text)

Or create one `team` post per person.

| Name | Company | Photo | Alt text |
| --- | --- | --- | --- |
| Patricia Sanders | Ezhe Source | team-patricia.jpg | Portrait of Patricia Sanders. |
| Rodger Struck | Tennis Stationers | team-rodger.jpg | Portrait of Rodger Struck. |
| Bradley Lawlor | Super Duper | team-bradley.jpg | Portrait of Bradley Lawlor. |
| Kurt Bates | Mestow Co | team-kurt.jpg | Portrait of Kurt Bates. |

The company names are placeholders from the reference design. Replace them with the real crew before launch. The green arrow on each card asks for a consult with that person.

---

## 8. FAQ

### Section label

- Field key: `faq_eyebrow`
- Type: Text

```
FAQ
```

### Section title

- Field key: `faq_title`
- Type: Text

```
Frequently Asked Questions
```

### Contact button on the answer panel

- Field key: `faq_contact_label`
- Type: Text

```
Contact Us
```

### Questions

- Field key: `faqs`
- Type: Repeater
- Sub-fields: `question` (text), `answer` (textarea)

The second question is open when the page loads.

#### What services does Lawnx provide?

```
Lawnx provides tree cutting, tree trimming, tree removal, tree pruning, storm cleanup, yard cleanup, and hedge cutting. We also design and maintain lawns and gardens for homes and businesses around Reno.
```

#### How much does landscaping cost?

```
Landscaping costs can vary widely depending on the size of your outdoor space, the complexity of the design, the types of plants and materials used, and whether you need additional features like irrigation systems, pathways, or lighting. At Lawnx, we believe in tailored solutions, so every project starts with a free consultation where we listen to your needs, assess your property, and create a custom plan.
```

#### Do you offer free consultations?

```
Yes. Every project starts with a free consultation. We walk the property with you, listen to how you want to use the space, and outline a clear plan before any work begins.
```

#### Can you handle seasonal landscaping?

```
Yes. We plan and maintain landscapes through the Reno seasons, from spring cleanup and planting to summer lawn care, fall leaf removal, and winter storm response.
```

#### How quickly can I get started?

```
Most consultations can be scheduled within a few days. Smaller cleanups often start the same week, and larger installs are booked as soon as materials and crew time are confirmed.
```

---

## 9. Blog

### Section label

- Field key: `blog_eyebrow`
- Type: Text

```
Our Blog
```

### Section title

- Field key: `blog_title`
- Type: Text

```
Landscaping Tips Trends
```

### Card button

- Field key: `blog_learn_more_label`
- Type: Text

```
Learn More
```

### Posts

Create these as Posts. Set the featured image and alt text from the media table. The middle post is the green card.

#### Landscaping Tips And Inspiration

- Slug: `landscaping-tips-and-inspiration`
- Author: Patricia Sanders
- Date: Sep 14, 2025
- Featured image: hedge path
- Excerpt: A useful yard starts with one clear idea: how you want to use the space.

```
A useful yard starts with one clear idea: how you want to use the space. Walk it in the morning and again in the late afternoon. Note where you want shade, where water sits after a storm, and which view you want to keep.

From there, group plants by water need, leave room for a path you will actually use, and repeat a few leaf shapes so the garden feels calm. Inspiration is useful. A plan that fits your soil and your week is what makes it last.

Start with the walk you already take

The best new beds usually follow a route you already use, from the driveway to the door or from the patio to the gate. If a path feels awkward now, no amount of flowers will fix it. Set the route first, then plant along it.
```

Make “Start with the walk you already take” a heading.

#### Expert Advice, Greener Spaces

- Slug: `expert-advice-greener-spaces`
- Author: Alex Buckmaster
- Date: Aug 27, 2025
- Featured image: green lawn
- This is the green featured card.
- Excerpt: Greener does not have to mean more water.

```
Greener does not have to mean more water. In Reno, the lawns that stay healthy are the ones cut a little higher, watered deeply and less often, and fed on a schedule instead of whenever the color fades.

If a section of turf struggles every summer, that is information. It may want a different grass, a little more shade, or a planted bed instead of another season of reseeding. We would rather adjust the plan than keep treating the same spot.

A simple summer check

Look at the mower height, the time of day you water, and the spots that go pale first. Those three notes tell us more than a long list of products. Bring them to the consultation and we will build the plan around them.
```

Make “A simple summer check” a heading.

#### Seasonal Lawn Care Made Simple

- Slug: `seasonal-lawn-care-made-simple`
- Author: Bradley Lawlor
- Date: Sep 3, 2025
- Featured image: planting beds
- Excerpt: You do not need a complicated calendar. You need the right job in the right month.

```
Spring is for cleanup, soil, and the first feed. Summer is for mowing height, water, and watching for stress. Fall is the best time to seed, aerate, and plant trees while the ground is still warm. Winter is for storm checks and tool care.

You do not need a complicated calendar. You need the right job in the right month. That is the whole system we use on maintenance routes.

What to book next

If the lawn is thin, fall is the window. If limbs are hanging over the roof, that is a pruning visit, not a mowing visit. Tell us which season you are in and we will tell you the one job that matters most right now.
```

Make “What to book next” a heading.

---

## 10. Projects page

Address: `/projects`

- Field key: `projects_eyebrow`

```
Projects
```

- Field key: `projects_title`

```
Recent outdoor work
```

- Field key: `projects_intro`

```
A few of the yards, lawns, and hedges the crew has recently brought back into shape around Reno.
```

- Field key: `projects`
- Type: Repeater
- Sub-fields: `title`, `slug`, `location`, `summary`, `image`, `image_alt`

| Title | Slug | Location | Image | Summary |
| --- | --- | --- | --- | --- |
| Twin Lakes Front Garden | twin-lakes-front-garden | Reno, NV | Cottage garden | A new entry garden with drought-wise shrubs, a clear path to the door, and seasonal color that holds through summer. |
| Midtown Courtyard Lawn | midtown-courtyard-lawn | Reno, NV | Raised beds | A tired courtyard replaced with fresh planting beds, a clean edge, and an irrigation check so the new growth is not left to guess. |
| South Reno Hedge Restore | south-reno-hedge-restore | Reno, NV | Hedge path | Overgrown hedges brought back to a shape the homeowner can live with, plus a full yard cleanup before the next storm season. |

---

## 11. Testimonials page

Address: `/testimonials`

- Field key: `testimonials_eyebrow`

```
Testimonials
```

- Field key: `testimonials_title`

```
What neighbors say
```

- Field key: `testimonials_intro`

```
Sample notes from recent consultations and cleanups. Replace these with the client’s real reviews in WordPress.
```

- Field key: `testimonials`
- Type: Repeater
- Sub-fields: `quote`, `name`, `detail`

### Marisol Vega — South Reno

```
They showed up when they said they would, explained the plan in plain language, and left the walkway cleaner than they found it.
```

### Chris Alden — Midtown

```
The consultation was actually useful. We left with a plan we could phase, not a pile of plants we did not need.
```

### Denise Park — Northwest Reno

```
After the storm, the crew cleared the downed limbs and saved the oak we thought we had lost.
```

---

## 12. Footer

### Headline

- Field key: `footer_headline`
- Type: Text

```
Safe, Fast & Affordable Tree Cutting Services
```

### Newsletter field

- Field key: `footer_email_placeholder`
- Type: Text

```
Enter Your Email
```

- Field key: `footer_submit_label`
- Type: Text

```
Submit
```

- Field key: `footer_newsletter_success`
- Type: Text

```
You’re on the list. We’ll send occasional lawn care notes.
```

### Quick links

| Label | Address |
| --- | --- |
| Home | `/` |
| About Us | `/#about` |
| Services | `/#consultation` |
| Projects | `/projects` |
| Blog | `/#blog` |
| Testimonials | `/testimonials` |
| Contact | `/#consultation` |

### Footer contact

Uses the phone, email, and address from section 1. The address wraps like this:

```
657 Twin Lakes Drive,
Reno, NV 89523
```

### Column titles

| Column | Title |
| --- | --- |
| Links | Quick Links |
| Services | Services |
| Contact | Contact Us |
| Social | Follow Us |

---

## Field key index

Create these ACF keys on the Home page if you want the site to pick the copy up automatically.

`site_name` `phone_display` `phone_href` `email` `address` `copyright` `footer_note` `services` `hero_eyebrow` `hero_title` `hero_cta_label` `hero_award_lead` `hero_award_emphasis` `hero_body` `hero_image` `hero_image_alt` `consultation_title` `consultation_submit_label` `consultation_success_title` `consultation_success_body` `field_name_placeholder` `field_email_placeholder` `field_phone_placeholder` `field_service_placeholder` `field_message_placeholder` `trusted_title` `trusted_logos` `about_eyebrow` `about_stat_value` `about_stat_label` `about_lead` `about_rest` `team_eyebrow` `team_title` `team_members` `faq_eyebrow` `faq_title` `faq_contact_label` `faqs` `blog_eyebrow` `blog_title` `blog_learn_more_label` `projects_eyebrow` `projects_title` `projects_intro` `projects` `testimonials_eyebrow` `testimonials_title` `testimonials_intro` `testimonials` `footer_headline` `footer_email_placeholder` `footer_submit_label` `footer_newsletter_success`
