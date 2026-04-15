# Project Suggestions and Feature Roadmap

This document summarizes the current project status and the most useful features to add next based on the existing codebase.

## Current Project Summary

The project already includes:

- A modern landing page
- Admin authentication and admin layout
- Blog management
- Project management in admin
- Contact form
- Quotation form
- Reviews with approval flow
- Testimonials
- Legal pages like privacy policy, terms, cookies, disclaimer, and refund policy

This means the project foundation is already strong. The next step is to focus on features that improve business value, lead conversion, content quality, and admin productivity.

## Highest Priority Features

### 1. Public Projects Module

The admin can create projects, but the public side is still incomplete.

What to add:

- Public `/projects` page
- Public `/projects/[slug]` detail page
- Filter by category such as residential, commercial, and industrial
- Filter by location
- Project image gallery
- Case study layout with problem, solution, capacity, savings, and outcome
- Working links from home page hero and projects section

Why this matters:

- Projects are one of the strongest trust-building features for a solar company
- Real case studies help convert visitors into leads
- Admin content becomes useful on the public website instead of staying inside the dashboard only

### 2. Lead Management System for Quotations and Contacts

At the moment, quotations and contacts are only stored and listed. There is no real lead pipeline.

What to add:

- Lead status for each inquiry
- Suggested statuses:
  - New
  - Contacted
  - Site Visit Planned
  - Proposal Sent
  - Won
  - Lost
- Assigned sales person
- Internal notes
- Follow-up date
- Lead source field
- Admin filters by status and date
- CSV export for leads
- Quick action buttons such as call, mark contacted, or archive

Why this matters:

- This turns the site from a simple brochure into a useful business tool
- It helps the company manage real sales activity
- It makes the admin dashboard much more valuable

### 3. Site Settings / Company Profile Management

Many important values are hardcoded in the UI right now.

What to add:

- Company phone number
- Company email
- Office address
- WhatsApp number
- Google Maps embed URL
- Hero section badge text
- Homepage stats values
- Social media links
- Footer content
- Working hours
- SEO defaults

Why this matters:

- Admin can update company information without editing code
- It makes the project reusable for real clients
- It reduces maintenance effort

### 4. SEO Improvements

Basic metadata exists, but the SEO setup is still limited.

What to add:

- `sitemap.ts`
- `robots.ts`
- Canonical URLs
- Open Graph metadata for all public pages
- Twitter metadata
- LocalBusiness schema markup
- Blog article schema
- Project case study schema
- Better metadata for About, Contact, and legal pages
- Dynamic social preview images if needed later

Why this matters:

- Solar businesses depend heavily on local search and organic visibility
- Better SEO helps bring in long-term leads at low cost
- Blog and project pages become more discoverable

### 5. Quote Calculator / ROI Estimator

The quote form is useful, but it can become much stronger with a calculator.

What to add:

- Monthly electricity bill based estimate
- Estimated system size
- Estimated annual savings
- Estimated payback period
- Carbon savings estimate
- Residential vs commercial mode
- Roof type selection
- Consumption pattern questions
- Subsidy or incentive information block
- CTA to request final proposal

Why this matters:

- Visitors get immediate value
- More users are likely to submit a quote after seeing a rough estimate
- It makes the website feel more premium and useful

## Medium Priority Features

### 6. Admin Dashboard Improvements

The admin dashboard exists, but it can be much more powerful.

What to add:

- Search for blogs, projects, leads, and contacts
- Pagination for large tables
- Filters by date and status
- More useful dashboard widgets
- Recently added items
- Pending approvals widget
- Lead conversion stats
- Sidebar links for every module including reviews and testimonials

Why this matters:

- It improves daily usability
- It helps admins move faster
- It keeps the panel scalable as data grows

### 7. Better Testimonial Management

Testimonials are present, but the management flow is basic.

What to add:

- Edit testimonial support
- Featured flag
- Manual sorting / ordering
- Approval flag if needed
- Upload image instead of only pasting URL
- Optional role, city, or company verification text

Why this matters:

- Testimonials become easier to maintain
- Featured testimonials can be curated for better trust and conversion

### 8. Dynamic Homepage Data

Some homepage sections are still static or placeholder driven.

What to add:

- Load stats from database or settings
- Load featured projects dynamically
- Load featured services dynamically or from settings
- Replace placeholder numbers with real values
- Use real company messaging instead of generic content

Why this matters:

- The homepage becomes more trustworthy
- Admin changes can reflect immediately on the public site
- The site looks more production ready

### 9. Contact Flow Upgrade

The contact form is useful but still minimal.

What to add:

- Phone number field
- Company name field
- Inquiry type field
- Preferred callback time
- Service interest field
- Email notification to admin
- Auto-reply email to customer

Why this matters:

- The business gets more useful lead information
- It improves follow-up quality
- Users receive better confirmation after submitting

### 10. Services Pages

Services are shown on the homepage but do not yet have dedicated detail pages.

What to add:

- `/services` page
- Individual service pages:
  - Residential Solar
  - Commercial Solar
  - Industrial Solar
  - Maintenance and AMC
- Service-specific CTAs
- FAQ section for each service

Why this matters:

- Better SEO targeting
- Better conversion for users with specific needs
- Makes the website feel more complete

## Nice-to-Have Features

### 11. FAQ Module

What to add:

- FAQ section on homepage
- Full FAQ page
- Admin-manageable questions and answers
- Service-specific FAQs

Why this matters:

- Reduces user hesitation
- Helps SEO
- Improves trust

### 12. Email and Notification System

What to add:

- Send admin email on new contact
- Send admin email on new quotation
- Send customer confirmation email
- Optional reminder emails for follow-ups

Why this matters:

- Faster response time
- Better customer experience
- Better operational flow

### 13. Analytics and Tracking

What to add:

- Google Analytics or similar
- Conversion tracking
- Form submission tracking
- CTA click tracking
- UTM support

Why this matters:

- Helps measure what is working
- Makes marketing decisions easier
- Shows which channels bring leads

### 14. Downloadable Proposal or Brochure

What to add:

- Company brochure download
- Sample solar proposal PDF
- Lead magnet in exchange for contact details

Why this matters:

- Improves lead capture
- Gives sales teams a better asset
- Builds trust with visitors

### 15. User Dashboard or Customer Portal

Optional future idea if this becomes a larger product.

What to add:

- User login for customers
- View quote history
- Track project progress
- Download documents
- Support ticket area

Why this matters:

- Useful if the project evolves beyond a marketing site
- Good long-term expansion idea

## Important Fixes to Address Alongside Features

These are not only feature ideas. They are also important cleanup points.

### 1. Public project pages are missing

- Projects exist in admin but not as a real public portfolio system

### 2. Testimonials admin has a bug

- There is an incorrect `fetchReviews()` call in the testimonials page and it should be cleaned up

### 3. Contact form captures limited business data

- Add phone and inquiry type at minimum

### 4. Auth proxy logic is commented out

- The route protection logic in `proxy.ts` should be reviewed and completed carefully

### 5. Some branding and location details are placeholder content

- Company details should be centralized and made editable

## Recommended Development Order

If the goal is maximum business value, build in this order:

1. Public Projects Module
2. Lead Management System
3. Site Settings / Company Profile Management
4. SEO Improvements
5. Quote Calculator / ROI Estimator
6. Admin Dashboard Improvements
7. Contact Flow Upgrade
8. Services Pages
9. FAQ Module
10. Notifications and Analytics

## Best Immediate Next Step

If only one feature should be started now, the best choice is:

### Public Projects Module

Reason:

- The data model already exists
- Admin project CRUD already exists
- The homepage already hints at projects
- It improves both trust and SEO
- It gives immediate visible value on the public website

## Final Note

This project is already beyond a basic starter. It has the right structure for a real solar company website and admin system. The best next work is not adding random pages, but turning the existing foundation into:

- A conversion-focused marketing site
- A practical lead-management tool
- A reusable production-ready client project

