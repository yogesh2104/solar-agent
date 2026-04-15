# Projects Module

## Features

* Add/Edit/Delete projects (Admin)
* Public listing
* Project detail page

## Fields

* Title
* Description
* Location
* Capacity (kW)
* Images
* Category (Industrial / Residential)

## Prisma Schema

model Project {
id          String @id @default(auto()) @map("_id") @db.ObjectId
title       String
description String
location    String
capacity    Int
category    String
images      String[]
createdAt   DateTime @default(now())
}
