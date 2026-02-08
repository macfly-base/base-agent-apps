import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ============================
   Fonts
============================ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ============================
   Metadata (SEO + Agents)
============================ */

export const metadata: Metadata = {
  title: {
    default: "Agent App Framework",
    template: "%s · Agent App",
  },
  description:
    "Framework pour applications agent-first avec IA, outils, mémoire et authentification avancée.",
  metadataBase: new URL("https://agent-app.dev"),
  openGraph: {
    title: "Agent App Framework",
    description:
      "Template moderne pour construire des agents IA autonomes.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ============================
   Root Layout
============================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-background
          text-foreground
        `}
      >
        {/* Providers globaux */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
