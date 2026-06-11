import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Vega Estates",
  description:
    "Get in touch with Vega Estates to book a viewing, request a valuation, or ask us anything about buying and selling.",
}

const details = [
  { icon: Mail, label: "Email", value: "hello@vegaestates.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 014-2200" },
  { icon: MapPin, label: "Office", value: "48 Maple Avenue, Suite 200" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us what you&apos;re looking for and we&apos;ll get back to you within one business day.
              No pressure, no obligation.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {details.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
