export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'Our Story',
  description:
    'Founded in 2010 by master baker Elena Martinez, Golden Gate Bakery has been serving the San Francisco community with passion and tradition. Every morning, we hand-craft our breads and pastries using time-honored techniques and the finest organic ingredients sourced from local farms.',
  image: '/images/about-bakery.jpg',
  imageAlt: 'Baker working with fresh dough at Golden Gate Bakery',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Golden Gate Bakery',
  paragraphs: [
    'Founded in 2010 by master baker Elena Martinez, Golden Gate Bakery has been serving the San Francisco community with passion and tradition. Every morning, we hand-craft our breads and pastries using time-honored techniques and the finest organic ingredients sourced from local farms.',
    'Elena trained in the pastry kitchens of Paris before returning to her hometown to share her love of artisan baking. Our 100-year-old sourdough starter, gifted from a Parisian boulangerie, gives our breads their signature complex flavor and perfect texture.',
    'At Golden Gate Bakery, we believe in the power of simple, quality ingredients and the importance of community. Every loaf, pastry, and cake is made with care, supporting local farmers and bringing people together over delicious food.',
  ],
  image: '/images/about-bakery.jpg',
  imageAlt: 'Baker working with fresh dough at Golden Gate Bakery',
}
