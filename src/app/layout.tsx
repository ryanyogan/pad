import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { auth } from "@/lib/auth";
import { Providers } from "@/providers/providers";
import "@/styles/globals.css";
import "@/styles/normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pad",
  description: "Liveblocks, YJS, and Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
