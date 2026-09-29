"use client"

import {
  Lightbulb,
  Award,
  MessagesSquare,
  ClipboardCheck,
  TrendingUp,
  LineChart,
  Headphones,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Commitment from "./icons/commitment"
import { useState } from "react"
import { TextAnimate } from "./ui/text-animate"

interface Commitment {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

const commitments: Commitment[] = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our products and explore new technologies to keep our customers ahead.",
  },
  {
    id: "quality",
    icon: Award,
    title: "Quality",
    description:
      "Every solution goes through rigorous testing so you can rely on it from day one.",
  },
  {
    id: "customer-first",
    icon: MessagesSquare,
    title: "Customer First",
    description:
      "Your goals shape our roadmap — we listen, adapt, and build around what actually helps you.",
  },
  {
    id: "reliability",
    icon: ClipboardCheck,
    title: "Reliability",
    description:
      "We stand behind what we build, with clear commitments and consistent follow-through.",
  },
  {
    id: "scalability",
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Our platforms grow with you, from a single team to an entire organization.",
  },
  {
    id: "transparency",
    icon: LineChart,
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and open communication at every step.",
  },
  {
    id: "continuous-support",
    icon: Headphones,
    title: "Continuous Support",
    description:
      "Our team stays with you well past launch, ready whenever you need us.",
  },
]

export default function OurCommitmentSection() {
  const [activeId, setActiveId] = useState(commitments[0].id)

  return (
    <section className="container-padding-x container py-10 md:py-16">
      <div className="rounded-[32px] bg-gray-50 p-5 sm:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — copy + image */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Commitment />
              Our Commitment
            </span>

            <TextAnimate
              animation="blurIn"
              as="h2"
              className="mt-4 max-w-xs font-jakarta-sans text-4xl leading-[110%] font-bold text-[#2B2B2B] sm:text-5xl"
            >
              Technology You Can Trust
            </TextAnimate>

            <p className="mt-5 text-[15px] leading-relaxed text-gray-500">
              At ISAM GLOBAL, our commitment goes beyond delivering software. We
              are committed to building long-term relationships with our
              customers and partners.
              <br />
              Our Commitment to You
            </p>

            <div className="mt-8 aspect-[1/0.7] max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/img3.webp"
                alt="ISAM Global team member"
                className="h-full w-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Right column — interactive commitment list */}
          <div className="flex flex-col gap-3">
            {commitments.map((item) => {
              const isActive = item.id === activeId
              const Icon = item.icon

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-expanded={isActive}
                  className={`w-full rounded-2xl px-6 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-primary py-5 shadow-md"
                      : "bg-transparent py-3 hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isActive ? "bg-white/20" : "bg-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </span>
                    <span
                      className={`text-[15px] font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive
                        ? "mt-2 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-14 text-sm leading-relaxed text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
