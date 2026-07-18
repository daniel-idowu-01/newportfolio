import Link from "next/link"
import { useEffect, useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import { AnimatePresence, m } from "framer-motion"

const resumeLink = "/docs/resume.pdf"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => setIsOpen((open) => !open)

  useEffect(() => {
    const body = document.querySelector("body")
    isOpen
      ? body?.classList.add("no-scroll")
      : body?.classList.remove("no-scroll")
  }, [isOpen])

  return (
    <header className="flex items-center justify-center w-full h-16 md:h-20 lg:h-[5rem] bg-ink/85 fixed top-0 left-0 z-50 px-6 md:px-10 lg:px-14 backdrop-blur-md border-b border-line">
      <nav className="flex items-center justify-between w-full">
        {/* monogram */}
        <Link href={"/"} aria-label="home">
          <m.p
            className="font-serif text-3xl text-bone select-none"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            di<span className="text-amber">.</span>
          </m.p>
        </Link>

        {/* desktop links */}
        <div className="items-center hidden space-x-8 md:flex">
          <Desktop />
          <m.div
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <Link
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-5 font-mono text-xs uppercase duration-300 border gap-3 h-10 tracking-label border-line text-dim hover:text-amber hover:border-amber"
            >
              Resume
              <span aria-hidden>&#8599;</span>
            </Link>
          </m.div>
        </div>

        {/* hamburger */}
        <m.button
          className="flex flex-col items-end justify-center p-1 gap-[7px] md:hidden group"
          onClick={handleMenuToggle}
          aria-label="open mobile menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <span className="block h-px w-8 bg-bone group-hover:bg-amber duration-300" />
          <span className="block h-px w-5 bg-bone group-hover:bg-amber duration-300" />
        </m.button>

        {/* mobile menu */}
        <AnimatePresence initial={false} mode={"wait"}>
          {isOpen && <Mobile handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
