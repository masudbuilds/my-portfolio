import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Masud Rana | Full-Stack Developer",
    template: "%s | Masud Rana",
  },
  description:
    "Personal portfolio of Masud Rana, a Full-Stack Developer specializing in modern web applications, Next.js, React, and TypeScript.",
  authors: [{ name: "Masud Rana" }],
  creator: "Masud Rana",
  openGraph: {
    title: "Masud Rana | Full-Stack Developer",
    description:
      "Personal portfolio of Masud Rana, a Full-Stack Developer specializing in modern web applications, Next.js, React, and TypeScript.",
    type: "website",
    locale: "en_US",
    siteName: "Masud Rana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masud Rana | Full-Stack Developer",
    description:
      "Personal portfolio of Masud Rana, a Full-Stack Developer specializing in modern web applications, Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-xl focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
