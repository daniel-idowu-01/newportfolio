import { m } from "framer-motion"
import Link from "next/link"

const ContactIconsMobile = () => {
  return (
    <m.div
      className="fixed bottom-0 left-0 z-30 flex items-center justify-between w-full px-6 py-4 md:hidden bg-ink/85 backdrop-blur-md border-t border-line"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, delay: 1 },
      }}
    >
      <Link
        href={`tel:07449816627`}
        className="font-mono text-xs tracking-wide duration-300 text-dim hover:text-amber"
      >
        07449 816 627
      </Link>
      <Link
        href={`mailto:davididowu172@gmail.com`}
        className="font-mono text-xs tracking-wide duration-300 text-dim hover:text-amber"
      >
        davididowu172@gmail.com
      </Link>
    </m.div>
  )
}

export default ContactIconsMobile
