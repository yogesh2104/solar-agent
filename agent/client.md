# Client Project Overview

This document explains what features are included in this project and how they work from a client and admin point of view.

## Project Type

This project is a solar company website with an admin dashboard.

It is designed to help the business:

- Present its services professionally
- Showcase projects and trust signals
- Capture new leads from the website
- Manage content such as blogs, projects, reviews, and testimonials
- Create and manage customer quotations

## Main Features

### 1. Landing Website

The public website includes the main business presentation pages.

Current public sections:

- Home page
- About page
- Contact page
- Get Quote page
- Blog listing and blog detail pages
- Legal pages such as privacy policy, terms, cookies, disclaimer, and refund policy

How it works:

- Visitors can browse the company website
- They can learn about the company, services, and expertise
- They can submit inquiries or request quotations

### 2. Contact Inquiry System

Visitors can submit messages from the contact form.

How it works:

- A user fills in the contact form on the website
- The form data is stored in the database
- Admin can view contact messages in the admin panel

Main purpose:

- Handle general business inquiries
- Capture customer interest from the public site

### 3. Public Quote Request System

Visitors can submit a quote request from the public quote form.

How it works:

- A user provides basic information such as:
  - Name
  - Phone
  - Email
  - Location
  - Monthly electricity bill
  - Requirement type
- The system stores this as a quotation lead in the database
- Admin can later open that lead and convert it into a full quotation

Main purpose:

- Capture early-stage leads from the website
- Give the sales/admin team a starting point for formal pricing

### 4. Admin Authentication

The admin dashboard is protected.

How it works:

- Only authenticated admin users can access admin routes
- Unauthorized users are redirected away from the admin area
- Admin login is handled through the authentication system already included in the project

Main purpose:

- Keep business and customer data secure
- Ensure only allowed users can manage content and quotations

### 5. Blog Management

Admins can manage blog content from the dashboard.

How it works:

- Admin can create new blog posts
- Admin can edit existing blog posts
- Admin can save posts as draft or publish them
- Published posts appear on the public website

Main purpose:

- Improve SEO
- Share solar knowledge and updates
- Build trust and industry authority

### 6. Project Management

Admins can manage solar projects from the dashboard.

How it works:

- Admin can create project entries
- Admin can update project details
- Admin can upload project images
- Admin can delete projects if needed

Main purpose:

- Showcase completed work
- Build trust through real project examples
- Support future public project case study pages

### 7. Reviews Management

Customers can submit reviews and admins can moderate them.

How it works:

- Public users submit a review
- The review is saved in the database with pending approval
- Admin can approve or reject reviews
- Approved reviews are shown on the public website

Main purpose:

- Build social proof
- Keep public feedback moderated and professional

### 8. Testimonials Management

Admin can manage featured testimonials.

How it works:

- Admin adds testimonial entries manually
- These testimonials are shown in the public site testimonial section
- Admin can remove testimonials when needed

Main purpose:

- Highlight selected customer success stories
- Strengthen trust on the homepage

## New Quotation Builder Feature

This project now includes an admin quotation builder.

### What It Does

Admin can now:

- Create a new quotation manually
- Open a quotation lead from the website and turn it into a full quotation
- Add customer details
- Add multiple products or services
- Set quantity for each item
- Set price for each item
- Add discount percentage for each item
- Automatically calculate subtotal, total discount, and final total
- Save the quotation
- Download the quotation as a PDF

### How the Quotation Flow Works

#### Step 1: Lead creation

There are two ways a quotation can begin:

- A public user fills the quote request form
- Admin creates a quotation directly from the admin dashboard

#### Step 2: Admin opens the quotation

In the admin dashboard:

- Admin goes to the Quotations section
- Admin sees all quotation entries
- If the quotation came from the public website, it can be edited and completed
- If the quotation was created by admin, it starts as a full draft quotation

#### Step 3: Admin adds quotation details

Admin can enter:

- Customer name
- Customer company
- Phone
- Email
- Address
- Project location
- Monthly bill
- Requirement details
- Quote number
- Status
- Valid until date
- Notes

#### Step 4: Admin adds line items

Admin can add multiple quotation items such as:

- Solar panels
- Inverter
- Mounting structure
- Installation charges
- Wiring
- Maintenance package

For each item, admin can define:

- Product name
- Description
- Quantity
- Unit price
- Discount percentage

The system automatically calculates:

- Line total for each item
- Subtotal
- Total discount
- Grand total

#### Step 5: PDF generation

After saving the quotation:

- Admin can download the quotation as a PDF
- The PDF includes:
  - Company header
  - Customer details
  - Quote information
  - Project summary
  - Product table
  - Discounts
  - Totals
  - Notes if provided

### Quotation Statuses

The quotation system supports status tracking.

Current statuses:

- Inquiry
- Draft
- Finalized

Meaning:

- Inquiry: basic lead/request stage
- Draft: quotation is being prepared
- Finalized: quotation is ready for customer sharing

## Admin Dashboard Modules

Current admin modules include:

- Dashboard overview
- Blogs
- Projects
- Quotations
- Contacts
- Reviews
- Testimonials

How it works:

- Dashboard gives a high-level view of system activity
- Each module is separated for easier management
- Admin can move between content, leads, and customer-facing assets

## Technical Workflow Summary

### Public side

- Visitors interact with the website
- Forms submit data to the backend
- Data is saved into the database
- Public content such as blogs and approved reviews is shown to visitors

### Admin side

- Admin signs in
- Admin manages content and business data
- Admin prepares quotations from captured leads
- Admin exports professional PDF quotations

## Business Value of This Project

This project is not only a marketing website. It also acts as a lightweight business operations tool.

It helps the company:

- Generate new leads
- Manage customer communication
- Publish content for SEO
- Present trust signals and case studies
- Prepare formal quotations for customers

## Current Best Use Case

This project is best suited for:

- Solar installation businesses
- Renewable energy companies
- Businesses that need a website plus a simple admin CRM-style workflow

## Future Expansion Possibilities

This project can later be extended with:

- Public project detail pages
- Better lead pipeline statuses
- Customer portal
- Email notifications
- Quote approval workflow
- Advanced analytics
- Site settings management

