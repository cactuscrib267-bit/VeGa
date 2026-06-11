import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties"

export const metadata: Metadata = {
  title: "Properties | Vega Estates",
  description:
    "Browse our curated collection of luxury homes, villas, penthouses, and estates for sale and rent.",
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Our listings</p>
          <h1 className="mt-4 max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Explore homes worth coming home to
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A curated collection across the most desirable neighborhoods — each chosen for its design,
            location, and character.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-8 text-sm text-muted-foreground">
          Showing {properties.length} properties
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
