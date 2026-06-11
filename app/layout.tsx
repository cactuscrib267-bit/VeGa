import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vega Estates | Distinctive Homes & Modern Living",
  description:
    "Vega Estates pairs refined design with personal service to help you buy, sell, and live beautifully. Explore curated luxury properties and meet our team.",
  keywords: ["real estate", "luxury homes", "property listings", "Vega Estates", "homes for sale"],
  openGraph: {
    title: "Vega Estates | Distinctive Homes & Modern Living",
    description:
      "Refined design meets personal service. Explore curated luxury properties with Vega Estates.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
