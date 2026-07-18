import { m } from "framer-motion"

type School = {
  degree: string
  school: string
  period: string
  location: string
  note: string
}

const schools: School[] = [
  {
    degree: "MSc Management with Data Analytics",
    school: "BPP University",
    period: "11/2024 – 05/2026",
    location: "Manchester, United Kingdom",
    note: "Core modules include Customer Experience Strategy, Data-Driven Decision Making, Programming for Data Analytics, and a Business Consultancy Project — interpreting, visualising and communicating insights from complex datasets.",
  },
  {
    degree: "BSc Information Technology & Business Information Systems (Top Up)",
    school: "Middlesex University",
    period: "01/2022 – 09/2022",
    location: "London, United Kingdom",
    note: "Covered Strategic Information Systems (Agile SDLC), UX Design, and Business Intelligence — data warehouses, Excel data cleaning, Tableau visualisation, and Weka data mining — with a healthcare documentation application as the undergraduate project.",
  },
  {
    degree: "Advanced Diploma, Software Engineering in Java",
    school: "Aptech Computer Education",
    period: "04/2019 – 06/2021",
    location: "Lagos, Nigeria",
    note: "Covered HTML, CSS, SQL Server, OOP (Java, C++, C#, C), UI/UX for Responsive Design, PHP and MySQL, plus introductions to Cloud Computing, IoT, and the Agile SDLC.",
  },
]

const Education = () => {
  return (
    <div className="grid w-full gap-6 lg:grid-cols-3">
      {schools.map((item, index) => (
        <m.div
          key={item.school}
          className="flex flex-col p-6 duration-300 rounded-md shadow-xl bg-buttonBg hover:shadow-2xl hover:-translate-y-1"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: index * 0.1 },
          }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold text-cyan">{item.period}</p>
          <h3 className="mb-2 text-lg font-semibold text-white">
            {item.degree}
          </h3>
          <p className="mb-4 text-sm text-text_Light">
            {item.school} — {item.location}
          </p>
          <p className="text-base text-text">{item.note}</p>
        </m.div>
      ))}
    </div>
  )
}

export default Education
