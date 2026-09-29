import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Briefcase from "./icons/briefcase"
import { TextAnimate } from "./ui/text-animate"
import ScrollButton from "./scroll-button"

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="container-padding-x container grid grid-cols-1 items-center gap-10 px-6 py-12 md:py-16 lg:grid-cols-2 lg:gap-8 lg:px-10"
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
          Bitelo empowers innovation through clean design, agile development,
          and tech strategy.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <ScrollButton id="#form-section" size="lg" className="rounded-full">
            Get Started
            <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
              <ArrowRight className="size-4" strokeWidth={2} />
            </span>
          </ScrollButton>
          <ScrollButton
            id="#about-section"
            size="lg"
            className="rounded-full"
            variant="outline"
          >
            Learn More
          </ScrollButton>
        </div>
      </div>

      {/* Right column — video panel */}
      <div className="relative aspect-10/9 w-full overflow-hidden rounded-3xl bg-black">
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

        {/* Floating capability badges */}
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
      </div>
    </section>
  )
}
