import Link from "next/link"

const footerLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-foreground text-background font-serif text-lg font-semibold">
                V
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight">Vega Estates</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Distinctive homes and modern living. We pair refined design with personal service to help you
              buy, sell, and live beautifully.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Explore</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Get in touch</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>hello@vegaestates.com</li>
              <li>+1 (555) 014-2200</li>
              <li>48 Maple Avenue, Suite 200</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vega Estates. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  )
}
