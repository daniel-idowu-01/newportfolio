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
    period: "11/2024 — 05/2026",
    location: "Manchester, UK",
    note: "Data-Driven Decision Making, Programming for Data Analytics, Customer Experience Strategy, and a Business Consultancy Project.",
  },
  {
    degree: "BSc Information Technology & Business Information Systems",
    school: "Middlesex University",
    period: "01/2022 — 09/2022",
    location: "London, UK",
    note: "Business Intelligence (data warehouses, Excel, Tableau, Weka), UX Design, Strategic Information Systems, and a healthcare documentation application as the undergraduate project.",
  },
  {
    degree: "Advanced Diploma, Software Engineering in Java",
    school: "Aptech Computer Education",
    period: "04/2019 — 06/2021",
    location: "Lagos, Nigeria",
    note: "OOP (Java, C++, C#, C), SQL Server, PHP & MySQL, UI/UX for Responsive Design, and the Agile system development life cycle.",
  },
]

const Education = () => {
  return (
    <div className="w-full">
      <m.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
        viewport={{ once: true }}
      >
        <p className="mb-3 label">
          <span className="text-amber">&#47;&#47;</span> Education
        </p>
        <h2 className="font-serif text-4xl text-bone lg:text-5xl">
          Where I&apos;ve <span className="italic text-amber">studied</span>
        </h2>
      </m.div>

      <div className="grid gap-px border md:grid-cols-3 border-line bg-line">
        {schools.map((item, index) => (
          <m.article
            key={item.school}
            className="flex flex-col p-6 bg-ink md:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="mb-4 font-mono text-xs text-amber">{item.period}</p>
            <h3 className="mb-2 font-serif text-2xl leading-tight text-bone">
              {item.degree}
            </h3>
            <p className="mb-4 font-mono text-sm text-dim">
              {item.school} — {item.location}
            </p>
            <p className="text-sm font-light leading-relaxed text-dim">
              {item.note}
            </p>
          </m.article>
        ))}
      </div>
    </div>
  )
}

export default Education
