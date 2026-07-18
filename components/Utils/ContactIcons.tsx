import { m } from "framer-motion"
import Link from "next/link"

const ContactIcons = () => {
  return (
    <m.div
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      }}
    >
      {/* left — phone */}
      <div className="fixed bottom-0 right-auto z-30 flex items-center justify-center w-10 px-0 py-0 border-cyan lg:left-3 left-10">
        <div className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-20 ">
          <div className="md:rotate-90">
            <Link
              href={`tel:07449816627`}
              className="text-sm font-semibold duration-200 whitespace-nowrap text-text hover:text-cyan font-pop "
            >
              07449 816 627
            </Link>
          </div>
        </div>
      </div>
      {/* right — email */}
      <div className="fixed bottom-0 right-0 left-auto z-30 flex items-center justify-center w-10 px-0 py-0 border-cyan lg:right-3 xl:right-10">
        <div className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-20 ">
          <div className="md:rotate-90">
            <Link
              href={`mailto:davididowu172@gmail.com`}
              className="text-sm font-semibold duration-200 whitespace-nowrap text-text hover:text-cyan font-pop "
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
