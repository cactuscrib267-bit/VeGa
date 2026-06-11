import Image from "next/image"
import { Bed, Bath, Maximize } from "lucide-react"
import { type Property, formatPrice } from "@/lib/properties"

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={`${property.title} in ${property.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {property.status}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">
              {property.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{property.location}</p>
          </div>
          <p className="whitespace-nowrap font-serif text-lg font-semibold text-accent">
            {formatPrice(property.price)}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {property.description}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-accent" />
            {property.beds} beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-accent" />
            {property.baths} baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-accent" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </article>
  )
}
