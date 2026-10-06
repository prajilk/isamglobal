import { ArrowRight } from "lucide-react"
import Facebook from "../icons/facebook"
import Linkedin from "../icons/linkedin"
import Instagram from "../icons/instagram"
import Youtube from "../icons/youtube"
import Link from "next/link"
import Image from "next/image"

interface LinkColumn {
  title: string
  links: {
    label: string
    href: string
    scrollDuration?: number
    active?: boolean
  }[]
}

const columns: LinkColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#hero-section" },
      { label: "Solutions", href: "#solutions-section" },
      { label: "About", href: "#about-section" },
      { label: "Why ISAM", href: "#commitment-section" },
      { label: "Book a Demo", href: "#form-section" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Model Development", href: "#" },
      { label: "AI Integration solutions", href: "#" },
      { label: "AI Strategy Consulting", href: "#" },
      { label: "Machine Learning", href: "#" },
      { label: "Data Monitoring", href: "#" },
      { label: "Neural Network", href: "#" },
    ],
  },
]

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Youtube", icon: Youtube, href: "#" },
]

export default function Footer() {
  return (
    <footer className="container-padding-x container py-8">
      <div
        className="relative overflow-hidden rounded-[32px] bg-[#0f3d33] bg-cover bg-bottom"
        style={{
          backgroundImage: "url('/footer.webp')",
        }}
      >
        {/* Content */}
        <div className="relative px-8 py-12 sm:px-12 sm:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            {/* Logo + tagline + contact */}
            <div>
              <Image
                src="/logo.webp"
                alt="Isam global logo"
                width={100}
                height={100}
                className="size-14"
              />

              <p className="mt-5 max-w-55 text-sm leading-relaxed text-white/80">
                Embrace the future of artificial intelligence!
              </p>

              <div className="mt-5 space-y-1 text-sm text-white/80">
                <p>info@isamglobal.com</p>
              </div>
            </div>

            {/* Link columns */}
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-medium text-white/90">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) =>
                    column.title === "Quick Links" ? (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                            link.active
                              ? "text-white"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          {link.active && (
                            <ArrowRight
                              className="h-3.5 w-3.5"
                              strokeWidth={2.5}
                            />
                          )}
                          {link.label}
                        </Link>
                        {/* <a
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                          link.active
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.active && (
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            strokeWidth={2.5}
                          />
                        )}
                        {link.label}
                      </a> */}
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                            link.active
                              ? "text-white"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          {link.active && (
                            <ArrowRight
                              className="h-3.5 w-3.5"
                              strokeWidth={2.5}
                            />
                          )}
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                  >
                    <Icon />
                    {social.label}
                  </Link>
                )
              })}
            </div>

            <p className="text-sm text-white/70">
              Copyright &copy; {new Date().getFullYear()} ISAM Global. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
