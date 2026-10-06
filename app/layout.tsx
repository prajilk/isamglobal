import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

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
        {/* <SmoothScroll> */}
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Link
            href="#hero-section"
            className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary p-1 text-white"
          >
            <ArrowUp className="size-5" strokeWidth={2} />
          </Link>
        </ThemeProvider>
        {/* </SmoothScroll> */}
      </body>
    </html>
  )
}
