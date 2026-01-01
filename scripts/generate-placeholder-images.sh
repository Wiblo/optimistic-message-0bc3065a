#!/bin/bash

# Generate SVG placeholder images for bakery menu items

# Function to create a placeholder SVG
create_placeholder() {
  local filename=$1
  local title=$2
  local emoji=$3
  local color=$4

  cat > "$filename" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="$color"/>
  <circle cx="400" cy="300" r="180" fill="rgba(255,255,255,0.1)"/>
  <circle cx="400" cy="300" r="140" fill="rgba(255,255,255,0.15)"/>
  <text x="400" y="280" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle">$emoji</text>
  <text x="400" y="360" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="600">$title</text>
  <text x="400" y="400" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.7)" text-anchor="middle">Replace with photo (800x600)</text>
</svg>
EOF
}

# Menu items
create_placeholder "public/images/menu/baguette.jpg" "French Baguette" "🥖" "#92400e"
create_placeholder "public/images/menu/ciabatta.jpg" "Olive Ciabatta" "🫒" "#78350f"
create_placeholder "public/images/menu/croissant.jpg" "Butter Croissant" "🥐" "#f59e0b"
create_placeholder "public/images/menu/pain-au-chocolat.jpg" "Pain au Chocolat" "🍫" "#7c2d12"
create_placeholder "public/images/menu/almond-croissant.jpg" "Almond Croissant" "🌰" "#d97706"
create_placeholder "public/images/menu/chocolate-cake.jpg" "Chocolate Cake" "🍰" "#451a03"
create_placeholder "public/images/menu/lemon-tart.jpg" "Lemon Tart" "🍋" "#fbbf24"
create_placeholder "public/images/menu/cheesecake.jpg" "Cheesecake" "🧀" "#fef3c7"
create_placeholder "public/images/menu/ham-brie.jpg" "Ham & Brie" "🥪" "#059669"
create_placeholder "public/images/menu/caprese.jpg" "Caprese" "🍅" "#dc2626"
create_placeholder "public/images/menu/espresso.jpg" "Espresso" "☕" "#44403c"
create_placeholder "public/images/menu/cappuccino.jpg" "Cappuccino" "☕" "#78716c"
create_placeholder "public/images/menu/special.jpg" "Weekend Special" "✨" "#8b5cf6"
create_placeholder "public/images/menu/custom-cake.jpg" "Custom Cake" "🎂" "#ec4899"

# Feature images
create_placeholder "public/images/feature-handcraft.jpg" "Handcrafted" "👨‍🍳" "#92400e"
create_placeholder "public/images/feature-ingredients.jpg" "Local Ingredients" "🌾" "#16a34a"
create_placeholder "public/images/feature-fresh.jpg" "Fresh Daily" "🔥" "#dc2626"

# About and CTA
create_placeholder "public/images/about-bakery.jpg" "Our Bakery" "👩‍🍳" "#f59e0b"
create_placeholder "public/images/cta-background.jpg" "Custom Cakes" "🎂" "#a855f7"

echo "✓ All placeholder images created successfully!"
