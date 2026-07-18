import Link from "next/link"

const resumeLink = "/docs/resume.pdf"

const ResumeButton = () => {
  return (
    <Link
      href={resumeLink}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-3 px-6 h-12 w-fit border border-line text-dim font-mono text-xs uppercase tracking-label duration-300 hover:text-amber hover:border-amber"
    >
      view resume
      <span aria-hidden>&#8599;</span>
    </Link>
  )
}

export default ResumeButton
