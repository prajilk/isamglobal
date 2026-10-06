import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 pt-5">
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
          <Link
            href="#hero-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="#about-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="#solutions-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="#form-section"
            className="cursor-pointer bg-transparent text-[15px] text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Contact
          </Link>
        </div>

        {/* CTA button */}
        <Link href="#form-section">
          <Button className="rounded-full" size="lg">
            Book a Demo
            <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </Button>
        </Link>
      </nav>
    </header>
  )
}
