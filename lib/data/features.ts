export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Traditional Artisan Methods',
    description:
      'Every loaf is handcrafted using centuries-old techniques passed down through generations of bakers. Our naturally leavened sourdough uses a 100-year-old starter, creating bread with complex flavors and exceptional texture that mass production simply cannot replicate.',
    image: '/images/feature-handcraft.jpg',
    imageAlt: 'Baker hand-shaping artisan bread',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Organic Local Ingredients',
    description:
      'We source only the finest organic flour, grains, and seasonal produce from California farms. Our commitment to local ingredients means fresher products, support for our community, and exceptional flavor in every bite.',
    image: '/images/feature-ingredients.jpg',
    imageAlt: 'Fresh organic ingredients and grains',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Baked Fresh Daily',
    description:
      'Our ovens never stop. Breads are baked fresh multiple times throughout the day, and our pastries are made each morning before dawn. Visit us at any time to experience the warm, welcoming aroma of fresh-baked goods straight from the oven.',
    image: '/images/feature-fresh.jpg',
    imageAlt: 'Fresh bread coming out of the oven',
    imagePosition: 'right',
  },
]
