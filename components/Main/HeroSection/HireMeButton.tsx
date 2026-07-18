import Link from "next/link"

const HireMeButton = () => {
  return (
    <Link
      href={`/contactme`}
      className="group flex items-center justify-center gap-3 px-6 h-12 w-fit bg-amber text-ink font-mono text-xs font-semibold uppercase tracking-label duration-300 hover:bg-bone"
    >
      get in touch
      <span className="duration-300 group-hover:translate-x-1" aria-hidden>
        &#8594;
      </span>
    </Link>
  )
}

export default HireMeButton
