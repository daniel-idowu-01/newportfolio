import Link from "next/link"
import { site } from "../../lib/site"
import Ruler from "./Ruler"

const links = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "GITHUB", href: site.socials.github },
  { label: "X (TWITTER)", href: site.socials.twitter },
  { label: "LINKEDIN", href: site.socials.linkedin },
  { label: "RESUME", href: site.resume },
]

const Tile = () => (
  <span
    aria-hidden="true"
    className="relative hidden h-16 w-16 flex-shrink-0 items-center justify-center bg-c-pink transition-colors group-hover:bg-coal sm:flex"
  >
    <span className="tile-roll absolute inset-1.5 bg-c-pink opacity-0 transition-opacity group-hover:opacity-100" />
    <span className="absolute inset-2.5 rotate-45 bg-coal" />
    <span className="tile-roll-rev relative font-pixel text-2xl font-bold text-c-yellow">»</span>
  </span>
)

const Footer = () => (
  <footer className="relative px-3 pb-0 pt-28 sm:px-5">
    {/* A design-tool comment pinned over the panel */}
    <div className="absolute left-5 top-2 z-10 w-[340px] max-w-[85vw] rounded-2xl bg-white p-6 shadow-[0_14px_50px_rgba(0,0,0,0.18)] sm:left-[7%]">
      <p className="text-lg text-gray-400">Comment</p>
      <hr className="mt-3 border-black/10" />
      <div className="mt-5 flex gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
          style={{ background: "linear-gradient(135deg, var(--c-blue) 58%, var(--c-yellow) 58%)" }}
        >
          ID
        </span>
        <div>
          <p className="text-[17px] font-semibold text-ink">{site.name}</p>
          <p className="mt-1.5 text-[17px] leading-snug text-ink/85">
            Got an idea you want to bring to the web? My inbox is always open.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-c-blue bg-c-blue/10 px-3 py-1.5 text-sm font-medium text-ink">
            <span aria-hidden="true">⚡</span> 1
          </span>
        </div>
      </div>
    </div>

    <div className="relative overflow-hidden rounded-[36px] rounded-b-none bg-c-yellow">
      <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <path d="M-40 520C160 380 260 640 460 500S760 260 920 400s260 60 340-40" stroke="rgba(20,20,20,0.14)" strokeWidth="2" fill="none" />
        <path d="M-40 600C200 470 300 700 540 560S840 360 1000 470s200 40 260-20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
        <circle cx="1010" cy="170" r="90" stroke="rgba(20,20,20,0.12)" strokeWidth="2" fill="none" />
        <circle cx="1010" cy="170" r="54" stroke="rgba(20,20,20,0.12)" strokeWidth="2" fill="none" />
      </svg>
      <div className="relative flex min-h-[420px] items-center justify-center px-6 py-24 sm:min-h-[560px]">
        <Link
          href="/contactme"
          data-hide-cursor
          className="contact-plate group relative flex items-center gap-5 border-[3px] border-ink bg-c-blue px-5 py-4 shadow-[6px_6px_0_rgba(20,20,20,0.9)] transition-colors hover:bg-coal sm:px-8"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -inset-4 border-2 border-white opacity-0 transition-opacity group-hover:opacity-100">
            {[
              { top: -9, left: -9 },
              { top: -9, right: -9 },
              { bottom: -9, left: -9 },
              { bottom: -9, right: -9 },
            ].map((s, i) => (
              <span key={i} className="absolute block h-4 w-4 border-2 border-coal bg-white" style={s} />
            ))}
          </span>
          <Tile />
          <span className="px-3 font-pixel text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-none tracking-wide text-ink transition-colors group-hover:bg-[rgba(95,190,230,0.35)] group-hover:text-c-blue">
            CONTACT
          </span>
          <Tile />
        </Link>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 bg-white px-5 py-5 sm:px-8">
      <p className="font-mono text-xs text-gray-400">
        © {new Date().getFullYear()} {site.name.toUpperCase()}
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-mono text-xs font-semibold tracking-[0.08em] text-ink transition-colors hover:text-c-pink"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
    <Ruler className="border-t" />
  </footer>
)

export default Footer
