"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  AccordionTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
} from "./ui/accordion"
import Image from "next/image"
import AvatarAura from "./icons/avatar-aura"
import Link from "next/link"
import { Button } from "./ui/button"
import { TextAnimate } from "./ui/text-animate"
import ScrollButton from "./scroll-button"

interface Capability {
  number: string
  title: string
  description: string
  image: string
}

interface FilterGroup {
  label: string
  capabilities: Capability[]
}

const filterGroups: FilterGroup[] = [
  {
    label: "Software & Digital",
    capabilities: [
      {
        number: "01.",
        title: "Business Software Development",
        description:
          "Validate faster with drag-and-drop flows, auto-generated wireframes, and built-in feedback loops. No dev team required.",
        image: "/img1.webp",
      },
      {
        number: "02.",
        title: "SaaS & Cloud Solutions",
        description:
          "Scale on secure, multi-tenant cloud infrastructure with elastic pricing and zero-downtime deployments built in.",
        image: "/img1.webp",
      },
      {
        number: "03.",
        title: "Custom Software Solutions",
        description:
          "Purpose-built platforms tailored to your exact workflows, integrations, and industry requirements.",
        image: "/img1.webp",
      },
      {
        number: "04.",
        title: "Business Process Digitization",
        description:
          "Replace manual, paper-based workflows with connected digital processes that reduce errors and save time.",
        image: "/img1.webp",
      },
      {
        number: "05.",
        title: "Digital Transformation",
        description:
          "End-to-end strategy and execution to modernize legacy systems and align technology with business goals.",
        image: "/img1.webp",
      },
    ],
  },
  {
    label: "Enterprise Solutions",
    capabilities: [
      {
        number: "01.",
        title: "Enterprise & Campus Management Systems",
        description:
          "Unified platforms for large organizations and campuses to manage operations, people, and resources in one place.",
        image: "/img1.webp",
      },
      {
        number: "02.",
        title: "Property & Apartment Management Solutions",
        description:
          "End-to-end tools for managing units, tenants, rent, and maintenance across residential and commercial properties.",
        image: "/img1.webp",
      },
    ],
  },
  {
    label: "Industry Technology",
    capabilities: [
      {
        number: "01.",
        title: "Beauty & Wellness Technology",
        description:
          "Booking, client management, and point-of-sale tools built for salons, spas, and wellness studios.",
        image: "/img1.webp",
      },
      {
        number: "02.",
        title: "Healthcare & Appointment Platforms",
        description:
          "Scheduling, patient records, and appointment workflows designed for clinics and healthcare providers.",
        image: "/img1.webp",
      },
    ],
  },
  {
    label: "Consulting & Support",
    capabilities: [
      {
        number: "01.",
        title: "Technology Consulting",
        description:
          "Strategic guidance on architecture, tooling, and roadmap so your technology investments pay off.",
        image: "/img1.webp",
      },
      {
        number: "02.",
        title: "Software Implementation & Support",
        description:
          "Hands-on rollout, training, and ongoing support to make sure your team gets real value from day one.",
        image: "/img1.webp",
      },
    ],
  },
]

export default function WhatWeDo() {
  const [activeFilter, setActiveFilter] = useState(filterGroups[0].label)

  const activeCapabilities =
    filterGroups.find((group) => group.label === activeFilter)?.capabilities ??
    filterGroups[0].capabilities

  return (
    <section className="container-padding-x container py-12 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-primary">
            <AvatarAura />
            What We Do
          </span>

          <div className="mt-6 font-jakarta-sans text-4xl leading-[110%] font-bold sm:text-5xl">
            <TextAnimate
              animation="blurIn"
              as="span"
              className="text-[#2B2B2B]"
            >
              Smart Solutions,
            </TextAnimate>
            <br />
            <TextAnimate animation="blurIn" as="span" className="text-primary">
              Built to Scale
            </TextAnimate>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-gray-500">
            We provide ready-to-implement and custom software solutions that
            simplify operations, improve customer experiences and accelerate
            digital growth.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            From business software development and SaaS platforms to enterprise
            management systems, process digitization and digital transformation,
            we build technology around the real challenges businesses face.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            Our solutions are designed to reduce manual work, improve
            operational visibility, connect people and businesses, and help
            organizations make faster, smarter decisions.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            Understand the problem. Build the right solution. Deliver measurable
            value.
          </p>

          <ScrollButton
            id="#solutions-section"
            size="lg"
            className="mt-8 h-auto! rounded-full py-2 pr-2 pl-6 text-[15px] font-medium"
          >
            Explore Our Capabilities
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </ScrollButton>
        </div>

        {/* Right column — filters + accordion */}
        <div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filterGroups.map((group) => {
              const isActive = group.label === activeFilter
              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => setActiveFilter(group.label)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "rounded-full bg-primary px-5 py-2 text-sm font-medium text-white"
                      : "rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  }
                >
                  {group.label}
                </button>
              )
            })}
          </div>

          {/* Capabilities accordion — remounts on filter change so item-0
              of the new list opens by default */}
          <Accordion
            key={activeFilter}
            type="single"
            defaultValue="item-0"
            collapsible
            className="mt-8"
          >
            {activeCapabilities.map((item, index) => (
              <AccordionItem key={item.number} value={`item-${index}`}>
                <AccordionTrigger className="group hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-gray-300 group-data-[state=open]:text-gray-400">
                      {item.number}
                    </span>
                    <span className="text-xl font-medium text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors group-data-[state=open]:border-transparent group-data-[state=open]:bg-[#5A7860] group-data-[state=open]:text-white">
                    <ArrowUpRight className="h-4 w-4 group-data-[state=open]:hidden" />
                    <ArrowRight className="hidden h-4 w-4 group-data-[state=open]:block" />
                  </span>
                </AccordionTrigger>

                {item.description && (
                  <AccordionContent>
                    <div className="pl-9">
                      <p className="max-w-md text-[15px] leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="mt-6 aspect-video overflow-hidden rounded-2xl">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            width={300}
                            height={300}
                          />
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
