import Link from "next/link"
import { m } from "framer-motion"

type Props = {
  handleMenuToggle: () => void
}

const resumeLink = "/docs/resume.pdf"

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = ["home", "about", "projects", "contact me"]
  return (
    <m.div
      className="fixed top-0 right-0 z-50 w-4/5 h-screen overflow-hidden border-l md:hidden bg-veryDark/95 backdrop-blur-md border-line"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col justify-center w-full h-full px-8">
        {/* close */}
        <button
          className="absolute p-2 right-5 top-5 text-dim hover:text-amber"
          onClick={handleMenuToggle}
          aria-label="close mobile menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 3l14 14M17 3L3 17" />
          </svg>
        </button>

        <p className="mb-8 label">Menu</p>

        {/* links */}
        <nav className="flex flex-col space-y-6">
          {linkArray.map((item, index) => (
            <m.div
              key={item}
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.1 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <Link
                href={
                  item === "home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="flex items-baseline gap-3 duration-300 w-fit group"
                onClick={handleMenuToggle}
              >
                <span className="font-mono text-xs text-amber">
                  {String(index).padStart(2, "0")}
                </span>
                <span className="font-serif text-4xl capitalize text-bone group-hover:text-amber group-hover:italic">
                  {item}
                </span>
              </Link>
            </m.div>
          ))}
        </nav>

        <div className="w-full h-px mt-10 mb-8 bg-line" />

        <Link
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-5 font-mono text-sm border w-fit gap-6 h-11 border-line text-dim hover:text-amber hover:border-amber duration-300"
        >
          <span className="uppercase tracking-label">Resume</span>
          <span aria-hidden>&#8599;</span>
        </Link>
      </div>
    </m.div>
  )
}

export default Mobile
