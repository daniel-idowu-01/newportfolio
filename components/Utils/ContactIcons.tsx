import { m } from "framer-motion"
import Link from "next/link"

const ContactIcons = () => {
  return (
    <m.div
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, delay: 1 },
      }}
    >
      {/* left rail — phone */}
      <div className="fixed bottom-0 right-auto z-30 flex items-center justify-center w-10 lg:left-3 left-10">
        <div className="after:block after:h-24 after:w-px after:mx-auto after:bg-line after:mt-20">
          <div className="rotate-90">
            <Link
              href={`tel:07449816627`}
              className="font-mono text-xs tracking-widest duration-300 whitespace-nowrap text-dim hover:text-amber"
            >
              07449 816 627
            </Link>
          </div>
        </div>
      </div>
      {/* right rail — email */}
      <div className="fixed bottom-0 right-0 left-auto z-30 flex items-center justify-center w-10 lg:right-3 xl:right-10">
        <div className="after:block after:h-24 after:w-px after:mx-auto after:bg-line after:mt-20">
          <div className="rotate-90">
            <Link
              href={`mailto:davididowu172@gmail.com`}
              className="font-mono text-xs tracking-widest duration-300 whitespace-nowrap text-dim hover:text-amber"
            >
              davididowu172@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default ContactIcons
