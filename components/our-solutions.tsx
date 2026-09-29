"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useOutsideClick } from "@/hooks/use-outside-click"
import Rocket from "./icons/rocket"
import { TextAnimate } from "./ui/text-animate"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function OurSolutions() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  )
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-100 grid place-items-center px-3 sm:px-0">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative flex h-fit w-full max-w-125 flex-col overflow-hidden rounded-3xl bg-white md:h-fit md:max-h-[95%]"
            >
              {/* <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button> */}

              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="shrink-0 p-4"
              >
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="h-56 w-full rounded-lg object-cover object-center sm:h-80 lg:h-52"
                />
              </motion.div>

              <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex shrink-0 items-start justify-between p-4 pt-0">
                  <div className="space-y-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-dm-sans text-xl font-medium text-[#4C4C4C]"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.subHeading}-${id}`}
                      className="font-dm-sans text-sm font-semibold text-[#7f7e7e]"
                    >
                      {active.subHeading}
                    </motion.p>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="font-dm-sans text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex min-h-0 flex-1 flex-col px-4"
                >
                  <ul
                    className="flex scroll-fade scrollbar-thin scrollbar-thumb-gray-300 flex-wrap gap-2 overflow-y-scroll py-2 scroll-fade-[20%]"
                    data-lenis-prevent
                  >
                    {active.tags.map((solution) => (
                      <li
                        className="h-fit rounded-full border border-black/40 px-3 py-1.5 text-sm text-black"
                        key={solution}
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center py-4">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-primary py-1 pr-1 pl-4 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                    >
                      View Detail
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <section
        id="solutions-section"
        className="container-padding-x container py-12 md:py-16"
      >
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-primary">
            <Rocket />
            Features
          </span>
          <TextAnimate
            animation="blurIn"
            as="h2"
            className="mt-4 font-jakarta-sans text-4xl font-bold text-[#2B2B2B] sm:text-5xl"
          >
            Our Solutions
          </TextAnimate>
        </div>
        <ul className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="flex cursor-pointer flex-col rounded-xl border border-transparent p-4 hover:border-neutral-100 hover:shadow-xl"
            >
              <div className="flex w-full flex-col gap-4">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-52 w-full rounded-lg object-cover object-center"
                  />
                </motion.div>
                <div className="flex flex-col justify-center gap-1">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-dm-sans text-xl font-medium"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.subHeading}-${id}`}
                    className="font-dm-sans font-semibold text-neutral-600"
                  >
                    {card.subHeading}
                  </motion.p>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="font-dm-sans text-sm"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const cards = [
  {
    title: "THREDEX",
    subHeading: "Apartments & Maintenance Management System",
    description:
      "A connected platform for managing properties, tenants, rentals, maintenance and daily operations in one place.",
    src: "/services/thredex.webp",
    tags: [
      "Property Management",
      "Tenant Management",
      "Rent Management",
      "Maintenance",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "WRAPZOID",
    subHeading: "Beauty & Appointment Management System",
    description:
      "A smart platform for managing beauty services, appointments, customers and daily salon operations with ease.",
    src: "/services/wrapzoid.webp",
    tags: [
      "Appointment Booking",
      "Customer Management",
      "Service Management",
      "Staff Management",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "MEETADR",
    subHeading: "Healthcare & Doctor Appointment System",
    description:
      "A connected healthcare platform that simplifies doctor discovery, appointment scheduling and patient management.",
    src: "/services/meetadr.webp",
    tags: [
      "Doctor Management",
      "Appointments",
      "Patient Management",
      "Schedules",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "ETLAB",
    subHeading: "Education & Learning Management System",
    description:
      "A digital platform designed to simplify academic operations, student management, learning and institutional workflows.",
    src: "/services/etlab.webp",
    tags: [
      "Student Management",
      "Course Management",
      "Attendance",
      "Examinations",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "PETROHSE",
    subHeading: "Health, Safety & Environment Management System",
    description:
      "A centralized platform for managing workplace safety, compliance, incidents and HSE operations across organizations.",
    src: "/services/petrohse.webp",
    tags: [
      "Safety Management",
      "Incident Tracking",
      "Risk Assessment",
      "Compliance",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "DIGIHR",
    subHeading: "Human Resource Management System",
    description:
      "A streamlined HR platform for managing employees, attendance, leave and everyday workforce operations.",
    src: "/services/digihr.webp",
    tags: [
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Payroll",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "SAMS",
    subHeading: "Smart Asset Management System",
    description:
      "A centralized solution for tracking, managing and maintaining organizational assets throughout their lifecycle.",
    src: "/services/sams.webp",
    tags: [
      "Asset Tracking",
      "Asset Management",
      "Maintenance",
      "Inventory",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "ZAYER",
    subHeading: "Innovation Management Platform",
    description:
      "A collaborative platform that helps organizations capture ideas, manage innovation initiatives and turn opportunities into outcomes.",
    src: "/services/zayer.webp",
    tags: [
      "Idea Management",
      "Innovation Hub",
      "Collaboration",
      "Workflow",
      "Analytics",
    ],
    link: "#",
  },
  {
    title: "DIGILOGIST",
    subHeading: "Delivery & Logistics Management System",
    description:
      "A connected logistics platform for managing deliveries, routes, drivers and operations from one centralized system.",
    src: "/services/digilogist.webp",
    tags: [
      "Order Management",
      "Delivery Tracking",
      "Route Management",
      "Driver Management",
      "Reports",
    ],
    link: "#",
  },
  {
    title: "B-QUICK",
    subHeading: "Warehouse & Wholesale ERP System",
    description:
      "An integrated platform for managing inventory, warehouse operations, sales and wholesale business processes efficiently.",
    src: "/services/bquick.webp",
    tags: [
      "Inventory Management",
      "Warehouse",
      "Sales Management",
      "Purchasing",
      "Reports",
    ],
    link: "#",
  },
]
