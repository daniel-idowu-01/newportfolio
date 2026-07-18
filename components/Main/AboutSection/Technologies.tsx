import { m } from "framer-motion"

type SkillGroup = {
  group: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    group: "Data & Analytics",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SQL",
      "Excel (Advanced)",
      "Power BI",
      "Tableau",
    ],
  },
  {
    group: "Data Practices",
    skills: [
      "Data Cleaning & Wrangling",
      "Exploratory Data Analysis",
      "Data Pipeline Design",
      "Predictive Modelling",
      "Data Visualisation",
      "CRISP-DM Framework",
    ],
  },
  {
    group: "Cloud & Infrastructure",
    skills: [
      "Azure IoT Hub",
      "Azure Data Lake",
      "Stream Analytics",
      "Databricks",
      "Google Colab",
      "Git",
      "GitHub",
    ],
  },
  {
    group: "Soft Skills",
    skills: [
      "Project Management",
      "Critical Reasoning",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Leadership",
    ],
  },
]

const Technologies = () => {
  return (
    <div className="w-full pt-10 mx-auto">
      <div className="grid gap-px border md:grid-cols-2 border-line bg-line">
        {skillGroups.map((item, index) => (
          <m.div
            key={item.group}
            className="p-6 bg-ink md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                delay: (index % 2) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="mb-5 label">
              <span className="text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              — {item.group}
            </p>
            <ul className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 font-mono text-xs border border-line text-dim duration-300 hover:text-amber hover:border-amber cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
