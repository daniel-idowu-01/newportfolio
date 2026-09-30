import type { NextPage } from "next"
import HeadSection from "../components/Head/HeadSection"
import { FadeIn, HandLabel, Note } from "../components/Canvas/Bits"
import { Scribble } from "../components/Canvas/Icons"
import Mascot from "../components/Canvas/Mascot"
import SelectionBox from "../components/Canvas/SelectionBox"
import ContactForm from "../components/Sections/ContactForm"
import { site } from "../lib/site"

const channels = [
  { label: "EMAIL", value: site.email, href: `mailto:${site.email}`, bg: "var(--c-blue)" },
  { label: "GITHUB", value: "daniel-idowu-01", href: site.socials.github, bg: "var(--c-yellow)" },
  { label: "LINKEDIN", value: "in/daniel-idowu", href: site.socials.linkedin, bg: "var(--c-mint)" },
]

const ContactMe: NextPage = () => (
  <>
    <HeadSection page="Contact" title="Contact — Idowu Daniel" />

    <section className="px-5 pb-28 pt-16 sm:px-8">
      <div className="flex flex-col items-center text-center">
        <HandLabel>say hello!</HandLabel>
        <Scribble width={120} />
        <h1 className="mt-6 whitespace-nowrap font-pixel text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-none tracking-wide text-ink">
          GET&nbsp;&nbsp;IN&nbsp;&nbsp;TOUCH
        </h1>
        <Note rotate="-rotate-1" className="mt-8 max-w-lg sm:text-base">
          Got an idea, or want to bring your product to the web? Tell me about it using the form, or
          reach me on any of the channels below. My inbox is always open.
        </Note>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl items-start gap-14 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          {channels.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-hide-cursor
                className="group flex items-center justify-between gap-4 border-2 border-ink px-5 py-4 shadow-[4px_4px_0_rgba(20,20,20,0.9)] transition-all hover:-translate-y-0.5 hover:bg-coal hover:text-white"
              >
                <span className="flex items-center gap-4">
                  <span className="h-3 w-3 rounded-full border-2 border-ink" style={{ background: c.bg }} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold tracking-[0.16em]">{c.label}</span>
                </span>
                <span className="flex items-center gap-2 truncate text-base font-semibold sm:text-lg">
                  {c.value}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </FadeIn>
          ))}
          <div className="mt-6 hidden justify-center md:flex">
            <Mascot />
          </div>
        </div>

        <FadeIn delay={0.1}>
          <SelectionBox color="var(--ink)" className="bg-white p-6 shadow-[0_14px_50px_rgba(0,0,0,0.12)] sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink">NEW MESSAGE</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-c-pink" />
                <span className="h-3 w-3 rounded-full bg-c-yellow" />
                <span className="h-3 w-3 rounded-full bg-c-green" />
              </span>
            </div>
            <ContactForm />
          </SelectionBox>
        </FadeIn>
      </div>
    </section>
  </>
)

export default ContactMe
