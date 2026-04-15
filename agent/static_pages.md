# Legal & Static Pages Module (Solar Website)

## Goal

Create all required legal and informational pages for a production-ready solar business website with compliance, trust, and SEO.

---

## Pages Included

* About Us
* Contact Us
* Privacy Policy
* Terms & Conditions
* Disclaimer
* Refund & Cancellation Policy
* Cookie Policy

---

# 🧾 1. About Us Page

## Sections

* Company Introduction
* Mission & Vision
* Our Journey
* Why Choose Us
* Team (optional)

## Content Guidelines

* Focus on trust + experience
* Mention:

  * Years of experience
  * Projects completed
  * Industries served

## SEO

* Keywords: solar company, industrial solar solutions, renewable energy India

---

# 📞 2. Contact Us Page

## Features

* Contact form
* Google Map embed
* Business details

## Fields

* Name
* Email
* Phone
* Message

## Additional Info

* Address
* Phone number
* Email
* Working hours

## Prisma (optional)

model ContactMessage {
id        String @id @default(auto()) @map("_id") @db.ObjectId
name      String
email     String
phone     String
message   String
createdAt DateTime @default(now())
}

---

# 🔒 3. Privacy Policy

## Must Include

* Information collected:

  * Name
  * Email
  * Phone
* How data is used
* Data protection measures
* Third-party tools (Google Analytics, etc.)
* User rights

## Compliance

* GDPR basics
* India IT laws (basic compliance)

---

# 📜 4. Terms & Conditions

## Sections

* Acceptance of terms
* Services offered
* User responsibilities
* Limitation of liability
* Intellectual property
* Termination clause

---

# ⚠️ 5. Disclaimer

## Content

* Information accuracy disclaimer
* No guarantee of savings
* External links disclaimer

---

# 💰 6. Refund & Cancellation Policy

## Include

* Project cancellation terms
* Refund timelines
* Payment conditions

---

# 🍪 7. Cookie Policy

## Include

* Types of cookies used
* Purpose (analytics, performance)
* User control options

---

# 🔐 Compliance Features

## Required

* Cookie consent banner
* Privacy checkbox in forms
* Terms acceptance for quotation/inquiry

---

# 📌 Footer Requirements

## Links

* About Us
* Contact
* Privacy Policy
* Terms & Conditions
* Disclaimer

---

# 🛠️ Implementation Notes

## Routing (Next.js App Router)

/about
/contact
/privacy-policy
/terms
/disclaimer
/refund-policy
/cookies

---

## UI Guidelines

* Clean typography
* Readable spacing
* Max width container (prose style)
* Dark/light theme compatible

---

## SEO

* Unique meta title for each page
* Proper heading structure (H1, H2)
* Internal linking

---

## Accessibility

* Proper labels
* Semantic HTML
* Focus states

---

## Security Best Practices

* Validate all form inputs (Zod)
* Sanitize user data
* Rate limit APIs

---

## Expected Output

* Fully functional legal pages
* SEO optimized
* Production ready
* Clean UI
