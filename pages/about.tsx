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
      <main className="relative flex items-center justify-center w-full min-h-screen py-16 overflow-x-hidden font-mono">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <PageTitle page="About" addon="Me" />
          <section className="pt-10 lg:pt-20 pb-14">
            <AboutItems />
          </section>

          {/* experience */}
          <section className="pt-7 md:pt-10 lg:pt-14 pb-14">
            <Experience />
          </section>

          {/* education */}
          <section className="pt-7 md:pt-10 lg:pt-14 pb-14">
            <Education />
          </section>

          {/* skills */}
          <section className="flex flex-col justify-center pt-7 md:pt-10 lg:pt-14">
            <m.div
              className="mb-4"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              viewport={{ once: true }}
            >
              <p className="mb-3 label">
                <span className="text-amber">&#47;&#47;</span> Toolbox
              </p>
              <h2
                className="mb-4 font-serif text-4xl text-bone lg:text-5xl"
                id="heading"
              >
                Skills I <span className="italic text-amber">work with</span>
              </h2>
              <p className="text-sm font-light text-dim md:text-base">
                The tools and practices behind my analysis.
              </p>
            </m.div>
            <Technologies />
          </section>
        </div>
      </main>
    </>
  )
}

export default About
