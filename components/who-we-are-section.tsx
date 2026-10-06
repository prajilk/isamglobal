import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import UserLink from "./icons/user-link"
import { TextAnimate } from "./ui/text-animate"
import { Button } from "./ui/button"
import Link from "next/link"

export default function WhoWeAreSection() {
  return (
    <section className="container-padding-x container py-12 md:py-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Left column — copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-1.5 text-sm text-primary">
            <UserLink />
            Who We Are
          </span>

          <div className="mt-3 font-jakarta-sans text-4xl leading-[110%] font-bold text-[#2B2B2B] sm:text-5xl">
            <TextAnimate animation="blurIn" as="span">
              Technology that makes
            </TextAnimate>
            <br />
            <TextAnimate animation="blurIn" as="span" className="text-primary">
              business simpler.
            </TextAnimate>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-gray-500">
            ISAM Global is a UAE-based IT consulting and software solutions
            company providing practical, ready-to-deploy business applications
            for organizations across the UAE, GCC and emerging markets.
          </p>

          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
            Our solutions cover Property Management, Facility Management,
            Education, Healthcare, Beauty & Wellness, HSE, HR, logistics and
            other business operations.
          </p>

          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
            We focus on one simple principle: understand the business problem,
            recommend the right technology, and deliver measurable value.
          </p>

          <Link href="#form-section">
            <Button className="mt-6 rounded-full" size="lg">
              Learn More
              <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Button>
          </Link>
        </div>

        {/* Right column — image collage */}
        <div className="grid grid-cols-[1.6fr_1.2fr] gap-4">
          {/* Left image + rating card */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/img1.webp"
                alt="Team collaborating in a meeting room"
                className="h-full w-full object-cover"
                width={300}
                height={300}
              />
            </div>

            <div className="mt-4 rounded-2xl bg-gray-100 px-6 py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-[15px] font-medium text-gray-900">
                  (4,9/5)
                </span>
              </div>
              <p className="mt-1 text-center text-sm text-gray-500">
                Based on 200K+ Client Reviews
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="h-full overflow-hidden rounded-2xl">
            <Image
              src="/img2.webp"
              alt="ISAM logo displayed on office wall"
              className="h-full w-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
