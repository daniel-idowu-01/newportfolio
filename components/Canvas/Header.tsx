import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { site } from "../../lib/site"
import { DownloadIcon, GridIcon, HomeIcon, MailIcon, UserIcon } from "./Icons"

const nav = [
  { href: "/", label: "HOME", Icon: HomeIcon },
  { href: "/about", label: "ABOUT", Icon: UserIcon },
  { href: "/projects", label: "WORK", Icon: GridIcon },
  { href: "/contactme", label: "CONTACT", Icon: MailIcon },
]

const socials = [
  { short: "EM", title: "Email", href: `mailto:${site.email}`, tip: site.email.toUpperCase() },
  { short: "GH", title: "GitHub", href: site.socials.github, tip: "GITHUB.COM/DANIEL-IDOWU-01" },
  { short: "LI", title: "LinkedIn", href: site.socials.linkedin, tip: "IN/DANIEL-IDOWU" },
]

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}

const Header = () => {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)

  const linkClass = (active: boolean) =>
    `font-mono text-sm font-semibold tracking-wide text-ink transition-colors ${
      active ? "bg-c-blue" : "hover:bg-c-cream"
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="flex h-[64px] items-stretch border-b border-black/10 bg-white pl-5 pr-4 sm:pl-8 sm:pr-6">
        <Link aria-label="Home" className="flex items-center pr-6" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo.svg" alt="" width={34} height={30} />
        </Link>

        <nav aria-label="Main" className="hidden items-stretch md:flex">
          {nav.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={`flex items-center gap-2.5 px-6 ${linkClass(pathname === href)}`}>
              <span aria-hidden="true">
                <Icon />
              </span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          {socials.map((s) => (
            <span key={s.short} className="group relative flex">
              <a
                href={s.href}
                title={s.title}
                {...external(s.href)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 font-mono text-xs font-semibold text-ink transition-colors group-hover:bg-c-blue"
              >
                {s.short}
              </a>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-full mt-4 hidden whitespace-nowrap bg-c-blue px-5 py-3.5 font-mono text-sm font-semibold tracking-wide text-ink group-hover:block"
              >
                {s.tip}
              </span>
            </span>
          ))}
          <a
            href={site.resume}
            {...external(site.resume)}
            className="flex items-center gap-2 border-2 border-ink px-4 py-1.5 font-mono text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <DownloadIcon /> RESUME
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex items-center gap-2.5 self-center border-2 border-ink bg-white px-3.5 py-1.5 font-mono text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white md:hidden"
        >
          {open ? "CLOSE" : "MENU"}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 1l10 10M13 1L3 11" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-[480px] border-b border-black/10" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile">
          {nav.map(({ href, label, Icon }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-4 px-5 py-4 ${linkClass(pathname === href)}`}>
              <span aria-hidden="true" className="flex w-5 justify-center">
                <Icon />
              </span>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <a
            href={site.resume}
            {...external(site.resume)}
            className="flex items-center gap-2 border-2 border-ink px-3 py-1 font-mono text-xs font-semibold text-ink"
          >
            <DownloadIcon size={12} /> RESUME
          </a>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.short}
                href={s.href}
                title={s.title}
                {...external(s.href)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 font-mono text-xs font-semibold text-ink"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
