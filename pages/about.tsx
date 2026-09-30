import type { NextPage } from "next"
import Image from "next/image"
import HeadSection from "../components/Head/HeadSection"
import { ArrowButton, FadeIn, HandLabel, Note, Pill, ScrollLetters } from "../components/Canvas/Bits"
import { Scribble } from "../components/Canvas/Icons"
import SelectionBox from "../components/Canvas/SelectionBox"
import AboutIntro from "../components/Sections/AboutIntro"
import LetsTalk from "../components/Sections/LetsTalk"
import { site } from "../lib/site"

const tools = [
  "javascript",
  "typescript",
  "python",
  "nodejs",
  "express",
  "nextjs",
  "react",
  "mongodb",
  "postgresql",
  "firebase",
  "docker",
  "aws",
  "git",
  "github",
  "tailwindcss",
  "figma",
]

const hoverColors = ["hover:bg-c-blue", "hover:bg-c-yellow", "hover:bg-c-mint", "hover:bg-c-cream"]

const About: NextPage = () => (
  <>
    <HeadSection title="About — Idowu Daniel" page="About" />

    <section className="relative overflow-hidden px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-[1fr_1.1fr]">
        <FadeIn className="relative mx-auto w-full max-w-sm">
          <span className="absolute -top-4 left-1/2 z-20 h-8 w-28 -translate-x-1/2 -rotate-3 bg-c-cream/80 shadow-sm" aria-hidden="true" />
          <SelectionBox className="group rotate-2 bg-white p-3 shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/daniel.jpeg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
              />
            </div>
            <p className="mt-3 text-center font-hand text-2xl text-ink">that&apos;s me :)</p>
          </SelectionBox>
          <Pill
            label={site.role.toUpperCase()}
            color="var(--c-pink)"
            className="absolute -bottom-10 -right-4 animate-float sm:-right-10"
          />
        </FadeIn>

        <div className="flex flex-col items-start">
          <HandLabel>hi there, i&apos;m</HandLabel>
          <Scribble width={130} />
          <h1 className="mt-6 font-pixel text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-ink">
            IDOWU
            <br />
            DANIEL
          </h1>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink sm:text-xl">
              A fullstack developer who designs, develops, and maintains secure, scalable, and efficient
              systems. I use modern technologies and best practices to build robust solutions that power
              high-performance applications.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Note rotate="-rotate-1" color="var(--c-mint)" className="mt-8 max-w-md">
              My goal: deliver optimised, long-term systems that meet and often exceed both the technical
              requirements and the expectations of the people using them.
            </Note>
          </FadeIn>
          <div className="mt-10">
            <ArrowButton href={site.resume}>VIEW RESUME</ArrowButton>
          </div>
        </div>
      </div>
    </section>

    <AboutIntro showMore={false} />

    <section className="px-5 pb-28 sm:px-8">
      <div className="flex flex-col items-center text-center">
        <HandLabel>tools of the trade!</HandLabel>
        <ScrollLetters
          lines={["TOOLKIT"]}
          className="mt-6 font-pixel text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-ink"
        />
        <Note rotate="rotate-1" className="mt-8 max-w-md">
          Technologies I&apos;m using now or have used recently.
        </Note>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tools.map((t, i) => (
          <FadeIn key={t} delay={(i % 4) * 0.05}>
            <div
              className={`group flex h-28 flex-col items-center justify-center gap-3 border border-ink bg-white shadow-[4px_4px_0_rgba(20,20,20,0.9)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(20,20,20,0.9)] md:h-32 ${
                hoverColors[i % hoverColors.length]
              }`}
            >
              {/* The icon files are white (made for the old dark theme), so use them as a
                  mask and paint them in ink instead. */}
              <span
                aria-hidden="true"
                className="block h-8 w-8 bg-ink transition-transform duration-300 group-hover:rotate-6 md:h-9 md:w-9"
                style={{
                  WebkitMask: `url(/images/${t}.svg) center / contain no-repeat`,
                  mask: `url(/images/${t}.svg) center / contain no-repeat`,
                }}
              />
              <span className="font-mono text-xs font-semibold tracking-[0.14em] text-ink">{t.toUpperCase()}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <LetsTalk />
  </>
)

export default About
