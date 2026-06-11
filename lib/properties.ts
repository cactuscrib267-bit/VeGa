export type Property = {
  id: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: string
  image: string
  status: "For Sale" | "For Rent" | "Sold"
  description: string
}

export const properties: Property[] = [
  {
    id: "willow-villa",
    title: "Willow Modern Villa",
    location: "Hillcrest, Aspen Valley",
    price: 2450000,
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: "Villa",
    image: "/images/property-1.png",
    status: "For Sale",
    description:
      "A sculptural villa wrapped in warm wood and glass, set against a backdrop of mature trees. Open-plan living flows seamlessly onto a private garden terrace.",
  },
  {
    id: "stone-residences",
    title: "Stone Court Residences",
    location: "Old Town, Brookfield",
    price: 1180000,
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "Apartment",
    image: "/images/property-2.png",
    status: "For Sale",
    description:
      "Refined urban living in a boutique building with warm stone detailing, generous balconies, and light-filled interiors steps from the city's best cafes.",
  },
  {
    id: "maple-family-home",
    title: "Maple Family Home",
    location: "Greenwood Heights",
    price: 695000,
    beds: 4,
    baths: 3,
    sqft: 2600,
    type: "House",
    image: "/images/property-3.png",
    status: "For Sale",
    description:
      "A welcoming family home with a manicured front lawn, clean contemporary lines, and flexible living spaces designed for growing families.",
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Downtown, Metropolitan",
    price: 3950000,
    beds: 3,
    baths: 4,
    sqft: 3200,
    type: "Penthouse",
    image: "/images/property-4.png",
    status: "For Sale",
    description:
      "Floor-to-ceiling glass frames panoramic city views in this top-floor penthouse, complete with a private rooftop terrace and bespoke finishes throughout.",
  },
  {
    id: "coastline-retreat",
    title: "Coastline Retreat",
    location: "Pacific Shores",
    price: 2890000,
    beds: 5,
    baths: 4,
    sqft: 4100,
    type: "Villa",
    image: "/images/property-5.png",
    status: "For Rent",
    description:
      "A breezy coastal retreat with crisp architecture, a sun-drenched pool, and swaying palms — built for indoor-outdoor living by the sea.",
  },
  {
    id: "hillside-estate",
    title: "Hillside Stone Estate",
    location: "Rolling Hills Country",
    price: 1750000,
    beds: 5,
    baths: 5,
    sqft: 4800,
    type: "Estate",
    image: "/images/property-6.png",
    status: "For Sale",
    description:
      "A timeless countryside estate of stone and timber nestled among rolling hills, offering privacy, character, and sweeping pastoral views.",
  },
]

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)
}
