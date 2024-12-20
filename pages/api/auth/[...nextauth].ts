import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const defaultEmail = "user@example.com";
        const defaultPassword = "SecurePassword!2024";

        // Simulated authentication
        if (
          credentials?.email === defaultEmail &&
          credentials?.password === defaultPassword
        ) {
          return { id: "1", email: defaultEmail };
        }

        // Return null if the credentials don't match
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token}) {
      // Check if token and session.user exist
      if (token && "id" in token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Persist user id in the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
