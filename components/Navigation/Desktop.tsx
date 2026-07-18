import { m } from "framer-motion"
import LinkWrapper from "./LinkWrapper"

const Desktop = () => {
  const linkArray = ["home", "about", "projects", "contact me"]
  return (
    <m.div
      className="flex items-center space-x-8 h-[5.375rem]"
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {linkArray.map((item, index) => (
        <LinkWrapper key={item} name={item} index={index} />
      ))}
    </m.div>
  )
}

export default Desktop
