import { m } from "framer-motion"

type TechCardProps = {
  name: string
}

const Technologies = () => {
  const CardItems: string[] = [
    "python",
    "sql",
    "excel",
    "power bi",
    "tableau",
    "pandas",
    "numpy",
    "scikit-learn",
    "azure",
    "google colab",
    "git",
    "github",
  ]
  return (
    <>
      <div className="w-full pt-10 mx-auto">
        <m.div
          className="grid w-full grid-cols-3 gap-4 lg:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          {CardItems.map((item) => (
            <TechCard name={item} key={item} />
          ))}
        </m.div>
      </div>
    </>
  )
}

export default Technologies

function TechCard({ name }: TechCardProps) {
  return (
    <div className="grid h-24 duration-200 rounded-md cursor-pointer md:h-32 lg:h-36 bg-buttonBg place-items-center hover:scale-105">
      <m.div
        className="px-2 text-base font-normal tracking-wide text-center text-white capitalize md:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        {name}
      </m.div>
    </div>
  )
}
