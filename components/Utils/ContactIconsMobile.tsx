import { m } from "framer-motion"
import Link from "next/link"

const ContactIconsMobile = () => {
  return (
    <m.div
      className="fixed bottom-0 left-0 z-30 flex items-center justify-between w-full h-6 px-6 py-5 md:hidden bg-gray/30"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      }}
    >
      {/* left — phone */}
      <Link
        href={`tel:07449816627`}
        className="text-sm font-semibold duration-200 text-text hover:text-cyan font-pop "
      >
        07449 816 627
      </Link>
      {/* right — email */}
      <Link
        href={`mailto:davididowu172@gmail.com`}
        className="text-sm font-semibold duration-200 text-text hover:text-cyan font-pop "
      >
        davididowu172@gmail.com
      </Link>
    </m.div>
  )
}

export default ContactIconsMobile
