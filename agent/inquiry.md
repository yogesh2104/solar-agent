# Inquiry Module

## Features

* Contact form
* Stored in DB
* Admin dashboard view

## Fields

* Name
* Email
* Phone
* Message

## Prisma Schema

model Inquiry {
id        String @id @default(auto()) @map("_id") @db.ObjectId
name      String
email     String
phone     String
message   String
createdAt DateTime @default(now())
}
