import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseFit.AI - AI-Powered Personal Fitness Training",
  description: "Transform your fitness journey with AI-powered personal training. Get personalized workout plans, nutrition guidance, and real-time coaching that adapts to your goals.",
  keywords: ["fitness", "AI", "personal training", "workout", "nutrition", "health"],
  authors: [{ name: "PulseFit.AI Team" }],
  creator: "PulseFit.AI",
  publisher: "PulseFit.AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pulsefitai.vercel.app",
    title: "PulseFit.AI - AI-Powered Personal Fitness Training",
    description: "Transform your fitness journey with AI-powered personal training. Get personalized workout plans, nutrition guidance, and real-time coaching that adapts to your goals.",
    siteName: "PulseFit.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseFit.AI - AI-Powered Personal Fitness Training",
    description: "Transform your fitness journey with AI-powered personal training. Get personalized workout plans, nutrition guidance, and real-time coaching that adapts to your goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
