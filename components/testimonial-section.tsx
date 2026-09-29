"use client"

import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { TextAnimate } from "./ui/text-animate"

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Nair",
    role: "Head of Ops, Loopline",
    quote:
      "The rollout was seamless and support answered every question within minutes. Our team changed how we make decisions instantly and respond to customers faster.",
    avatar: "/testimonial-priya.jpg",
  },
  {
    name: "Amira Leana",
    role: "Co-Founder, FlowTech",
    quote:
      "Codexa helped us launch faster than we imagined. We automated half our workflows in the first week and saved dozens of hours.",
    avatar: "/testimonial-amira.jpg",
  },
  {
    name: "Victor Paul",
    role: "CTO, IntraSoft Solutions",
    quote:
      "We scaled from 200 to 10,000 users with zero downtime. The integration was painless and their support team is unmatched.",
    avatar: "/testimonial-victor.jpg",
  },
  {
    name: "Daniela Cruz",
    role: "VP Product, Northbeam",
    quote:
      "Every metric we track improved within a month. It's rare to find a tool that delivers on its promises this consistently.",
    avatar: "/testimonial-daniela.jpg",
  },
]

const REPEAT_COUNT = 3
const loopedTestimonials = Array.from({ length: REPEAT_COUNT }).flatMap(
  (_, copy) =>
    testimonials.map((testimonial, i) => ({
      ...testimonial,
      key: `${testimonial.name}-${copy}`,
      realIndex: i,
    }))
)

const START_INDEX = testimonials.length + 1

export default function TestimonialSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [centerIndex, setCenterIndex] = useState(START_INDEX)

  useEffect(() => {
    if (!api) return

    const updateCenter = () => {
      const progress = api.scrollProgress()
      const snaps = api.scrollSnapList()
      let closest = 0
      let min = Infinity
      snaps.forEach((snap, i) => {
        const diff = Math.min(
          Math.abs(snap - progress),
          1 - Math.abs(snap - progress)
        )
        if (diff < min) {
          min = diff
          closest = i
        }
      })
      setCenterIndex(closest)
    }

    updateCenter()
    api.on("scroll", updateCenter)
    api.on("reInit", updateCenter)
    api.scrollTo(START_INDEX, true)

    return () => {
      api.off("scroll", updateCenter)
      api.off("reInit", updateCenter)
    }
  }, [api])

  const goToTestimonial = (realIndex: number) => {
    if (!api) return
    const candidates = [0, 1, 2].map(
      (copy) => copy * testimonials.length + realIndex
    )
    const target = candidates.reduce((best, candidate) => {
      const dist = Math.abs(candidate - centerIndex)
      const bestDist = Math.abs(best - centerIndex)
      return dist < bestDist ? candidate : best
    })
    api.scrollTo(target)
  }

  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      <div className="container-padding-x container">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex rounded-full border px-4 py-1.5 text-sm text-primary shadow-md">
              Testimonials
            </span>
            <h2 className="mt-4 max-w-md font-jakarta-sans text-4xl leading-[110%] font-bold text-[#2B2B2B] sm:text-5xl">
              <TextAnimate animation="blurIn" as="span">
                Trusted by Teams
              </TextAnimate>
              <TextAnimate
                animation="blurIn"
                as="span"
                className="text-primary"
              >
                Across the Globe
              </TextAnimate>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-gray-500">
            Stories from teams who improved efficiency and reduced workload
            instantly
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-28" />

          <Carousel
            opts={{ align: "center", loop: true, startIndex: START_INDEX }}
            setApi={setApi}
          >
            <CarouselContent className="items-center py-4">
              {loopedTestimonials.map((testimonial, index) => {
                const isActive = index === centerIndex

                return (
                  <CarouselItem
                    key={testimonial.key}
                    className="basis-[85%] pl-6 transition-all duration-300 sm:basis-105"
                  >
                    <button
                      type="button"
                      onClick={() => goToTestimonial(testimonial.realIndex)}
                      className={`w-full rounded-3xl bg-white p-8 text-left transition-all duration-300 ${
                        isActive
                          ? "scale-100 opacity-100 shadow-xl"
                          : "scale-95 opacity-40"
                      }`}
                    >
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <p className="mt-4 text-[17px] leading-relaxed font-medium text-gray-900">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
