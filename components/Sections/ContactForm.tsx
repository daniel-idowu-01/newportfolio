import { useState, type FormEvent } from "react"
import { site } from "../../lib/site"
import { Chevrons } from "../Canvas/Icons"

type Status = "idle" | "sending" | "sent" | "error"

const fieldClass =
  "w-full border-2 border-ink bg-white px-4 py-3.5 text-base text-ink outline-none transition-shadow placeholder:text-gray-400 focus:shadow-[4px_4px_0_var(--c-blue)] focus-visible:shadow-[4px_4px_0_var(--c-blue)] disabled:opacity-60"

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="mb-2 block font-mono text-xs font-semibold tracking-[0.16em] text-ink">{label}</span>
    {children}
  </label>
)

// Submits to FormSubmit's AJAX endpoint so the visitor stays on the page. The plain
// `action` is kept as a no-JavaScript fallback. If FormSubmit fails (it can return 500s),
// we offer a mailto link pre-filled with the message so nothing typed is lost.
const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle")
  const [draft, setDraft] = useState({ name: "", email: "", message: "" })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setDraft({ name: data.name, email: data.email, message: data.message })
    setStatus("sending")

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio message from ${data.name}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      })
      const json = await res.json().catch(() => null)
      const ok = res.ok && (json?.success === true || json?.success === "true")
      if (!ok) throw new Error(json?.message ?? `HTTP ${res.status}`)
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Portfolio message from ${draft.name}`,
  )}&body=${encodeURIComponent(`${draft.message}\n\n— ${draft.name} (${draft.email})`)}`

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-5 py-6">
        <span className="font-pixel text-4xl font-bold text-ink">SENT!</span>
        <p className="text-lg leading-relaxed text-ink">
          Thanks for reaching out. Your message is in my inbox and I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border-b border-ink pb-1 font-mono text-sm tracking-[0.14em] text-ink"
        >
          SEND ANOTHER →
        </button>
      </div>
    )
  }

  const sending = status === "sending"

  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      onSubmit={onSubmit}
      className="flex flex-col gap-6"
    >
      <Field label="YOUR NAME">
        <input type="text" name="name" placeholder="What's your name?" className={fieldClass} disabled={sending} required />
      </Field>
      <Field label="YOUR EMAIL">
        <input type="email" name="email" placeholder="you@example.com" className={fieldClass} disabled={sending} required />
      </Field>
      <Field label="MESSAGE">
        <textarea
          name="message"
          rows={5}
          placeholder="What do you have for me?"
          className={`${fieldClass} resize-y`}
          data-lenis-prevent
          disabled={sending}
          required
        />
      </Field>
      <input type="hidden" name="_captcha" value="false" />
      {/* Honeypot: bots fill this in, FormSubmit drops those submissions */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <div role="alert" className="border-2 border-ink bg-c-cream px-5 py-4 text-sm leading-relaxed text-ink">
          <p className="font-mono text-xs font-semibold tracking-[0.16em]">COULDN&apos;T SEND</p>
          <p className="mt-2">
            The form service is having trouble right now. You can{" "}
            <a href={mailto} className="font-semibold underline underline-offset-2">
              send it by email instead
            </a>{" "}
            (your message is already filled in) or try again in a moment.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        data-hide-cursor
        className="group mt-2 inline-flex w-fit items-center gap-3 bg-ink py-2.5 pl-2.5 pr-7 font-mono text-sm font-semibold tracking-[0.14em] text-white transition-colors hover:bg-c-blue hover:text-ink disabled:cursor-wait disabled:opacity-70"
      >
        <span className="flex h-10 w-10 items-center justify-center bg-c-pink" aria-hidden="true">
          <span className="h-9 w-9 overflow-hidden rounded-full bg-c-blue text-ink">
            <span className={`flex h-full w-max animate-arrow-through ${sending ? "[animation-play-state:running]" : ""}`}>
              <span className="flex h-full w-9 flex-shrink-0 items-center justify-center">
                <Chevrons />
              </span>
              <span className="flex h-full w-9 flex-shrink-0 items-center justify-center">
                <Chevrons />
              </span>
            </span>
          </span>
        </span>
        {sending ? "SENDING…" : status === "error" ? "TRY AGAIN" : "SEND IT"}
      </button>
    </form>
  )
}

export default ContactForm
