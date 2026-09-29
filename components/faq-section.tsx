"use client"

import { Users2, Plus, Minus } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import UserQuestion from "./icons/user-question"
import { TextAnimate } from "./ui/text-animate"

interface Faq {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: "What kind of products does Bitelo build?",
    answer:
      "We build web apps, mobile apps, internal tools, and MVPs for early-stage startups and growing teams — end to end, from design through launch.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "On average, 4–6 weeks. We use an agile sprint process that helps you launch fast, test early, and evolve quickly based on feedback.",
  },
  {
    question: "Can Bitelo help me beyond launch?",
    answer:
      "Yes — we offer ongoing support, maintenance, and feature development retainers so your product keeps improving after day one.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We pick the right stack for each project, commonly React, Next.js, React Native, Node.js, and PostgreSQL, with cloud infrastructure on AWS or Vercel.",
  },
  {
    question: "How is Bitelo different from other dev agencies?",
    answer:
      "We work as an embedded partner, not a vendor — small senior team, transparent pricing, and a focus on shipping something real, fast.",
  },
]

// Same question set, reordered per column to match the source layout, each
// column keeps its own independent expand/collapse state.
const leftOrder = [0, 1, 2, 3, 4]
const rightOrder = [0, 2, 3, 1, 4]

function FaqColumn({ order, columnId }: { order: number[]; columnId: string }) {
  return (
    <Accordion type="single" collapsible>
      {order.map((faqIndex, position) => {
        const faq = faqs[faqIndex]
        return (
          <AccordionItem key={faqIndex} value={`${columnId}-item-${position}`}>
            <AccordionTrigger className="group py-5 hover:no-underline">
              <span className="text-[15px] font-medium text-gray-900">
                {faq.question}
              </span>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-5">
              <p className="max-w-md text-sm leading-relaxed text-gray-500">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default function FaqSection() {
  return (
    <section className="container-padding-x container py-10 md:py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-primary">
          <UserQuestion />
          FAQs
        </span>
        <TextAnimate
          animation="blurIn"
          as="h2"
          className="mt-4 max-w-md font-jakarta-sans text-4xl leading-[110%] font-bold text-[#2B2B2B] sm:text-5xl"
        >
          Your Questions, Gently Answered
        </TextAnimate>
      </div>

      {/* Two-column FAQ accordions */}
      <div className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
        <FaqColumn columnId="left" order={leftOrder} />
        <FaqColumn columnId="right" order={rightOrder} />
      </div>
    </section>
  )
}
