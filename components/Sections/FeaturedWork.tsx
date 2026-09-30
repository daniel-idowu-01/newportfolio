import type { Project } from "../../lib/site"
import { HandLabel, Note, ScrollLetters, UnderlineLink } from "../Canvas/Bits"
import ProjectStack from "../Canvas/ProjectStack"

type Props = {
  projects: Project[]
  label?: string
  title?: string[]
  blurb: string
  showAll?: boolean
}

const FeaturedWork = ({ projects, label = "explore my work!", title = ["FEATURED", "WORKS"], blurb, showAll = true }: Props) => (
  <section className="px-0 pb-28 pt-6">
    <div className="flex flex-col items-center px-5 text-center sm:px-8">
      <HandLabel>{label}</HandLabel>
      <svg width="120" height="14" viewBox="0 0 120 14" fill="none" aria-hidden="true">
        <path d="M4 8c18-6 30 4 48-1s30-5 64 0" stroke="var(--c-blue)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <ScrollLetters
        lines={title}
        className="mt-8 font-pixel text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-ink"
      />
      <Note rotate="-rotate-1" className="mt-8 max-w-md px-7 sm:text-base">
        {blurb}
      </Note>
    </div>

    <ProjectStack projects={projects} />

    {showAll && (
      <div className="mt-14 flex justify-center">
        <UnderlineLink href="/projects" arrow="→">
          ALL WORK
        </UnderlineLink>
      </div>
    )}
  </section>
)

export default FeaturedWork
