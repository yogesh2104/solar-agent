import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as AuthOptions["adapter"],
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const fs = require("fs");
        const log = (msg: string) => {
          const timestamp = new Date().toISOString();
          fs.appendFileSync("auth-debug.log", `[${timestamp}] ${msg}\n`);
        };

        log(`Authorize called with credentials: ${JSON.stringify({ 
          email: credentials?.email, 
          hasPassword: !!credentials?.password 
        })}`);

        if (!credentials?.email || !credentials?.password) {
          log("Missing email or password");
          return null;
        }

        try {
          const user = await db.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            log(`No user found with email: ${credentials.email}`);
            return null;
          }

          log(`User found: ${user.email}, isActive: ${user.isActive}`);

          if (!user.hashedPassword) {
            log("User found but has no hashedPassword");
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          log(`Password valid: ${isPasswordValid}`);

          if (!isPasswordValid) {
            return null;
          }

          if (user.isActive === false) {
            log("User is deactivated");
            return null;
          }

          log("Authorize successful");
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            uniqueId: user.uniqueId,
          };
} catch (error: any) {
          log(`Authorize error: ${error?.message || error}`);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role;
        token.uniqueId = (user as { uniqueId?: string }).uniqueId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { uniqueId?: string }).uniqueId =
          token.uniqueId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions);
