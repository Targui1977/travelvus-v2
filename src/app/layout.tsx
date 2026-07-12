import type { Metadata } from "next";
import { geistSans, instrumentSerif, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travelvus — Which really wins?",
  description:
    "A second opinion before you book. You found two flights. Travelvus compares the full trip and tells you which one really wins.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
