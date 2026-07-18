import Text from "../../Text/Text"
import HeroNav from "./HeroNav"
import HireMeButton from "./HireMeButton"
import ResumeButton from "./ResumeButton"
import { m } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

const reveal = (delay: number) => ({
  initial: { y: 24, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease },
  },
})

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full mx-auto">
        {/* status line */}
        <m.div
          className="flex flex-wrap items-center mb-8 gap-x-5 gap-y-2"
          {...reveal(0.15)}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-moss animate-pulse-dot" />
            <span className="label !text-moss">
              MSc Data Analytics — in progress
            </span>
          </span>
          <span className="label">
            &#47;&#47; Data Analyst — Manchester, UK
          </span>
        </m.div>

        {/* name */}
        <m.h1
          className="font-serif text-bone text-6xl sm:text-7xl md:text-[6.5rem] leading-[0.95] mb-6"
          {...reveal(0.25)}
        >
          David
          <br />
          <span className="italic text-amber">Idowu.</span>
        </m.h1>

        {/* tagline */}
        <m.p
          className="mb-8 font-serif text-3xl sm:text-4xl md:text-5xl text-dim"
          {...reveal(0.35)}
        >
          I turn data into decisions
          <span
            className="inline-block w-[0.5em] h-[0.9em] ml-2 align-baseline translate-y-[0.12em] bg-amber animate-blink"
            aria-hidden
          />
        </m.p>

        {/* brief about */}
        <div className="max-w-[40.75rem]">
          <m.p
            className="font-mono text-sm font-light md:text-base leading-relaxed text-dim"
            {...reveal(0.45)}
          >
            I design and build robust <Text text="data pipelines" />, analyse
            complex datasets using <Text text="Python" /> and{" "}
            <Text text="SQL" />, and create compelling visualisations in{" "}
            <Text text="Tableau" /> and <Text text="Excel" /> to drive informed
            decision-making and solve business challenges — with a confident,
            direct approach that prioritises teamwork, collaboration, and
            high-quality results.
          </m.p>
        </div>

        {/* buttons */}
        <m.div
          className="flex flex-wrap items-center w-full mb-10 gap-5 md:gap-7 mt-11 md:mt-14"
          {...reveal(0.55)}
        >
          <HireMeButton />
          <ResumeButton />
        </m.div>

        {/* secondary nav */}
        <m.div className="flex items-center" {...reveal(0.65)}>
          <HeroNav name="learn about me" />
        </m.div>
      </div>
    </div>
  )
}

export default HeroSection
