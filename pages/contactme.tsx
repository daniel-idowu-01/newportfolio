import type { NextPage } from "next"
import { ContactForm, ContactItems, HeadSection } from "../components"

const ContactMe: NextPage = () => {
  return (
    <>
      <HeadSection page="Contact" title="David Idowu — Contact" />
      <main className="relative w-full min-h-screen py-16 overflow-x-hidden font-mono">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <section className="pt-11 md:pt-20 lg:pt-24 pb-10">
              <ContactItems />
            </section>
            <section className="flex flex-col justify-center w-full pt-4 md:pt-6">
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactMe
