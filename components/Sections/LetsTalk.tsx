import { FadeIn } from "../Canvas/Bits"
import Mascot from "../Canvas/Mascot"

const LetsTalk = ({ id = "contact" }: { id?: string }) => (
  <section id={id} className="scroll-mt-24 px-5 pb-28 pt-8 sm:px-8">
    <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
      <div className="flex justify-center">
        <Mascot />
      </div>
      <FadeIn>
        <h2 className="whitespace-nowrap font-pixel text-[clamp(2.6rem,6.5vw,5.5rem)] font-bold leading-none tracking-wide text-ink">
          LET&apos;S&nbsp;&nbsp;TALK
        </h2>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink sm:text-xl">
          Have an idea, or want to bring your product to the web? I&apos;m open to new work and
          always happy to chat. My inbox is always open.
        </p>
      </FadeIn>
    </div>
  </section>
)

export default LetsTalk
