import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
  name: string
  index: number
}

const LinkWrapper = ({ name, index }: Props) => {
  const router = useRouter()
  const href = name === "home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`
  const isActive = router.pathname === href

  return (
    <Link
      href={href}
      className={`group flex items-baseline gap-1.5 font-mono text-sm tracking-wide duration-300 w-fit ${
        isActive ? "text-bone" : "text-dim hover:text-bone"
      }`}
    >
      <span className="text-[0.65rem] text-amber">
        {String(index).padStart(2, "0")}
      </span>
      <span className="capitalize">
        {name}
        <span
          className={`block h-px bg-amber duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </span>
    </Link>
  )
}

export default LinkWrapper
