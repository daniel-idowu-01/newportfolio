import { useRef } from "react"
import LensReveal from "./LensReveal"

// A little code-bracket blob whose eyes follow the pointer. Hovering reveals a dark
// "x-ray" version of it through the lens.
const Blob = ({ inverted, eyesRef }: { inverted: boolean; eyesRef?: React.Ref<SVGGElement> }) => (
  <div className="-rotate-3">
    <svg viewBox="0 0 300 300" fill="none" aria-hidden="true" className="w-72 animate-wiggle sm:w-[28rem]">
      <path
        d="M150 38c42-4 70 22 84 50 16 30 34 44 28 84-6 44-40 86-104 88-58 2-102-26-114-76-10-40 6-66 22-86 22-28 40-56 84-60z"
        fill={inverted ? "#a94e7e" : "var(--c-green)"}
        stroke={inverted ? "#f5f2ea" : "var(--ink)"}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M96 190l-22 18 22 18M204 190l22 18-22 18M166 182l-30 52"
        stroke={inverted ? "#f5f2ea" : "var(--ink)"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g ref={eyesRef} style={{ transition: "transform 0.25s ease-out" }}>
        <rect x="112" y="104" width="16" height="40" rx="8" fill={inverted ? "#f0ece3" : "var(--ink)"} transform="rotate(-4 120 124)" />
        <rect x="170" y="100" width="16" height="44" rx="8" fill={inverted ? "#f0ece3" : "var(--ink)"} transform="rotate(4 178 122)" />
      </g>
    </svg>
  </div>
)

const Mascot = () => {
  const eyes = useRef<(SVGGElement | null)[]>([])

  return (
    <LensReveal
      size={440}
      padding="p-6"
      render={(inverted) => (
        <Blob
          inverted={inverted}
          eyesRef={(el) => {
            eyes.current[inverted ? 1 : 0] = el
          }}
        />
      )}
      onFrame={(dx, dy, p) => {
        eyes.current.forEach((el) => {
          if (el) el.style.transform = `translate(${dx * 26 * p}px, ${dy * 20 * p}px)`
        })
      }}
    />
  )
}

export default Mascot
