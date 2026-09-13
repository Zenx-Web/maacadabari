import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Script from "next/script";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { SiteLoadingScreen } from "@/components/loading/SiteLoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MAAC Adabari",
    template: "%s | MAAC Adabari",
  },
  description:
    "MAAC Adabari - a premium AI-first creative education institute for Animation, VFX, Game Design, Digital Design, UI/UX and Broadcast.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-1 text-text-primary font-body">
        <Script
          id="site-loading-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{if(!sessionStorage.getItem('maac-visited')||new URLSearchParams(location.search).get('loading')){document.documentElement.classList.add('site-loading')}}catch(e){}`,
          }}
        />
        <CursorGlow />
        <SiteLoadingScreen />
        {children}
      </body>
    </html>
  );
}
