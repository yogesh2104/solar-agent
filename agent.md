# ELIZ ENERGY — `agent.md`

## Project Goal

Transform the existing ELIZ ENERGY website into a premium light-mode renewable energy platform inspired by:

* Apple
* Tesla Energy
* Linear
* Rivian
* Arc Browser

IMPORTANT:

* DO NOT change content
* DO NOT change page structure
* DO NOT rewrite sections
* DO NOT change routing
* DO NOT remove SEO structure
* ONLY improve:

  * visual quality
  * spacing
  * typography
  * animations
  * interactions
  * premium feel
  * enterprise trust
  * modern UI consistency

Current site configuration and content must remain intact. 

---

# WEBSITE STYLE DIRECTION

## Theme

LIGHT MODE ONLY

NO dark mode.

The website should feel:

* Premium
* Bright
* Clean
* Modern
* Minimal
* Enterprise-grade
* Sustainable
* Trustworthy
* Cinematic but soft

Visual feel:

```txt
Apple + Tesla Energy + Linear + premium renewable infrastructure
```

---

# BRAND COLOR SYSTEM

Use logo colors as foundation.

## Primary Colors

### White Background

```css
#FFFFFF
```

### Soft Background

```css
#F7FAF9
```

### Secondary Surface

```css
#EEF4F1
```

### Premium Green

```css
#22C55E
```

### Soft Green

```css
#4ADE80
```

### Solar Yellow

```css
#FACC15
```

### Warm Yellow Accent

```css
#FDE047
```

### Heading Color

```css
#0F172A
```

### Paragraph Color

```css
#475569
```

### Border Color

```css
rgba(15,23,42,0.08)
```

---

# GLOBAL DESIGN RULES

## Layout

* Large whitespace
* Clean spacing hierarchy
* Soft rounded corners
* Minimal enterprise UI
* Consistent section rhythm
* Premium content width
* Strong visual hierarchy

---

# TYPOGRAPHY

## Fonts

### Headings

Use:

* Satoshi
* General Sans
* SF Pro Display

### Body

Use:

* Inter
* Plus Jakarta Sans

---

# TYPOGRAPHY SCALE

## Headings

```txt
Hero:
72px–88px desktop

Section headings:
44px–56px

Cards:
22px–28px
```

## Paragraphs

```txt
18px–20px
line-height: 1.7
```

---

# VISUAL DIRECTION

## Hero Feel

The hero should feel:

* Premium
* Bright
* Airy
* Cinematic
* Sustainable
* Clean energy focused

Avoid:

* Heavy dark overlays
* Neon effects
* Hacker aesthetics
* Over-saturated gradients
* Excessive animations

---

# HERO SECTION VIDEO

## Hero Video Direction

Use:

* Bright cinematic solar visuals
* Sunrise lighting
* Soft sunlight reflections
* Premium aerial drone shots
* Indian solar infrastructure
* Smooth movement

Add:

* Soft white gradient overlay
* Text readability layer
* Floating glass cards

---

# PREMIUM UI SYSTEM

## Cards

Use soft glassmorphism.

### Card Style

```css
background: rgba(255,255,255,0.72);
backdrop-filter: blur(18px);

border: 1px solid rgba(15,23,42,0.06);

box-shadow:
0 10px 40px rgba(15,23,42,0.06);

border-radius: 28px;
```

---

# LIGHTING EFFECTS

## Soft Green Glow

```css
box-shadow:
0 0 80px rgba(34,197,94,0.10);
```

## Soft Yellow Glow

```css
box-shadow:
0 0 60px rgba(250,204,21,0.08);
```

---

# BACKGROUND STYLE

Use layered backgrounds:

* White
* Soft gradients
* Light blur effects
* Soft radial glows
* Subtle noise texture

Example:

```css
background:
radial-gradient(circle at top right,
rgba(34,197,94,0.08),
transparent 40%),

radial-gradient(circle at bottom left,
rgba(250,204,21,0.06),
transparent 40%);
```

---

# ANIMATION SYSTEM

Use:

* Framer Motion
* Lenis smooth scrolling
* GPU accelerated transforms

---

# FRAMER MOTION ANIMATIONS

## Hero

### Heading

```txt
- Word-by-word reveal
- Fade-up animation
- Soft opacity transitions
```

### Hero Cards

```txt
- Floating movement
- Soft hover lift
- Smooth scale effect
```

### CTA Buttons

```txt
- Glow on hover
- Slight scale animation
- Smooth background transition
```

---

# SECTION ANIMATIONS

## Scroll Reveal

```txt
opacity: 0 → 1
y: 30 → 0
duration: 0.7s
ease: smooth
```

---

# IMAGE ANIMATIONS

```txt
- Slow zoom-in
- Soft parallax
- Fade reveal
```

---

# MICRO INTERACTIONS

Add:

* Magnetic buttons
* Cursor glow
* Hover lift
* Animated underline
* Smooth icon motion
* Soft hover shadows
* Gradient light sweep

---

# NAVBAR

## Navbar Style

Requirements:

* Sticky transparent navbar
* Blur effect on scroll
* White glass effect
* Rounded CTA button
* Smooth transitions

### Navbar CSS

```css
background: rgba(255,255,255,0.72);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(15,23,42,0.06);
```

---

# BUTTON SYSTEM

## Primary Button

```txt
- Green gradient
- Soft glow
- Rounded full
- Premium hover animation
```

## Secondary Button

```txt
- White glass style
- Soft border
- Hover elevation
```

---

# ALL PAGES MUST MATCH DESIGN SYSTEM

Apply SAME visual language across:

```txt
/
about
/blog
/blog/[slug]
/contact
/cookies
/disclaimer
/faq
/privacy-policy
/terms
/products
/services
/maintenance
```

---

# PAGE DESIGN RULES

## About Page

* Premium founder section
* Timeline animation
* Statistics counters
* Mission/vision cards
* Soft gradient backgrounds

---

# Blog Listing

## `/blog`

Requirements:

* Premium editorial layout
* Large featured article
* Clean grid system
* Smooth hover effects
* Reading-time display
* Modern category filters

---

# Blog Detail

## `/blog/[slug]`

Requirements:

* Apple-style article layout
* Large hero image
* Sticky progress indicator
* Clean typography
* Glass share buttons
* Premium markdown styling
* Better code blocks
* Smooth image reveal animations

---

# Contact Page

Requirements:

* Premium contact cards
* Working-hours logic
* Soft map section
* Floating CTA card
* Glass form design

---

# Legal Pages

## `/cookies`

## `/privacy-policy`

## `/terms`

## `/disclaimer`

Requirements:

* Minimal clean typography
* Better spacing
* Sticky table of contents
* Premium readability
* Soft section separators

---

# FAQ PAGE

Requirements:

* Modern accordion
* Smooth open animation
* Category filters
* Better spacing
* Premium hover states

---

# CONTACT VISIBILITY LOGIC

IMPORTANT:

Phone and email should ONLY appear during working hours.

Working hours from config:

```txt
11am to 5pm IST
```

Config reference: 

---

# CONTACT LOGIC REQUIREMENT

## Behavior

### During Working Hours

Show:

* phone number
* whatsapp
* email

### Outside Working Hours

Hide:

* phone
* whatsapp
* email

Instead show:

```txt
Our support team is currently offline.

Working hours:
11:00 AM – 5:00 PM IST

Please leave a message and we will get back to you during business hours give button to contact us.
```

---

# NEXT.JS IMPLEMENTATION REQUIREMENT

## Create Utility

```txt
/utils/isBusinessHours.ts
```

Logic:

```ts
- Detect Indian Standard Time
- Check if current time is between 11 AM and 5 PM
- Return boolean
```

---

# COMPONENT REQUIREMENT

## Create Component

```txt
/components/contact/contact-availability.tsx
```

Responsibilities:

* Display contact info only during business hours
* Show fallback business-hours message otherwise
* Fully reusable
* Server-safe
* Hydration-safe

---

# PROJECT STACK

Use existing stack only.

Detected stack:

* Next.js 16
* React 19
* Tailwind v4
* Framer Motion
* Lenis
* shadcn/ui
* TypeScript
* Prisma if any DB used

---

# PERFORMANCE REQUIREMENTS

IMPORTANT:

* Maintain fast loading
* Use lazy loading
* Optimize images
* Use GPU transforms
* Avoid animation jank
* Keep Lighthouse high

Target:

```txt
Performance: 95+
Accessibility: 95+
SEO: 100
Best Practices: 100
```

---

# FINAL CODEX TASK

```txt
Redesign the complete ELIZ ENERGY website into a premium light-mode renewable energy platform inspired by Apple and Tesla Energy.

DO NOT change:
- content
- routes
- structure
- SEO copy
- sections

ONLY improve:
- UI
- motion
- spacing
- typography
- lighting
- animations
- premium feel
- consistency

Use:
- Framer Motion
- Tailwind CSS
- Existing stack only

Apply the SAME premium design language consistently across pages and devices for responsive design:
- Home
- About
- Blog
- Blog detail
- Contact
- FAQ
- Legal pages

Implement working-hours contact visibility logic using IST timezone.

The final website should feel:
- Premium
- Bright
- Modern
- Sustainable
- Enterprise-grade
- Minimal
- Trustworthy
- World-class
```
