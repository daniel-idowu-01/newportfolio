import { m } from "framer-motion"
import Link from "next/link"
import { contactItemVariant } from "../../../variants/contactVariants"

const ContactItems = () => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <m.p
        className="mb-5 label"
        initial={contactItemVariant.heading.init}
        variants={contactItemVariant.heading}
        whileInView={contactItemVariant.heading.show}
        viewport={{ once: true }}
      >
        <span className="text-amber">&#47;&#47;</span> Manchester, United
        Kingdom
      </m.p>
      <m.h1
        className="mb-6 font-serif text-6xl text-bone md:text-8xl leading-none"
        initial={contactItemVariant.heading.init}
        variants={contactItemVariant.heading}
        whileInView={contactItemVariant.heading.show}
        viewport={{ once: true }}
      >
        Say <span className="italic text-amber">hello.</span>
      </m.h1>
      <m.p
        className="mb-8 text-sm font-light leading-relaxed text-dim md:text-base"
        initial={contactItemVariant.p1.init}
        variants={contactItemVariant.p1}
        whileInView={contactItemVariant.p1.show}
        viewport={{ once: true }}
      >
        Have a dataset that needs untangling, a business question that needs
        answering, or an opportunity to discuss? Reach me directly or send a
        message with the form below. My inbox is always open.
      </m.p>
      <m.div
        className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-8"
        initial={contactItemVariant.p1.init}
        variants={contactItemVariant.p1}
        whileInView={contactItemVariant.p1.show}
        viewport={{ once: true }}
      >
        <Link
          href="mailto:davididowu172@gmail.com"
          className="font-mono text-sm duration-300 text-dim hover:text-amber"
        >
          davididowu172@gmail.com
        </Link>
        <span className="hidden w-px h-4 md:block bg-line" aria-hidden />
        <Link
          href="tel:07449816627"
          className="font-mono text-sm duration-300 text-dim hover:text-amber"
        >
          07449 816 627
        </Link>
      </m.div>
    </div>
  )
}

export default ContactItems
