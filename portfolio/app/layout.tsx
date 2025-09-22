import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { JetBrains_Mono as FontMono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Abel Kodjo ATSOU - Backend Developer | Python | PHP | AWS",
  description: "Passionate software engineer and future NLP engineer driven by curiosity. Specialized in Python, PHP, AWS, and full-stack development.",
  keywords: "Abel Atsou, Backend Developer, Python Developer, PHP Developer, AWS, Software Engineer, NLP Engineer, Full Stack Developer",
  authors: [{ name: "Abel Kodjo ATSOU" }],
  creator: "Abel Kodjo ATSOU",
  openGraph: {
    title: "Abel Kodjo ATSOU - Portfolio",
    description: "Passionate software engineer and future NLP engineer",
    url: "https://abelatsou.dev",
    siteName: "Abel Atsou Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abel Kodjo ATSOU - Portfolio",
    description: "Backend Developer | Python | PHP | AWS",
    creator: "@hatealx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
      
        </ThemeProvider>
      </body>
    </html>
  );
}