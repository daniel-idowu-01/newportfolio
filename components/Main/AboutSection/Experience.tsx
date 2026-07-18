import { m } from "framer-motion"

type Role = {
  role: string
  company: string
  period: string
  points: string[]
}

const roles: Role[] = [
  {
    role: "Operations Customer Expert",
    company: "Teleperformance",
    period: "07/2023 — present",
    points: [
      "Handled an average of 45 customer inquiries and complaints per day with a 96% customer satisfaction rate.",
      "Improved customer retention by 9% by proactively recommending new products to existing customers.",
      "Reduced onboarding time for new representatives by 15% by documenting customer interactions.",
      "Maintained up-to-date customer records in Salesforce across email, phone, and social media.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Fashion AI",
    period: "05/2023 — 11/2023",
    points: [
      "Architected web applications with HTML, CSS, JavaScript, TypeScript, React, Angular and Vue — yielding a 20% boost in user engagement.",
      "Ensured responsive applications, cutting bounce rates by 15%, with cross-device testing improving usability by 10%.",
      "Engineered MongoDB database schemas, accelerating data retrieval by 30% and slashing query response times by 25%.",
    ],
  },
  {
    role: "Software Engineer — Intern",
    company: "Volab Consulting Limited",
    period: "08/2017 — 04/2019",
    points: [
      "Wrote well-tested code for different software projects and removed bugs alongside the team.",
      "Streamlined interfaces between hardware and software and upgraded existing software performance.",
      "Constructed algorithms and flowcharts with developers and quality-tested websites across browsers.",
    ],
  },
]

const Experience = () => {
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
          <span className="text-amber">&#47;&#47;</span> Experience
        </p>
        <h2 className="font-serif text-4xl text-bone lg:text-5xl">
          Where I&apos;ve <span className="italic text-amber">worked</span>
        </h2>
      </m.div>

      <div className="flex flex-col">
        {roles.map((item, index) => (
          <m.article
            key={item.company}
            className="grid gap-4 py-10 border-t md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10 border-line last:border-b"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div>
              <p className="mb-2 font-mono text-xs text-amber">
                {String(index + 1).padStart(2, "0")} — {item.period}
              </p>
              <p className="font-mono text-sm text-dim">{item.company}</p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-2xl text-bone md:text-3xl">
                {item.role}
              </h3>
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm font-light leading-relaxed text-dim"
                  >
                    <span className="text-amber shrink-0" aria-hidden>
                      &#8227;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </m.article>
        ))}
      </div>
    </div>
  )
}

export default Experience
