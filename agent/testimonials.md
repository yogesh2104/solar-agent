# Testimonials Module

## Features

* Admin adds testimonials
* Display on homepage

## Fields

* Client Name
* Company
* Feedback
* Image

## Prisma Schema

model Testimonial {
id        String @id @default(auto()) @map("_id") @db.ObjectId
name      String
company   String
feedback  String
image     String
}
