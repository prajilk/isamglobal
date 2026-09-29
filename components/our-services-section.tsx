import { Terminal, ShieldCheck, BarChart3, Share2 } from "lucide-react"
import { TextAnimate } from "./ui/text-animate"
import Image from "next/image"

export default function OurServicesSection() {
  return (
    <section className="container-padding-x container py-10 md:py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full border bg-white px-4 py-1.5 text-xs font-medium text-primary shadow-md">
          Our Service
        </span>

        <h2 className="mt-4 max-w-3xl font-jakarta-sans text-4xl leading-[110%] font-bold text-[#2B2B2B] sm:text-5xl">
          <TextAnimate animation="blurIn" as="span">
            Comprehensive Solutions for
          </TextAnimate>{" "}
          <TextAnimate animation="blurIn" as="span" className="text-primary">
            Modern Development Teams
          </TextAnimate>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
          Our integrated platform accelerates timelines without sacrificing
          quality or control. Codexa unifies every step of your workflow.
        </p>
      </div>

      {/* Bento grid */}
      <div className="mt-12 flex flex-col">
        {/* Left column */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Card 1 — bordered card, text + image together */}
          <div className="rounded-3xl p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <h3 className="font-jakarta-sans text-xl font-semibold text-gray-900">
              Intelligent Automation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Automate repetitive processes, reduce manual effort, and keep your
              operations moving efficiently.
            </p>

            {/* Code editor illustration */}
            <div className="relative mt-5 flex h-60 items-end justify-center overflow-hidden rounded-2xl bg-[#F7F9FC] md:h-72">
              <Image
                src="/service-illustration-1.webp"
                alt="Code editor illustration"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Card 2 — image, then plain text below */}
          <div className="rounded-3xl p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-2xl bg-[#F7F9FC] md:h-72">
              <Image
                src="/service-illustration-2.webp"
                alt="Code editor illustration"
                width={500}
                height={500}
              />
            </div>

            <h3 className="mt-7 text-xl font-semibold">Real-Time Insights</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Turn operational data into clear, actionable insights with
              real-time visibility across your business.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Card 3 — image, then plain text below */}
          <div className="flex-[40%] rounded-3xl p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <div className="relative flex h-60 items-end justify-center overflow-hidden rounded-2xl bg-[#F7F9FC] p-6 md:h-72">
              <Image
                src="/service-illustration-3.webp"
                alt="Code editor illustration"
                width={400}
                height={400}
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold">Secure & Scalable</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Enterprise-ready technology designed to grow with your business
              while maintaining security and reliability.
            </p>
          </div>

          {/* Card 4 — plain text, then image below */}
          <div className="rounded-3xl p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Flexible API Integration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Easily connect Codexa to your existing tools and services. Our
              APIs are built for speed, security, and scalability.
            </p>

            <div className="relative mt-5 flex h-60 items-center justify-center overflow-hidden rounded-3xl bg-[#F7F9FC] py-10 md:h-auto">
              <Image
                src="/service-illustration-4.webp"
                alt="Code editor illustration"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
