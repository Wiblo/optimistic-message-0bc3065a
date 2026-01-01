export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'hours',
    question: 'What are your hours of operation?',
    answer:
      "We're open Monday through Thursday 7am-7pm, Friday 7am-8pm, Saturday 8am-8pm, and Sunday 8am-6pm. Our breads are baked fresh throughout the day, with new batches coming out of the oven every few hours.",
  },
  {
    id: 'preorders',
    question: 'Do you take pre-orders for bread or pastries?',
    answer:
      "Yes! We recommend pre-ordering for special breads like our olive ciabatta or if you need a large quantity. Call us at (415) 555-2020 or email hello@goldengatebakery.com at least 24 hours in advance. Walk-ins are always welcome, but popular items can sell out.",
  },
  {
    id: 'custom-cakes',
    question: 'How do I order a custom celebration cake?',
    answer:
      "We'd love to create your dream cake! Custom cakes require at least 2 weeks advance notice. Call us at (415) 555-2020 to schedule a consultation with our pastry chef. We'll discuss design, flavors, dietary needs, and serving size. Custom cakes start at $75.",
  },
  {
    id: 'dietary',
    question: 'Do you offer gluten-free or vegan options?',
    answer:
      'Yes! We have a selection of gluten-free breads and pastries, as well as vegan options made with plant-based ingredients. Our staff can help you identify which items meet your dietary needs. Please note that while we take precautions, our kitchen is not a dedicated gluten-free facility.',
  },
  {
    id: 'ingredients',
    question: 'Where do you source your ingredients?',
    answer:
      'We source organic flour and grains from California farms, with our main supplier being Central Milling in Petaluma. Our eggs come from pasture-raised chickens, and we use European-style cultured butter. Seasonal fruits come from local farmers markets. Quality ingredients make all the difference.',
  },
  {
    id: 'sourdough',
    question: 'What makes your sourdough special?',
    answer:
      'Our sourdough is made with a 100-year-old starter gifted from a traditional Parisian boulangerie. We ferment the dough for 48 hours, developing complex flavors and making it easier to digest. The result is a bread with a perfectly crispy crust, tangy flavor, and chewy interior that stays fresh for days.',
  },
  {
    id: 'parking',
    question: 'Is there parking available?',
    answer:
      "We're located on Valencia Street in the Mission District. Street parking is available, and there's a public parking garage two blocks away on 16th Street. We're also easily accessible via BART (16th Street Mission station) and several MUNI bus lines.",
  },
  {
    id: 'wholesale',
    question: 'Do you offer wholesale to restaurants or cafes?',
    answer:
      'Yes, we supply several local restaurants, cafes, and specialty food shops with our artisan breads. For wholesale inquiries, please email hello@goldengatebakery.com with details about your business and needs.',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
