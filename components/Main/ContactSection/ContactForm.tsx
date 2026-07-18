import { m } from "framer-motion"
import { contactFormVariant } from "../../../variants/contactVariants"

const inputClasses =
  "h-full w-full outline-none bg-surface border border-line focus-visible:border-amber hover:border-dim rounded-none text-bone placeholder:text-dim/70 caret-amber px-4 lg:px-6 text-sm lg:text-base font-mono font-light duration-300"

const ContactForm = () => {
  return (
    <m.form
      action="https://formsubmit.co/davididowu172@gmail.com"
      method="POST"
      className="flex flex-col items-center justify-center w-full space-y-5"
      initial={contactFormVariant.name.init}
      variants={contactFormVariant.name}
      animate={contactFormVariant.name.show}
    >
      <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <label className="block mb-2 label" htmlFor="contact-name">
          01 — Name
        </label>
        <div className="h-14">
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="what's your name?"
            className={inputClasses}
            aria-label="enter your name"
            required
          />
        </div>
      </div>
      <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <label className="block mb-2 label" htmlFor="contact-email">
          02 — Email
        </label>
        <div className="h-14">
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="what's your @email address?"
            className={inputClasses}
            required
          />
        </div>
      </div>
      <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <label className="block mb-2 label" htmlFor="contact-message">
          03 — Message
        </label>
        <div className="h-14">
          <input
            id="contact-message"
            type="text"
            name="textarea"
            placeholder="what would you like to discuss?"
            className={inputClasses}
            required
          />
        </div>
        <input type="hidden" name="_captcha" value="false" />
      </div>
      <div className="w-full pt-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <button
          type="submit"
          aria-label="send me the email"
          className="w-full h-14 font-mono text-xs font-semibold uppercase tracking-label duration-300 outline-none bg-amber text-ink hover:bg-bone focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Send message &#8594;
        </button>
      </div>
    </m.form>
  )
}

export default ContactForm
