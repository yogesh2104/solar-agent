# Solar Website Landing Page (Production Grade)

## Goal

Build a high-converting, modern landing page for a solar energy business with:

* Smooth scrolling
* Premium UI/UX
* Mobile-first responsive design
* Fast performance
* SEO optimized

---

## Tech Requirements

* Next.js (App Router)
* Tailwind CSS
* Framer Motion (animations)
* Lenis or smooth-scroll library
* ShadCN UI components

---

## Design System

### Colors (Clean Energy Theme)

* Primary: #16A34A (Green - sustainability)
* Secondary: #0EA5E9 (Blue - trust/tech)
* Accent: #F59E0B (Sunlight highlight)
* Background: #0F172A (Dark modern)
* Text: #E2E8F0 (Light readable)

### Typography

* Headings: Bold, large (text-4xl to text-6xl)
* Body: text-base / text-lg
* Font: Inter / Poppins

---

## Sections (Landing Flow)

### 1. Hero Section

* Full screen height
* Background: solar panels / gradient overlay
* Headline: “Power Your Future with Solar Energy”
* Subtext: Cost savings + sustainability
* CTA Buttons:

  * Get Free Quotation (primary)
  * View Projects (secondary)

### Features

* Animated entrance (fade + slide)
* Gradient overlay for readability

---

### 2. Stats Section

* Show credibility

Examples:

* 700+ kW Installed
* 100+ Projects
* 10+ Cities

### UI

* Cards with icons
* Subtle hover animation

---

### 3. Services Section

* Industrial Solar
* Residential Solar
* Maintenance

### UI

* 3-column grid
* Icons + short description
* Hover elevation effect

---

### 4. Projects Showcase

* Grid of recent projects
* Image + overlay details

### Features

* Hover reveal
* Click → project detail page

---

### 5. Why Choose Us

* Trust section

Points:

* High ROI
* Trusted by industries
* End-to-end service

### UI

* Split layout (image + text)

---

### 6. Testimonials

* Carousel slider

### Features

* Client feedback
* Smooth sliding animation

---

### 7. Blog Preview

* Latest 3 blogs
* SEO-focused content

---

### 8. Call To Action (CTA)

* Strong conversion section

Text:
“Start Saving on Electricity Today”

Button:

* Get Free Quote

---

### 9. Contact Section

* Simple form:

  * Name
  * Phone
  * Message

* Google Map embed

---

### 10. Footer

* Links
* Social icons
* Company info

---

## Animations

### Use Framer Motion

* Fade-in on scroll
* Stagger children animations
* Button hover scale

### Smooth Scroll

* Use Lenis
* Enable inertia scrolling
* Smooth anchor navigation

---

## Performance

* Use Next.js Image optimization
* Lazy load sections
* Use server components where possible

---

## SEO

* Meta title & description
* OpenGraph tags
* Structured data (Organization schema)

---

## Accessibility

* Proper contrast
* Keyboard navigation
* ARIA labels

---

## Extra Enhancements (Optional)

* Sticky navbar
* Dark/Light toggle
* WhatsApp floating button
* Scroll progress indicator

---

## Folder Structure Suggestion

/app
/page.tsx (Landing Page)
/components
Hero.tsx
Stats.tsx
Services.tsx
Projects.tsx
Testimonials.tsx
CTA.tsx
Footer.tsx

---

## Expected Output

* Fully responsive landing page
* Smooth animations
* Production-ready UI
* Clean reusable components
