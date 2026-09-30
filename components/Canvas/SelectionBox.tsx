import type { CSSProperties, ReactNode } from "react"

const corners: CSSProperties[] = [
  { top: -6, left: -6 },
  { top: -6, right: -6 },
  { bottom: -6, left: -6 },
  { bottom: -6, right: -6 },
]

type Props = {
  color?: string
  handleFill?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

// A 1px frame with four square resize handles, like a selected layer in a design tool.
const SelectionBox = ({ color = "var(--c-blue)", handleFill = "#ffffff", className = "", style, children }: Props) => (
  <div className={`relative ${className}`} style={{ boxShadow: `0 0 0 1px ${color}`, ...style }}>
    {children}
    {corners.map((c, i) => (
      <span
        key={i}
        aria-hidden="true"
        className="absolute z-10 block h-[11px] w-[11px]"
        style={{ ...c, background: handleFill, border: `1.5px solid ${color}` }}
      />
    ))}
  </div>
)

export default SelectionBox
