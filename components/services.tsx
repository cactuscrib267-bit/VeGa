import { Home, Key, TrendingUp, Compass } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Buying",
    description:
      "We curate listings to your taste and budget, then guide you through viewings, offers, and closing with clarity.",
  },
  {
    icon: Key,
    title: "Selling",
    description:
      "From styling and photography to pricing strategy, we position your home to attract the right buyers, faster.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Build a portfolio with data-driven advice on emerging neighborhoods, rental yields, and long-term value.",
  },
  {
    icon: Compass,
    title: "Relocation",
    description:
      "Moving to a new city? We handle the search end-to-end so you can settle into the right home with ease.",
  },
]

export function Services() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Full-service guidance, every step of the way
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
