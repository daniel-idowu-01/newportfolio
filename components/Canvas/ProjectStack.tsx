import Image from "next/image"
import { cardColors, hasImage, projectBlurb, type Project } from "../../lib/site"
import { UnderlineLink } from "./Bits"
import { FolderIcon } from "./Icons"
import SelectionBox from "./SelectionBox"

const TAB_OFFSETS = [0, 22, 44, 66]

const upper = (s: string) => s.toUpperCase()

const Preview = ({ project, dark }: { project: Project; dark: boolean }) => {
  const frame = dark ? "#ffffff" : "#161616"
  const handle = dark ? "#161616" : "#ffffff"
  const ext = project.image.split(".").pop()?.toUpperCase() ?? "PNG"

  return (
    <SelectionBox color={frame} handleFill={handle} className="self-center">
      <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:h-[440px]">
        {hasImage(project) ? (
          <Image
            src={`/${project.image}`}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0d0d0d] p-6 text-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          >
            <span className="font-pixel text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-none text-[#f5f2ea]">
              {upper(project.name)}
            </span>
            <span className="font-mono text-xs tracking-[0.16em] text-c-blue">
              $ {project.builtWith.slice(0, 3).join(" · ")}
              <span className="ml-1 inline-block animate-status-pulse">▍</span>
            </span>
          </div>
        )}
        <span
          className="absolute right-4 top-4 flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.1em]"
          style={{ background: frame, color: dark ? "#161616" : "var(--c-blue)" }}
        >
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center text-[7px] font-bold"
            style={{ background: dark ? "#161616" : "var(--c-blue)", color: frame }}
          >
            {hasImage(project) ? ext : "API"}
          </span>
          {hasImage(project) ? `PREVIEW.${ext}` : "BACKEND"}
        </span>
      </div>
    </SelectionBox>
  )
}

// Projects as a stack of coloured folders. Each one sticks under the header while the
// next slides over it, with the folder tabs staggered so they all stay visible.
const ProjectStack = ({ projects }: { projects: Project[] }) => (
  <div className="mt-20">
    {projects.map((p, i) => {
      const c = cardColors[i % cardColors.length]
      const chipBg = c.dark ? "#ffffff" : "#161616"
      const chipFg = c.dark ? "#161616" : c.bg
      const tags = p.builtWith.slice(0, 2).map(upper)
      const sameLink = p.liveLink === p.link

      return (
        <div key={p.name} className="sticky" style={{ top: 176, zIndex: i + 1 }}>
          <div className="group relative">
            <span
              className="folder-tab-mid absolute bottom-full flex h-[52px] items-center justify-center gap-2.5 px-12 pt-1 font-mono text-sm font-semibold tracking-[0.14em]"
              style={{
                background: c.bg,
                color: c.fg,
                left: `min(${TAB_OFFSETS[i % TAB_OFFSETS.length]}%, calc(100% - 280px))`,
                minWidth: 280,
              }}
            >
              <FolderIcon />
              PROJECT {String(i + 1).padStart(2, "0")}
            </span>
            <article
              className="grid gap-10 px-6 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 md:px-14 md:py-12"
              style={{ background: c.bg, color: c.fg }}
            >
              <div className="flex flex-col">
                <p className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.16em]">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: c.fg }} />
                  {tags.join("  ·  ")}
                </p>
                <h3 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{p.name}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed sm:text-lg">{projectBlurb(p)}</p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  <UnderlineLink href={p.liveLink} color={c.fg}>
                    {sameLink ? "VIEW SOURCE" : "VIEW PROJECT"}
                  </UnderlineLink>
                  {!sameLink && (
                    <UnderlineLink href={p.link} color={c.fg}>
                      SOURCE
                    </UnderlineLink>
                  )}
                </div>
                <div className="mt-auto hidden flex-wrap gap-3 pt-10 md:flex">
                  {p.builtWith.map((t) => (
                    <span
                      key={t}
                      className="folder-chip px-4 pb-2 pt-4 font-mono text-xs font-semibold tracking-[0.12em]"
                      style={{ background: chipBg, color: chipFg }}
                    >
                      {upper(t)}
                    </span>
                  ))}
                </div>
              </div>
              <Preview project={p} dark={c.dark} />
            </article>
          </div>
        </div>
      )
    })}
  </div>
)

export default ProjectStack
