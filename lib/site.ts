import projectsData from "../public/data/projects.json"

export const site = {
  name: "Idowu Daniel",
  firstName: "Daniel",
  role: "Fullstack Developer",
  email: "danielidowu414@gmail.com",
  resume:
    "https://drive.google.com/file/d/1qjxrxbmEihatRYPSpyqPy9mTWfRNtWXo/view?usp=sharing",
  timezone: "Africa/Lagos",
  timezoneLabel: "WAT",
  socials: {
    github: "https://github.com/daniel-idowu-01",
    linkedin: "https://www.linkedin.com/in/daniel-idowu/",
    twitter: "https://twitter.com/konathegod",
  },
}

export type Project = {
  name: string
  image: string
  link: string
  liveLink: string
  about: string
  builtWith: string[]
}

export const projects = projectsData as Project[]

// Card palette, cycled per project. `dark` flips text and chip colors.
export const cardColors = [
  { bg: "var(--c-blue)", fg: "var(--ink)", dark: false },
  { bg: "#161616", fg: "#ffffff", dark: true },
  { bg: "var(--c-yellow)", fg: "var(--ink)", dark: false },
  { bg: "var(--c-mint)", fg: "var(--ink)", dark: false },
  { bg: "var(--c-pink)", fg: "#ffffff", dark: false },
]

// "PairPad - A real-time collaborative code editor." -> "A real-time collaborative code editor."
export const projectBlurb = (p: Project) =>
  p.about.replace(new RegExp(`^${p.name.replace(/\s+/g, "\\s*")}\\s*-\\s*`, "i"), "")

export const hasImage = (p: Project) => !p.image.endsWith("null.png")
