import { MenuGrid } from "@/components/sections/menu/MenuGrid"
import { CTASection } from "@/components/sections/cta/CTASection"
import { generatePageMetadata } from "@/lib/seo/metadata"

export const metadata = generatePageMetadata(
  "Menu - Artisan Breads, Pastries & Cakes",
  "Explore our full menu of handcrafted breads, pastries, cakes, sandwiches, and beverages. Made fresh daily with organic ingredients from local California farms."
)

export default function MenuPage() {
  return (
    <>
      <MenuGrid
        title="Our Full Menu"
        subtitle="Handcrafted with organic ingredients from local California farms"
        showCategoryFilter={true}
      />
      <CTASection />
    </>
  )
}
