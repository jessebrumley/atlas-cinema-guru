import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
    theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth?.user?.email;
    },
  },
});
