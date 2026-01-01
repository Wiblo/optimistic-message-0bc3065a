import { Croissant, Cake, Sandwich, Coffee, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface MenuItem {
  id: string
  slug: string
  name: string
  category: 'breads' | 'pastries' | 'cakes' | 'sandwiches' | 'beverages' | 'specials'
  description: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  featured?: boolean
  dietary?: string[] // e.g., 'vegan', 'gluten-free', 'organic'
}

/**
 * All menu items offered by the bakery
 * Update this array to add/modify menu items shown throughout the site
 */
export const menuItems: MenuItem[] = [
  // Breads
  {
    id: 'sourdough',
    slug: 'sourdough-bread',
    name: 'Classic Sourdough',
    category: 'breads',
    description:
      'Artisan sourdough with a perfectly crispy crust and tangy, chewy interior. Made with our 100-year-old starter and fermented for 48 hours.',
    price: '$8',
    image: '/images/menu/sourdough.jpg',
    imageAlt: 'Fresh-baked artisan sourdough bread with golden crust',
    icon: Croissant,
    featured: true,
    dietary: ['organic'],
  },
  {
    id: 'baguette',
    slug: 'french-baguette',
    name: 'French Baguette',
    category: 'breads',
    description:
      'Traditional French baguette with a thin, crispy crust and soft, airy crumb. Baked fresh every hour.',
    price: '$5',
    image: '/images/menu/baguette.jpg',
    imageAlt: 'Golden French baguette with crispy crust',
    icon: Croissant,
    featured: false,
    dietary: [],
  },
  {
    id: 'ciabatta',
    slug: 'olive-ciabatta',
    name: 'Olive Ciabatta',
    category: 'breads',
    description:
      'Italian-style ciabatta studded with Kalamata olives and herbs. Perfect for sandwiches or dipping in olive oil.',
    price: '$7',
    image: '/images/menu/ciabatta.jpg',
    imageAlt: 'Rustic olive ciabatta bread with herbs',
    icon: Croissant,
    featured: true,
  },

  // Pastries
  {
    id: 'croissant',
    slug: 'butter-croissant',
    name: 'Butter Croissant',
    category: 'pastries',
    description:
      'Flaky, buttery croissant made with European butter and laminated by hand. Perfectly golden and melts in your mouth.',
    price: '$4.50',
    image: '/images/menu/croissant.jpg',
    imageAlt: 'Flaky golden butter croissant',
    icon: Croissant,
    featured: true,
  },
  {
    id: 'pain-au-chocolat',
    slug: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    category: 'pastries',
    description:
      'Buttery croissant dough wrapped around premium dark chocolate batons. A French classic.',
    price: '$5',
    image: '/images/menu/pain-au-chocolat.jpg',
    imageAlt: 'Pain au chocolat with melted dark chocolate',
    icon: Croissant,
    featured: true,
  },
  {
    id: 'almond-croissant',
    slug: 'almond-croissant',
    name: 'Almond Croissant',
    category: 'pastries',
    description:
      'Twice-baked croissant filled with almond cream, topped with sliced almonds and powdered sugar.',
    price: '$6',
    image: '/images/menu/almond-croissant.jpg',
    imageAlt: 'Almond croissant topped with toasted almonds',
    icon: Croissant,
    featured: false,
  },

  // Cakes
  {
    id: 'chocolate-cake',
    slug: 'chocolate-layer-cake',
    name: 'Chocolate Layer Cake',
    category: 'cakes',
    description:
      'Decadent three-layer chocolate cake with rich ganache frosting. Perfect for celebrations or treating yourself.',
    price: '$45',
    image: '/images/menu/chocolate-cake.jpg',
    imageAlt: 'Rich chocolate layer cake with ganache frosting',
    icon: Cake,
    featured: true,
  },
  {
    id: 'lemon-tart',
    slug: 'lemon-tart',
    name: 'Lemon Tart',
    category: 'cakes',
    description:
      'Tangy lemon curd in a buttery shortbread crust, topped with Italian meringue and torched to perfection.',
    price: '$6',
    image: '/images/menu/lemon-tart.jpg',
    imageAlt: 'Lemon tart with torched meringue topping',
    icon: Cake,
    featured: true,
  },
  {
    id: 'cheesecake',
    slug: 'new-york-cheesecake',
    name: 'New York Cheesecake',
    category: 'cakes',
    description:
      'Creamy, dense cheesecake with a graham cracker crust. Served plain or with seasonal fruit compote.',
    price: '$7',
    image: '/images/menu/cheesecake.jpg',
    imageAlt: 'Classic New York style cheesecake slice',
    icon: Cake,
    featured: false,
  },

  // Sandwiches
  {
    id: 'ham-brie',
    slug: 'ham-brie-sandwich',
    name: 'Ham & Brie Baguette',
    category: 'sandwiches',
    description:
      'Smoked ham, creamy brie, butter lettuce, and Dijon mustard on our fresh-baked baguette.',
    price: '$12',
    image: '/images/menu/ham-brie.jpg',
    imageAlt: 'Ham and brie sandwich on fresh baguette',
    icon: Sandwich,
    featured: true,
  },
  {
    id: 'caprese',
    slug: 'caprese-ciabatta',
    name: 'Caprese Ciabatta',
    category: 'sandwiches',
    description:
      'Fresh mozzarella, heirloom tomatoes, basil pesto, and balsamic glaze on toasted ciabatta.',
    price: '$11',
    image: '/images/menu/caprese.jpg',
    imageAlt: 'Caprese sandwich with fresh mozzarella and tomatoes',
    icon: Sandwich,
    featured: false,
    dietary: ['vegetarian'],
  },

  // Beverages
  {
    id: 'espresso',
    slug: 'espresso',
    name: 'Espresso',
    category: 'beverages',
    description:
      'Rich, bold espresso pulled from our house-roasted beans. Smooth and perfectly balanced.',
    price: '$3',
    image: '/images/menu/espresso.jpg',
    imageAlt: 'Double shot espresso in ceramic cup',
    icon: Coffee,
    featured: false,
  },
  {
    id: 'cappuccino',
    slug: 'cappuccino',
    name: 'Cappuccino',
    category: 'beverages',
    description:
      'Classic cappuccino with velvety microfoam and house-roasted espresso. Available with oat, almond, or whole milk.',
    price: '$5',
    image: '/images/menu/cappuccino.jpg',
    imageAlt: 'Cappuccino with perfect latte art',
    icon: Coffee,
    featured: true,
  },

  // Specials
  {
    id: 'weekend-special',
    slug: 'weekend-special',
    name: "Baker's Weekend Special",
    category: 'specials',
    description:
      'Our pastry chef creates a unique seasonal treat every weekend. Follow us on Instagram to see this week\'s creation!',
    price: 'Varies',
    image: '/images/menu/special.jpg',
    imageAlt: 'Seasonal bakery special',
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'custom-cake',
    slug: 'custom-cake',
    name: 'Custom Celebration Cakes',
    category: 'specials',
    description:
      'Create your dream cake for birthdays, weddings, or any celebration. Consultation required - order 2 weeks in advance.',
    price: 'From $75',
    image: '/images/menu/custom-cake.jpg',
    imageAlt: 'Beautiful custom celebration cake',
    icon: Sparkles,
    featured: true,
  },
]

/**
 * Get all menu items
 */
export function getAllMenuItems(): MenuItem[] {
  return menuItems
}

/**
 * Get featured menu items only
 */
export function getFeaturedMenuItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured)
}

/**
 * Get menu items by category
 */
export function getMenuItemsByCategory(
  category: MenuItem['category']
): MenuItem[] {
  return menuItems.filter((item) => item.category === category)
}

/**
 * Get a single menu item by slug
 */
export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find((item) => item.slug === slug)
}

/**
 * Get all unique categories
 */
export function getMenuCategories(): MenuItem['category'][] {
  return ['breads', 'pastries', 'cakes', 'sandwiches', 'beverages', 'specials']
}

/**
 * Get category display name
 */
export function getCategoryDisplayName(category: MenuItem['category']): string {
  const names: Record<MenuItem['category'], string> = {
    breads: 'Artisan Breads',
    pastries: 'Pastries & Viennoiserie',
    cakes: 'Cakes & Desserts',
    sandwiches: 'Sandwiches',
    beverages: 'Coffee & Beverages',
    specials: 'Specials',
  }
  return names[category]
}
