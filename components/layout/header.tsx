import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollButton from "../scroll-button"

export default function Header() {
  return (
    <header className="pt-5">
      <nav className="container-padding-x container flex items-center justify-between rounded-full bg-[#FAFAFA] py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="size-10"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-9 md:flex">
          <ScrollButton
            id="#hero-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Home
          </ScrollButton>
          <ScrollButton
            id="#about-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            About
          </ScrollButton>
          <ScrollButton
            id="#solutions-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Services
          </ScrollButton>
          <ScrollButton
            id="#form-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Contact
          </ScrollButton>
        </div>

        {/* CTA button */}
        <ScrollButton id="#form-section" className="rounded-full" size="lg">
          Get Started
          <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </ScrollButton>
      </nav>
    </header>
  )
}
