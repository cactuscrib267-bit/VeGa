import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Distinctive homes &amp; modern living
        </p>
        <h1 className="mt-5 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Find a home that feels exquisitely yours
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Vega Estates pairs refined design with personal service to help you buy, sell, and live
          beautifully across the country&apos;s most sought-after neighborhoods.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Browse properties
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Book a consultation
          </Link>
        </div>
      </div>

      <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl border border-border md:mt-20">
        <Image
          src="/images/hero-home.png"
          alt="A modern luxury home at golden hour with large glass windows and manicured landscaping"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
        {[
          { value: "480+", label: "Homes sold" },
          { value: "$1.2B", label: "In closed sales" },
          { value: "15 yrs", label: "Of experience" },
          { value: "98%", label: "Client satisfaction" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
