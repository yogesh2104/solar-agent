# Blog Module

## Features

* Admin CRUD blog
* SEO optimized

## Fields

* Title
* Slug
* Content
* Featured Image for image use uploadthing 

## Prisma Schema

model Blog {
    id          String   @id @default(auto()) @map("_id") @db.ObjectId
    title       String
    tag         String[]
    author      String
    metadata    String
    isPublished Boolean  @default(false)
    slug        String   @unique
    content     String
    image       String
    createdAt   DateTime @default(now())
}
