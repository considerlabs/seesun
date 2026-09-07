import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { church } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: church.name,
    template: `%s | ${church.name}`,
  },
  description: church.tagline,
  openGraph: {
    title: church.name,
    description: church.tagline,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
