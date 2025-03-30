import { FontProvider } from "@webapp/context/font-context"
import { ThemeProvider } from "@webapp/context/theme-context"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@webapp/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ParseIt webapp",
  description: "ParseIt webapp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LebJekqAAAAAAxp8AsbcTInLPL9Bre737esOY73"></script>
        <meta name="theme-color" content="#fff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased group/body`}
      >
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <FontProvider>
            <Toaster />
            {children}
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
