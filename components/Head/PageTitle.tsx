import { m } from "framer-motion"

type Props = {
  page: string
  addon: string
}

const PageTitle = ({ page, addon }: Props) => {
  return (
    <m.div
      className="pt-16 lg:pt-28"
      aria-label="heading"
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <p className="mb-4 label">
        <span className="text-amber">&#47;&#47;</span>{" "}
        {`${page} ${addon}`.trim()}
      </p>
      <h1
        className="font-serif text-5xl text-bone md:text-7xl leading-none"
        id="heading"
      >
        {page} <span className="italic text-amber">{addon}</span>
      </h1>
      <div className="w-24 h-px mt-8 bg-line" />
    </m.div>
  )
}

export default PageTitle
