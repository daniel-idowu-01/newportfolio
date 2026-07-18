import { m } from "framer-motion"

export type ProjectCardprops = {
  name: string
  category: string
  about: string
  stat: string
  statLabel: string
  tools: string[]
  orientation: number
  index: number
}

const ProjectsCard = ({
  name,
  category,
  about,
  stat,
  statLabel,
  tools,
  orientation,
  index,
}: ProjectCardprops) => {
  const flipped = orientation === 1
  return (
    <m.article
      className="w-full"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* entry header */}
      <div className="flex items-baseline mb-3 gap-4">
        <span className="font-mono text-sm text-amber">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-serif text-3xl text-bone md:text-4xl">{name}</h2>
        <span className="flex-1 h-px translate-y-[-0.35rem] bg-line" />
      </div>
      <p className="mb-8 label">{category}</p>

      <div
        className={`flex flex-col gap-8 lg:gap-12 lg:items-stretch ${
          flipped ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* headline stat — stands in for a screenshot */}
        <div className="lg:flex-[42%] w-full">
          <div className="relative flex flex-col justify-center h-full min-h-[14rem] px-8 py-10 border border-line bg-surface/60">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber" />
            <p className="mb-4 font-serif text-5xl text-amber md:text-6xl leading-none">
              {stat}
            </p>
            <p className="text-sm font-light leading-relaxed text-dim">
              {statLabel}
            </p>
          </div>
        </div>

        {/* text */}
        <div className="lg:flex-[58%] flex flex-col justify-center">
          <p className="mb-6 text-sm font-light leading-relaxed text-dim md:text-base">
            {about}
          </p>

          <ul className="flex flex-wrap gap-x-2 gap-y-2 font-mono text-xs text-amber/90">
            {tools.map((item, i) => (
              <li key={item} className="lowercase">
                {item}
                {i < tools.length - 1 && (
                  <span className="ml-2 text-line" aria-hidden>
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </m.article>
  )
}

export default ProjectsCard
