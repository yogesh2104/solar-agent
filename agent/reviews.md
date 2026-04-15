# Reviews Module

## Features

* Users can submit reviews
* Admin approval system

## Fields

* Name
* Rating (1-5)
* Comment

## Prisma Schema

model Review {
id        String @id @default(auto()) @map("_id") @db.ObjectId
name      String
rating    Int
comment   String
approved  Boolean @default(false)
createdAt DateTime @default(now())
}
