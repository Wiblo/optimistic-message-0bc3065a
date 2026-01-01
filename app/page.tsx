import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { MenuGrid } from "@/components/sections/menu/MenuGrid"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Since 2010"
        title="Fresh Artisan Breads & Pastries Daily"
        backgroundImage="/images/hero-bakery.jpg"
        backgroundImageAlt="Fresh artisan breads and pastries at Golden Gate Bakery"
        ctaText="Visit Us Today"
        ctaUrl="#location"
      />
      <MenuGrid />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
