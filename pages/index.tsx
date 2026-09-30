import type { NextPage } from "next"
import HeadSection from "../components/Head/HeadSection"
import AboutIntro from "../components/Sections/AboutIntro"
import FeaturedWork from "../components/Sections/FeaturedWork"
import Hero from "../components/Sections/Hero"
import LetsTalk from "../components/Sections/LetsTalk"
import { projects } from "../lib/site"

const Home: NextPage = () => (
  <>
    <HeadSection title="Idowu Daniel — Fullstack Developer" page="Home" />
    <Hero />
    <AboutIntro />
    <FeaturedWork
      projects={projects.slice(0, 4)}
      blurb="Real-time collaboration, lending, games, and AI tooling. Built end to end and shipped."
    />
    <LetsTalk />
  </>
)

export default Home
