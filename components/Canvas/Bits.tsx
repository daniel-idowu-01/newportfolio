import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { canAnimatePointer, clamp01, prefersReducedMotion } from "../../lib/motion"
import { site } from "../../lib/site"
import { Chevrons, PointerIcon } from "./Icons"

/* ---------- Pill with a pointer arrow, like a collaborator's cursor label ---------- */

type PillProps = { label: string; color: string; textColor?: string; flip?: boolean; className?: string }

export const Pill = ({ label, color, textColor = "white", flip = false, className = "" }: PillProps) => (
  <div className={`inline-flex flex-col ${flip ? "items-end" : "items-start"} ${className}`}>
    <span className={flip ? "-mb-1 -scale-x-100" : "-mb-1"}>
      <PointerIcon color={color} />
    </span>
    <span
      className="rounded-full border-2 border-ink px-4 py-1.5 font-mono text-xs font-semibold tracking-[0.12em] shadow-[3px_3px_0_rgba(20,20,20,0.9)]"
      style={{ background: color, color: textColor }}
    >
      {label}
    </span>
  </div>
)

// Drifts toward the pointer with a little tilt. Falls back to a CSS drift animation on
// touch devices or with reduced motion.
export const FloatingPill = ({
  baseRotate = 0,
  fallbackAnim,
  strength = 40,
  className = "",
  children,
}: {
  baseRotate?: number
  fallbackAnim: string
  strength?: number
  className?: string
  children: ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!canAnimatePointer()) {
      el.classList.add(fallbackAnim)
      return
    }
    let raf = 0
    let tx = 0
    let ty = 0
    let x = 0
    let y = 0
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const tick = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0) rotate(${baseRotate + x * 8}deg)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [baseRotate, fallbackAnim, strength])

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none will-change-transform ${className}`}>
      {children}
    </div>
  )
}

/* ---------- Black CTA with a round "chevrons fly through" icon ---------- */

const HandleFrame = ({ inset = "-inset-3", size = "h-3 w-3", off = -6 }: { inset?: string; size?: string; off?: number }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute ${inset} border border-ink opacity-0 transition-opacity group-hover:opacity-100`}
  >
    {[
      { top: off, left: off },
      { top: off, right: off },
      { bottom: off, left: off },
      { bottom: off, right: off },
    ].map((s, i) => (
      <span key={i} className={`absolute block ${size} border-2 border-ink bg-white`} style={s} />
    ))}
  </span>
)

export const ArrowButton = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    data-hide-cursor
    className="group relative inline-flex items-center gap-3 bg-ink py-2.5 pl-2.5 pr-7 font-mono text-sm font-semibold tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-ink"
  >
    <HandleFrame />
    <span className="flex h-10 w-10 items-center justify-center bg-c-pink" aria-hidden="true">
      <span className="h-9 w-9 overflow-hidden rounded-full bg-c-blue text-ink">
        <span className="flex h-full w-max animate-arrow-through">
          <span className="flex h-full w-9 flex-shrink-0 items-center justify-center">
            <Chevrons />
          </span>
          <span className="flex h-full w-9 flex-shrink-0 items-center justify-center">
            <Chevrons />
          </span>
        </span>
      </span>
    </span>
    <span className="px-1 transition-colors group-hover:bg-[rgba(95,190,230,0.55)]">{children}</span>
  </Link>
)

/* ---------- Mono link with an underline that stretches and text that nudges ---------- */

export const UnderlineLink = ({
  href,
  children,
  color = "var(--ink)",
  arrow = "↗",
  className = "",
}: {
  href: string
  children: ReactNode
  color?: string
  arrow?: string
  className?: string
}) => {
  const ext = href.startsWith("http")
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-300 ease-out group-hover:scale-x-[1.06]"
        style={{ background: color }}
      />
      <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
        {children}
        <span aria-hidden="true">{arrow}</span>
      </span>
    </>
  )
  const cls = `group relative inline-flex w-fit items-center pb-1 font-mono text-sm font-normal tracking-[0.14em] ${className}`
  return ext ? (
    <a href={href} target="_blank" rel="noopener noreferrer" data-hide-cursor className={cls} style={{ color }}>
      {inner}
    </a>
  ) : (
    <Link href={href} data-hide-cursor className={cls} style={{ color }}>
      {inner}
    </Link>
  )
}

/* ---------- Handwritten label with a scribbled underline ---------- */

export const HandLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`font-hand text-2xl text-ink sm:text-3xl ${className}`}>{children}</p>
)

/* ---------- Sticky note ---------- */

export const Note = ({
  color = "var(--c-cream)",
  rotate = "-rotate-2",
  className = "",
  children,
}: {
  color?: string
  rotate?: string
  className?: string
  children: ReactNode
}) => (
  <div
    className={`border border-black/10 px-6 py-5 text-sm font-medium leading-relaxed text-ink shadow-[0_2px_12px_rgba(0,0,0,0.1)] ${rotate} ${className}`}
    style={{ background: color }}
  >
    {children}
  </div>
)

/* ---------- Pixel heading whose letters fade in as it scrolls into view ---------- */

export const ScrollLetters = ({
  lines,
  className = "",
  fadeSpan = 3.5,
}: {
  lines: string[]
  className?: string
  fadeSpan?: number
}) => {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const letters = Array.from(el.querySelectorAll<HTMLElement>("[data-letter]"))
    const n = letters.length
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const p = clamp01((0.92 * vh - el.getBoundingClientRect().top) / (0.54 * vh)) * (n + fadeSpan)
      letters.forEach((l, i) => {
        l.style.opacity = String(clamp01((p - i) / fadeSpan))
      })
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [fadeSpan])

  return (
    <h2 ref={ref} className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} aria-hidden="true" className="block">
          {Array.from(line).map((ch, j) => (
            <span key={j} data-letter>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </span>
      ))}
    </h2>
  )
}

/* ---------- Live clock in the owner's timezone ---------- */

const readTime = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: site.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

export const Clock = ({ className = "" }: { className?: string }) => {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const id = setInterval(() => setTime(readTime()), 1000)
    const first = setTimeout(() => setTime(readTime()), 0)
    return () => {
      clearInterval(id)
      clearTimeout(first)
    }
  }, [])
  if (!time) return <span className={className}>&nbsp;</span>
  return (
    <span className={className} aria-label={`Current time for ${site.firstName}`}>
      {time}
      <span className="ml-1 opacity-60">{site.timezoneLabel}</span>
    </span>
  )
}

/* ---------- Fade-in-up on scroll ---------- */

// Content is only hidden when the `js` class is on <html> (set in _document), so it
// stays visible without JavaScript. See `.reveal` in globals.css.
export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in")
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
