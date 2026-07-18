import type { NextPage } from "next"
import { HeroSection, HeadSection } from "../components"

const Home: NextPage = () => {
  return (
    <>
      <HeadSection title="David Idowu — Data Analyst" page="Home" />

      <main className="relative w-full overflow-x-hidden font-mono">
        <section className="relative z-20 flex items-center justify-center min-h-screen pt-28 pb-14">
          <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 relative w-full">
            <HeroSection />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
