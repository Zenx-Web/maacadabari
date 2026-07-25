import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-1 text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
