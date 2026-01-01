"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { getFeaturedMenuItems, getMenuCategories, getCategoryDisplayName } from "@/lib/data/menu"
import type { MenuItem } from "@/lib/data/menu"
import { Badge } from "@/components/ui/badge"

export interface MenuGridProps {
  title?: string
  subtitle?: string
  showCategoryFilter?: boolean
  className?: string
}

/**
 * Menu item card component
 */
function MenuItemCard({ item }: { item: MenuItem }) {
  const Icon = item.icon

  return (
    <div className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.dietary && item.dietary.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap gap-1">
            {item.dietary.map((diet) => (
              <Badge
                key={diet}
                variant="secondary"
                className="bg-background/90 text-xs capitalize backdrop-blur-sm"
              >
                {diet}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        {/* Icon & Title */}
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {item.name}
            </h3>
            <div className="mt-1">
              <span className="text-base font-medium text-primary">{item.price}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  )
}

/**
 * Menu Grid section component
 * Displays featured menu items from the menu data file
 */
export function MenuGrid({
  title = "Menu Highlights",
  subtitle = "Discover our signature artisan breads, pastries, and handcrafted treats",
  showCategoryFilter = false,
  className,
}: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'all'>('all')
  const featuredItems = getFeaturedMenuItems()
  const categories = getMenuCategories()

  const displayedItems = selectedCategory === 'all'
    ? featuredItems
    : featuredItems.filter(item => item.category === selectedCategory)

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-balance mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Category Filter */}
        {showCategoryFilter && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === 'all'
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              type="button"
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
                type="button"
              >
                {getCategoryDisplayName(category)}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayedItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {displayedItems.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </Container>
    </SectionWrapper>
  )
}
