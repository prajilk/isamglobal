import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Briefcase from "./icons/briefcase"
import { TextAnimate } from "./ui/text-animate"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="container-padding-x container grid grid-cols-1 items-center px-6 pt-12 md:pt-16 lg:grid-cols-2 lg:px-10"
    >
      {/* Left column */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-1.5 text-sm text-gray-700">
          <Briefcase />
          Welcome to ISAM Global
        </span>

        <TextAnimate
          animation="blurIn"
          as="h1"
          className="mt-6 max-w-md font-jakarta-sans text-5xl leading-[1.1] font-extrabold text-primary"
        >
          Smart Software. Simple Business. Better Future.
        </TextAnimate>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5E5E5E]">
          ISAM Global is a UAE-based IT consulting and software solutions
          company offering ready-to-deploy business applications for Property
          Management, Facility management, Education, Healthcare, Industrial HSE
          and other business operations.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="#form-section">
            <Button size="lg" className="rounded-full">
              Book a Demo
              <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
                <ArrowRight className="size-4" strokeWidth={2} />
              </span>
            </Button>
          </Link>
          <Link href="#about-section">
            <Button size="lg" className="rounded-full" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative h-full min-h-80 md:min-h-140">
        <Image
          src="/hero-2.webp"
          alt="hero image"
          width={1000}
          height={600}
          className="absolute top-1/2 -right-10 bottom-0 w-full -translate-y-1/2"
        />
        <Image
          src="/hero-float-c.png"
          alt="hero image"
          width={1200}
          height={700}
          className="absolute top-1/2 aspect-[1/0.7] w-full -translate-y-1/2"
        />
        {/* <Image
          src="/hero-3.webp"
          alt="hero image"
          width={300}
          height={300}
          className="absolute top-0 size-32 animate-float animation-duration-4000"
        />
        <Image
          src="/hero-4c.png"
          alt="hero image"
          width={300}
          height={300}
          className="absolute right-0 bottom-0 h-20 w-40 animate-float animation-duration-5000"
        /> */}
      </div>

      {/* Right column — video panel */}
      {/* <div className="relative aspect-10/9 w-full overflow-hidden rounded-3xl bg-black">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-primary">
              Product Management
            </span>
            <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-primary">
              Dev Collaboration
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-primary">
              User Testing
            </span>
            <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-primary">
              Insights &amp; Analytics
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-primary">
              Launch Tools
            </span>
          </div>
        </div>
      </div> */}
    </section>
  )
}
