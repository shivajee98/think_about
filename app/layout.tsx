import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/next"

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkabout.education"),
  title: "Think About - Transform Your Future with Quality Education",
  icons: {
    icon: "/logo_123.png",
    shortcut: "/logo_123.png",
    apple: "/logo_123.png",
  },
  description:
    "Join thousands of students learning cutting-edge skills in programming, design, and digital marketing. Start your journey with Think About today.",
  keywords: "online courses, programming, web development, design, digital marketing, education, learning platform",
  authors: [{ name: "Think About Team" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Think About - Transform Your Future with Quality Education",
    description:
      "Join thousands of students learning cutting-edge skills in programming, design, and digital marketing.",
    url: "https://thinkabout.education",
    siteName: "Think About",
    images: [
      {
        url: "/logo_12.png",
        width: 1200,
        height: 630,
        alt: "Think About - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think About - Transform Your Future with Quality Education",
    description:
      "Join thousands of students learning cutting-edge skills in programming, design, and digital marketing.",
    images: ["/logo_12.png"],
    creator: "@thinkaboutedu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Analytics/>
      <html lang="en" className={inter.variable} suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/vvg0muu.css" />
        </head>
        <body className={`${inter.className} antialiased`} style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
