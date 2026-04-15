# Authentication & Roles

## Roles

* Admin
* User

## Features

* Login / Signup
* JWT or session-based auth
* Role-based access control

## Admin Permissions

* Manage projects
* Manage blogs
* View inquiries
* Add testimonials

## User Permissions

* Submit inquiries
* Request quotation

## Schema (Prisma)

model User {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  name           String
  email          String?  @unique
  hashedPassword String?
  image          String?
  uniqueId       String   @unique
  role           Role     @default(user)
  isActive       Boolean? @default(true)
  gender         Gender
  phone          String
  admin          User?    @relation("AdminToUser", fields: [adminId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  adminId        String?  @map("adminId") @db.ObjectId
  managedUsers   User[]   @relation("AdminToUser")
  accounts       Account[]
  sessions       Session[]
  Authenticator  Authenticator[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}


model PasswordResetToken {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String
  token   String   @unique
  expires DateTime

  @@unique([email, token])
}

model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.String
  session_state     String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String   @unique
  userId       String   @db.ObjectId
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  identifier String
  token      String
  expires    DateTime

  @@unique([identifier, token])
}

model Authenticator {
  credentialID         String  @id @map("_id")
  userId               String  @db.ObjectId
  providerAccountId    String
  credentialPublicKey  String
  counter              Int
  credentialDeviceType String
  credentialBackedUp   Boolean
  transports           String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, credentialID])
}
