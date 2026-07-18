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
    period: "07/2023 – present",
    points: [
      "Promptly handled an average of 45 customer inquiries and complaints per day with a 96% customer satisfaction rate.",
      "Improved customer retention by 9% by proactively recommending new products to existing customers.",
      "Documented customer interactions to reduce onboarding time by 15% for new customer service representatives.",
      "Maintained up-to-date customer records in Salesforce across email, phone, and social media.",
      "Increased average customer order size for new customers by 14% by understanding needs and recommending the right products.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Fashion AI",
    period: "05/2023 – 11/2023",
    points: [
      "Employed HTML, CSS, JavaScript, TypeScript, and frameworks like React, Angular, and Vue to architect web applications, yielding a 20% boost in user engagement.",
      "Ensured responsive web applications, resulting in a 15% reduction in bounce rates, with cross-device testing improving usability by 10%.",
      "Attained a 100% success rate in timely feature launches through robust collaboration with senior team members.",
      "Engineered MongoDB database schemas, accelerating data retrieval speed by 30% and slashing query response times by 25%.",
    ],
  },
  {
    role: "Software Engineer — Intern",
    company: "Volab Consulting Limited",
    period: "08/2017 – 04/2019",
    points: [
      "Wrote and developed new, well-tested code for different software projects and removed bugs with the team.",
      "Streamlined interfaces between hardware and software to enhance usability and elevate performance.",
      "Worked with developers to construct algorithms and flowcharts, and troubleshot websites across browsers to determine quality.",
    ],
  },
]

const Experience = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {roles.map((item, index) => (
        <m.div
          key={item.company}
          className="w-full p-6 duration-300 rounded-md shadow-xl bg-buttonBg md:p-8 hover:shadow-2xl hover:-translate-y-1"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: index * 0.1 },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
            <h3 className="text-lg font-semibold text-white lg:text-xl">
              {item.role}{" "}
              <span className="font-normal text-cyan">— {item.company}</span>
            </h3>
            <p className="text-sm text-text_Light">{item.period}</p>
          </div>
          <ul className="space-y-2">
            {item.points.map((point) => (
              <li key={point} className="flex space-x-3 text-base text-text">
                <span className="text-cyan">&#8227;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </m.div>
      ))}
    </div>
  )
}

export default Experience
