import { m } from "framer-motion"
import type { NextPage } from "next"
import {
  AboutItems,
  Education,
  Experience,
  HeadSection,
  PageTitle,
  Technologies,
} from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="About David Idowu" page="About" />
      <main className="relative flex items-center justify-center w-full min-h-screen py-16 overflow-x-hidden font-pop bg-body ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <PageTitle page="About" addon="Me" />
          <section className="pt-10 lg:pt-20 pb-14">
            <AboutItems />
          </section>

          {/* experience */}
          <section className="flex flex-col justify-center pt-7 md:pt-10 lg:pt-14 pb-14">
            <m.div
              className="mb-8 text-center heading"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              <h2 className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize lg:text-4xl">
                where i have worked
              </h2>
              <p className="text-lg text-text">
                My professional experience so far
              </p>
            </m.div>
            <Experience />
          </section>

          {/* education */}
          <section className="flex flex-col justify-center pt-7 md:pt-10 lg:pt-14 pb-14">
            <m.div
              className="mb-8 text-center heading"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              <h2 className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize lg:text-4xl">
                where i have studied
              </h2>
              <p className="text-lg text-text">My education and training</p>
            </m.div>
            <Education />
          </section>

          {/* technologies */}
          <section className="flex flex-col justify-center pt-7 md:pt-10 lg:pt-14">
            {/* heading */}
            <m.div
              className="mb-4 text-center heading"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              <h2
                className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize lg:text-4xl"
                id="heading"
              >
                skills that i use
              </h2>
              <p className="text-lg text-text">
                Here are the tools and skills i am using or have used recently
              </p>
            </m.div>
            {/* techs */}
            <Technologies />
          </section>
        </div>
      </main>
    </>
  )
}

export default About
