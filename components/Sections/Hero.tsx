import { site } from "../../lib/site"
import { ArrowButton, Clock, FloatingPill, HandLabel, Pill } from "../Canvas/Bits"
import { Scribble, Spinner, Target } from "../Canvas/Icons"
import LensReveal from "../Canvas/LensReveal"
import SelectionBox from "../Canvas/SelectionBox"

const Name = ({ inverted }: { inverted: boolean }) => {
  // The inverted copy is decorative, so only the real one is a heading.
  const Tag = inverted ? "div" : "h1"
  return (
    <SelectionBox color={inverted ? "#c2410c" : "var(--c-blue)"}>
      <Tag
        className={`whitespace-nowrap px-3 py-2 font-pixel text-[clamp(1.9rem,7vw,5.6rem)] font-extrabold leading-none tracking-tight sm:px-8 ${
          inverted ? "text-[#f5f2ea]" : "text-ink"
        }`}
      >
        {site.name.toUpperCase()}
      </Tag>
    </SelectionBox>
  )
}

const Hero = () => (
  <section className="relative overflow-hidden px-5 pb-20 pt-8 sm:px-8">
    <div className="flex justify-center">
      <Clock className="select-none font-mono text-sm tabular-nums tracking-[0.2em] text-ink" />
    </div>

    <div className="relative mx-auto mt-16 flex max-w-4xl flex-col items-center sm:mt-20">
      <div className="flex animate-fade-in-up flex-col items-center">
        <HandLabel>my name is</HandLabel>
        <Scribble />
      </div>

      <div className="relative mt-6 animate-fade-in-up [animation-delay:120ms]">
        <span className="absolute -top-8 left-0 z-20 -translate-x-[6%] -rotate-6 whitespace-nowrap border border-black/10 bg-c-mint px-2.5 py-1.5 text-[10px] font-medium text-ink shadow-[0_2px_10px_rgba(0,0,0,0.12)] sm:-top-10 sm:px-5 sm:py-3 sm:text-sm">
          Recently shipped PairPad
        </span>
        <span className="absolute -top-6 right-0 z-20 translate-x-[4%] rotate-3 whitespace-nowrap border border-black/10 bg-c-cream px-2.5 py-1.5 text-[10px] font-medium text-ink shadow-[0_2px_10px_rgba(0,0,0,0.12)] sm:-top-9 sm:px-5 sm:py-3 sm:text-sm">
          Author of DexterDB
        </span>
        <LensReveal
          size={420}
          className="-m-3"
          padding="p-3"
          overlayStyle={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "170px 170px",
          }}
          render={(inverted) => <Name inverted={inverted} />}
        />
      </div>

      <p className="mt-7 flex animate-fade-in-up items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-ink [animation-delay:220ms] sm:text-sm">
        <span aria-hidden="true" className="h-3.5 w-3.5 animate-status-pulse rounded-full bg-c-blue" />
        AVAILABLE FOR NEW WORK
      </p>

      {/* Pills sit inline on small screens and float freely on large ones */}
      <Pill label="WEB · MOBILE · APIS" color="var(--c-pink)" flip className="mt-12 animate-pill-b self-end lg:hidden" />
      <Pill label="FULLSTACK DEVELOPER" color="var(--c-yellow)" textColor="var(--ink)" className="mt-6 animate-pill-a self-start lg:hidden" />
    </div>

    <FloatingPill baseRotate={7} fallbackAnim="animate-pill-b" className="absolute right-[12%] top-[48%] hidden lg:block">
      <Pill label="WEB · MOBILE · APIS" color="var(--c-pink)" flip />
    </FloatingPill>
    <FloatingPill baseRotate={-10} fallbackAnim="animate-pill-a" strength={-34} className="absolute left-[12%] top-[52%] hidden lg:block">
      <Pill label="FULLSTACK DEVELOPER" color="var(--c-yellow)" textColor="var(--ink)" />
    </FloatingPill>

    <div className="mx-auto mt-16 max-w-2xl animate-fade-in-up text-center [animation-delay:320ms] sm:mt-20">
      <p className="text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
        I design <Target /> and build secure, scalable systems for the web and{" "}
        <span className="whitespace-nowrap">
          mobile <Spinner />.
        </span>
      </p>
      <div className="mt-10">
        <ArrowButton href="/contactme">HIRE ME</ArrowButton>
      </div>
    </div>
  </section>
)

export default Hero
