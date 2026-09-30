import type { NextPage } from "next"
import HeadSection from "../components/Head/HeadSection"
import FeaturedWork from "../components/Sections/FeaturedWork"
import LetsTalk from "../components/Sections/LetsTalk"
import { projects } from "../lib/site"

const Projects: NextPage = () => (
  <>
    <HeadSection page="Projects" title="Work — Idowu Daniel" />
    <div className="pt-16">
      <FeaturedWork
        label="everything i've built!"
        title={["ALL", "WORK"]}
        projects={projects}
        showAll={false}
        blurb={`${projects.length} projects: web apps, developer tools, AI products, and backends. Click through for live demos and source.`}
      />
    </div>
    <LetsTalk />
  </>
)

export default Projects
