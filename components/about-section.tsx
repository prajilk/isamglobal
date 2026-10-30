// import { Monitor, Laptop } from "lucide-react"
import Avatar from "./icons/avatar"
// import { NumberTicker } from "./ui/number-ticker"

// const stats = [
//   { value: 32, decimalPlaces: 0, suffix: "+", label: "Years Of Experience" },
//   { value: 140, decimalPlaces: 0, suffix: "+", label: "Professional Staff" },
//   { value: 1.2, decimalPlaces: 1, suffix: "K+", label: "Yearly Customer" },
//   { value: 99.5, decimalPlaces: 1, suffix: "%", label: "Positive Reviews" },
// ]

export default function AboutSection() {
  return (
    <section
      id="about-section"
      style={{
        scrollMarginTop: "80px",
      }}
      className="container-padding-x container px-6 py-10 md:py-0 lg:px-10"
    >
      <div className="grid items-start gap-3 md:grid-cols-5">
        {/* Badge */}
        <span className="mt-3 flex w-fit items-center gap-2 rounded-full bg-primary-foreground px-4 py-1.5 text-sm text-primary">
          <Avatar />
          About
        </span>

        <div className="md:col-span-4">
          {/* Heading */}
          <h2 className="text-3xl leading-tight font-semibold text-gray-900 sm:text-4xl">
            Empowering businesses with innovative software solutions{" "}
            <video
              className="inline-flex h-10 w-20 items-center justify-center overflow-hidden rounded-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/gif1.webm" type="video/mp4" />
            </video>{" "}
            designed to simplify operations, improve customer experiences and
            accelerate digital growth.
            <video
              className="inline-flex h-10 w-20 items-center justify-center overflow-hidden rounded-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/gif2.webm" type="video/mp4" />
            </video>
          </h2>
        </div>
        <div className="mt-5 grid gap-5 md:col-span-5 md:mt-7 md:grid-cols-2 md:gap-10">
          <div className="space-y-3">
            <h3 className="font-jakarta-sans text-3xl font-semibold">
              Our mission
            </h3>
            <p className="text-justify text-gray-500">
              To empower businesses with the right software solutions, practical
              IT consulting and dependable implementation support that enhance
              efficiency, productivity and business performance.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-jakarta-sans text-3xl font-semibold">
              Our Vision
            </h3>
            <p className="text-justify text-gray-500">
              To become a trusted regional partner in business technology,
              promoting innovative, accessible and environmentally friendly
              technology for a smarter, more sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-[#00BF360F] px-6 py-8"
          >
            <div className="flex items-baseline text-4xl font-semibold text-[#2B2B2B]">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces}
              />
              <span>{stat.suffix}</span>
            </div>
            <p className="mt-3 text-[15px] text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div> */}
    </section>
  )
}
