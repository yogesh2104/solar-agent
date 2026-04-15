# Get Quotation Module

## Features

* Form to request solar quote
* Advanced lead capture

## Fields

* Name
* Phone
* Location
* Electricity Bill
* Requirement Type

## Prisma Schema

model Quotation {
id          String @id @default(auto()) @map("_id") @db.ObjectId
name        String
phone       String
location    String
billAmount  Int
requirement String
createdAt   DateTime @default(now())
}
