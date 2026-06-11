import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties"

export default function HomePage() {
  const featured = properties.slice(0, 3)

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Services />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Featured</p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              A selection of our finest listings
            </h2>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Ready to find your next home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Let&apos;s talk about what you&apos;re looking for. Book a no-pressure consultation with one of
            our advisors today.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
