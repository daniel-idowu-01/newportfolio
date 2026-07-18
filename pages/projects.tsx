import { m } from "framer-motion"
import type { NextPage } from "next"
import { HeadSection, PageTitle, ProjectsCard } from "../components"
import projects from "../public/data/projects.json"

const Projects: NextPage = () => {
  return (
    <>
      <HeadSection page="Projects" title="David Idowu — Projects" />
      <main className="relative flex items-center justify-center w-full min-h-screen py-16 overflow-x-hidden font-mono">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 w-full">
          <PageTitle page="Case" addon="Studies" />

          <section className="pt-8 lg:pt-12 pb-6">
            <m.p
              className="text-sm font-light text-dim md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              A ledger of data analytics and consultancy work —{" "}
              <span className="text-amber">{projects.length}</span> entries.
            </m.p>
          </section>

          <section className="flex flex-col w-full pt-10 space-y-20 lg:space-y-28">
            {projects?.map((item, index) => (
              <ProjectsCard
                key={item.name}
                name={item.name}
                category={item.category}
                about={item.about}
                stat={item.stat}
                statLabel={item.statLabel}
                tools={item.tools}
                orientation={index % 2}
                index={index}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default Projects
