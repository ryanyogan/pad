import { getUser } from "@/db/getUser";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const NEXT_AUTH_SECRET =
  process.env.NEXT_AUTH_SECRET ||
  "p49RDzU36fidumaF7imGnzyhRSPWoffNjDOleU77SM4=";

export let {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: NEXT_AUTH_SECRET,
  callbacks: {
    session: async ({ session }: { session: any }) => {
      let userInfo = await getUser(session.user.email);

      if (!userInfo) {
        throw new Error("User not found");
      }

      session.user.info = userInfo;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  ...authConfig,
});

export function getProviders() {
  let providers: Record<string, string> = {};

  for (let provider of authConfig.providers) {
    if ("id" in provider) {
      providers[provider.id] = provider.name;
    }
  }

  return providers;
}
