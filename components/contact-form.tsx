"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ve received your message and a member of our team will be in touch within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" id="firstName" required />
        <Field label="Last name" id="lastName" required />
        <Field label="Email" id="email" type="email" required />
        <Field label="Phone" id="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="mb-2 block text-sm font-medium text-foreground">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
        >
          <option>Buying a home</option>
          <option>Selling a home</option>
          <option>Investing</option>
          <option>Relocation</option>
          <option>General enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
          placeholder="Tell us a little about what you're looking for…"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  )
}

function Field({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
      />
    </div>
  )
}
