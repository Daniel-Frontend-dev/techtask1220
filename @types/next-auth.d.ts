// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }

  interface User {
    id: string; // Customize user fields if needed
    email: string;
  }

  interface JWT {
    id: string;
  }
}
