export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Custom Cakes for Every Celebration',
  description:
    'Make your special moments unforgettable with a custom celebration cake. From birthdays to weddings, our pastry chef will create your dream cake with premium ingredients and beautiful designs.',
  ctaText: 'Order a Custom Cake',
  ctaUrl: 'tel:4155552020',
  backgroundImage: '/images/cta-background.jpg',
  backgroundImageAlt: 'Beautiful custom celebration cakes display',
}
