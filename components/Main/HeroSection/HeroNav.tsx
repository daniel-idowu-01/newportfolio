import Link from "next/link"

type Props = {
  name: string
}

const HeroNav = ({ name }: Props) => {
  return (
    <Link
      href={`/about`}
      className="group flex items-center gap-3 w-fit font-mono text-sm text-dim duration-300 hover:text-bone"
    >
      <span className="h-px w-10 bg-line duration-300 group-hover:w-16 group-hover:bg-amber" />
      <span className="capitalize">{name}</span>
    </Link>
  )
}

export default HeroNav
