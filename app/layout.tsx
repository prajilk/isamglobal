import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/header"
import SmoothScroll from "@/components/smooth-scroll"
import Footer from "@/components/layout/footer"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        plusJakartaSans.variable,
        "font-sans",
        dmSans.variable
      )}
    >
      <body className="font-dm-sans">
        <SmoothScroll>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
