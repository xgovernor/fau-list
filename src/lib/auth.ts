import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GithubProvider],
  pages: {
    signIn: "/auth/login",
  },
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   session({ session, token }) {
  //     session.user.role = token.role;
  //     return session;
  //   },
  // },
});
