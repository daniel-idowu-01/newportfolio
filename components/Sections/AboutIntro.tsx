import { site } from "../../lib/site"
import { FadeIn, HandLabel, Note, UnderlineLink } from "../Canvas/Bits"

export const skills = [
  { label: "Web Apps", bg: "var(--c-yellow)", fg: "var(--ink)", mark: true },
  { label: "RESTful APIs", bg: "var(--c-green)", fg: "var(--ink)", mark: false },
  { label: "Mobile Apps", bg: "var(--c-pink)", fg: "#ffffff", mark: true },
  { label: "Test-Driven Dev", bg: "var(--c-blue)", fg: "var(--ink)", mark: false },
]

// Hand-drawn wave that separates the hero from the rest of the page.
export const Wave = () => (
  <div aria-hidden="true" className="-mx-5 sm:-mx-8">
    <svg viewBox="0 0 1440 210" fill="none" className="h-auto w-full" preserveAspectRatio="none">
      <path
        d="M-10 130C120 60 220 190 380 120S640 30 790 110s260 90 400 10 230-50 260-30"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
)

const BoxLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="relative border border-ink px-6 py-2">
    {[
      { top: -5, left: -5 },
      { top: -5, right: -5 },
      { bottom: -5, left: -5 },
      { bottom: -5, right: -5 },
    ].map((s, i) => (
      <span key={i} aria-hidden="true" className="absolute block h-2.5 w-2.5 border-[1.5px] border-ink bg-white" style={s} />
    ))}
    <span className="text-xl text-ink sm:text-2xl">{children}</span>
  </div>
)

export const SkillTags = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    {skills.map((s) => (
      <span key={s.label} className="flex items-center gap-4">
        <span className="px-5 py-3 text-xl font-semibold tracking-tight sm:text-2xl" style={{ background: s.bg, color: s.fg }}>
          {s.label}
        </span>
        {s.mark && (
          <span
            aria-hidden="true"
            className="grid h-[52px] w-[52px] flex-shrink-0 grid-cols-2 place-items-center border-2 border-dashed border-ink p-2"
            style={{ background: s.bg }}
          >
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} className="h-3 w-3 rotate-45 bg-ink" />
            ))}
          </span>
        )}
      </span>
    ))}
  </div>
)

const AboutIntro = ({ showMore = true }: { showMore?: boolean }) => (
  <section className="relative overflow-hidden px-5 pb-24 pt-6 sm:px-8">
    <Wave />
    <HandLabel className="mt-4 sm:ml-[12%]">about me!</HandLabel>
    <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center">
      <FadeIn>
        <BoxLabel>what&apos;s up</BoxLabel>
      </FadeIn>
      <FadeIn delay={0.05}>
        <p className="mt-10 text-center text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
          I&apos;m {site.firstName}, a software engineer who likes turning complex ideas into
          well-crafted applications that solve real-world problems.
        </p>
      </FadeIn>
      <div className="mt-14 flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
        <FadeIn delay={0.1} className="max-w-sm">
          <Note color="var(--c-cream)" rotate="-rotate-2">
            I design and build resilient web and mobile apps, tune RESTful APIs for performance,
            and lean on Test-Driven Development to keep systems reliable and maintainable.
          </Note>
        </FadeIn>
        <FadeIn delay={0.18} className="max-w-sm">
          <Note color="var(--c-mint)" rotate="rotate-2">
            Hands-on and detail-oriented: I work closely with cross-disciplinary teams and make
            decisions that favour usability, efficiency, and long-term scalability.
          </Note>
        </FadeIn>
      </div>
      <FadeIn delay={0.1} className="mt-16">
        <SkillTags />
      </FadeIn>
      {showMore && (
        <div className="mt-14">
          <UnderlineLink href="/about" arrow="→">
            MORE ABOUT ME
          </UnderlineLink>
        </div>
      )}
    </div>
  </section>
)

export default AboutIntro
