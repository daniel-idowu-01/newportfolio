import { m } from "framer-motion"
import Image from "next/image"
import { aboutVariant } from "../../../variants/aboutVariant"

const AboutItems = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-14">
      {/* text */}
      <div className="text lg:flex-[45%]">
        <m.h2
          className="mb-8 font-serif text-3xl text-bone lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          variants={aboutVariant}
          whileInView={aboutVariant.heading}
          viewport={{ once: true }}
        >
          Hi, I&apos;m <span className="italic text-amber">David Idowu</span> —
        </m.h2>
        {/* info */}
        <div className="mb-10 md:mb-12 lg:mb-0">
          <m.p
            className="mb-6 text-sm font-light leading-relaxed text-dim md:text-base"
            variants={aboutVariant}
            initial={{ opacity: 0, y: 25 }}
            whileInView={aboutVariant.p1}
            viewport={{ once: true }}
          >
            A determined professional who learns quickly and adapts to new
            situations. I&apos;m experienced in designing and building robust
            data pipelines, analysing complex datasets using Python and SQL,
            and creating compelling visualisations in Tableau and Excel to
            drive informed decision-making and solve business challenges.
          </m.p>
          <m.p
            className="mb-6 text-sm font-light leading-relaxed text-dim md:text-base"
            variants={aboutVariant}
            initial={{ opacity: 0, y: 25 }}
            whileInView={aboutVariant.p2}
            viewport={{ once: true }}
          >
            My projects have given me valuable industry insight and prepared me
            for future professional challenges. I&apos;m a confident, direct,
            enthusiastic individual who prioritises teamwork, collaboration,
            and delivering high-quality results — currently completing an MSc
            in Management with Data Analytics at BPP University, Manchester.
          </m.p>
        </div>
      </div>
      {/* portrait */}
      <m.div
        className="lg:flex-[40%] w-full md:max-w-md relative group"
        initial={{ opacity: 0, y: 20 }}
        variants={aboutVariant}
        whileInView={aboutVariant.image}
        viewport={{ once: true }}
      >
        <div className="w-full h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative overflow-hidden border border-line z-20 bg-surface">
          <div className="relative w-full h-full duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]">
            <Image
              className="object-cover"
              src={"/images/david.jpeg"}
              alt="Portrait of David Idowu"
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
            />
          </div>
          {/* corner ticks */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber" />
        </div>
        {/* offset frame */}
        <div className="absolute inset-0 z-10 duration-500 border border-line translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2" />
        <p className="mt-6 label">Fig. 01 — the analyst</p>
      </m.div>
    </div>
  )
}

export default AboutItems
