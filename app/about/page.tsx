import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Vega Estates",
  description:
    "Learn about Vega Estates — a boutique real estate studio pairing refined design with personal, data-driven service.",
}

const values = [
  {
    title: "Design-led",
    description:
      "We believe a home should feel as good as it looks. Every listing is chosen and presented with a designer's eye.",
  },
  {
    title: "Personal",
    description:
      "You work directly with a dedicated advisor — no call centers, no hand-offs, just one trusted point of contact.",
  },
  {
    title: "Data-driven",
    description:
      "Pricing, timing, and negotiation grounded in real market data, so every decision is made with confidence.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Our story</p>
            <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              A boutique studio for modern living
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Vega Estates was founded on a simple idea: buying or selling a home should feel considered,
              calm, and genuinely personal. For over fifteen years we&apos;ve helped families and investors
              find spaces that fit their lives.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We&apos;re a small, senior team by design. That means the person you meet is the person who
              guides you from first viewing to final signature — combining the warmth of a boutique with the
              reach of a national network.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/about-team.png"
              alt="The bright, modern Vega Estates office interior with warm wood and natural light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            What guides our work
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div key={value.title}>
                <span className="font-serif text-3xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Let&apos;s find your place
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re buying, selling, or simply exploring, we&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Contact our team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
