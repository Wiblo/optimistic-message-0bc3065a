export const businessInfo = {
  // Core business details
  name: "Golden Gate Bakery",
  tagline: "Artisan Breads & Pastries in the Heart of San Francisco",
  logo: "/logo.png",

  // Contact information
  phone: "(415) 555-2020",
  phoneSecondary: "", // Optional second phone number
  email: "hello@goldengatebakery.com",

  // Location
  address: {
    street: "456 Valencia Street",
    area: "", // Optional (e.g., "Building Name" or "Suite 100")
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 37.7749,
    longitude: -122.4194,
  },

  // Business hours
  hours: {
    monday: "7:00am - 7:00pm",
    tuesday: "7:00am - 7:00pm",
    wednesday: "7:00am - 7:00pm",
    thursday: "7:00am - 7:00pm",
    friday: "7:00am - 8:00pm",
    saturday: "8:00am - 8:00pm",
    sunday: "8:00am - 6:00pm",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/goldengatebakery",
    instagram: "https://instagram.com/goldengatebakery",
    whatsapp: "", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://goldengatebakery.com",
  description: "San Francisco's premier artisan bakery serving fresh-baked breads, pastries, and custom cakes daily. Family-owned since 2010.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Bakery: ['LocalBusiness', 'FoodEstablishment', 'Bakery']
  schemaTypes: ['LocalBusiness', 'FoodEstablishment', 'Bakery'] as const,

  // Booking/appointment URL
  bookingUrl: "",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Golden Gate Bakery",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
