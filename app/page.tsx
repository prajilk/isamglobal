import AboutSection from "@/components/about-section"
import FaqSection from "@/components/faq-section"
import FormSection from "@/components/form-section"
import HeroSection from "@/components/hero-section"
import OurCommitmentSection from "@/components/our-commitment-section"
import OurServicesSection from "@/components/our-services-section"
import WhatWeDo from "@/components/what-we-do-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import OurSolutions from "@/components/our-solutions"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhoWeAreSection />
      <WhatWeDo />
      <OurSolutions />
      <OurCommitmentSection />
      <OurServicesSection />
      {/* <TestimonialSection /> */}
      <FormSection />
      {/* <FaqSection /> */}
    </main>
  )
}
