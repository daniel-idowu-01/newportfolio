import { m } from "framer-motion"
import Image from "next/image"

type TechCardProps = {
  name: string
  icon?: string
}

type TechItem = {
  name: string
  icon?: string
}

const Technologies = () => {
  const CardItems: TechItem[] = [
    { name: "python", icon: "python" },
    { name: "sql" },
    { name: "excel" },
    { name: "power bi" },
    { name: "tableau" },
    { name: "pandas" },
    { name: "numpy" },
    { name: "scikit-learn" },
    { name: "azure" },
    { name: "google colab" },
    { name: "git", icon: "git" },
    { name: "github", icon: "github" },
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
            <TechCard name={item.name} icon={item.icon} key={item.name} />
          ))}
        </m.div>
      </div>
    </>
  )
}

export default Technologies

function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="grid h-24 duration-200 rounded-md cursor-pointer md:h-32 lg:h-36 bg-buttonBg place-items-center hover:scale-105">
      {icon && (
        <m.div
          className="relative w-7 h-7 md:h-9 md:w-9 lg:w-10 lg:h-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <Image src={`/images/${icon}.svg`} alt={`${name}`} fill />
        </m.div>
      )}
      <m.div
        className="px-2 text-base font-normal tracking-wide text-center text-white capitalize md:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.4 },
        }}
      >
        {name}
      </m.div>
    </div>
  )
}
