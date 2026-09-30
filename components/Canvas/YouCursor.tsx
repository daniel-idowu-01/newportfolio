import { useEffect, useRef } from "react"
import { canAnimatePointer } from "../../lib/motion"

// A "YOU" tag that trails the pointer, like a multiplayer cursor in a design tool.
// Elements marked with data-hide-cursor hide it so their own effects read clearly.
const YouCursor = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canAnimatePointer()) return

    let raf = 0
    let tx = -200
    let ty = -200
    let x = -200
    let y = -200

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const hidden = (e.target as Element | null)?.closest?.("[data-hide-cursor]")
      el.style.opacity = hidden ? "0" : "1"
    }
    const onLeave = () => {
      el.style.opacity = "0"
    }
    const tick = () => {
      x += (tx - x) * 0.11
      y += (ty - y) * 0.11
      el.style.transform = `translate3d(${x + 14}px, ${y + 18}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener("mousemove", onMove)
    document.documentElement.addEventListener("mouseleave", onLeave)
    raf = requestAnimationFrame(tick)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9990] opacity-0 transition-opacity duration-300"
      style={{ mixBlendMode: "difference" }}
    >
      <span className="absolute -left-2 -top-2 block h-3 w-3 rounded-full bg-white" />
      <span className="block rounded-full rounded-tl-none bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-black">
        YOU
      </span>
    </div>
  )
}

export default YouCursor
