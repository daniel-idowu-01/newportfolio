import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import { canAnimatePointer } from "../../lib/motion"

const corners = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
]

type Props = {
  // Renders the normal and the "inverted" (dark mode x-ray) version of the same content.
  render: (inverted: boolean) => ReactNode
  size?: number
  className?: string
  // Padding shared by the content and its inverted copy so the two line up exactly.
  padding?: string
  overlayStyle?: CSSProperties
  // Called every frame with the pointer offset from centre (-0.5..0.5) and hover progress.
  onFrame?: (dx: number, dy: number, progress: number) => void
}

// On hover, a square lens follows the pointer and reveals a dark, inverted copy of the
// content underneath, with four little handles pinned to the lens corners.
const LensReveal = ({ render, size = 420, className = "", padding = "", overlayStyle, onFrame }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const handlesRef = useRef<HTMLDivElement>(null)
  const onFrameRef = useRef(onFrame)

  useEffect(() => {
    onFrameRef.current = onFrame
  }, [onFrame])

  useEffect(() => {
    const wrap = wrapRef.current
    const overlay = overlayRef.current
    const handles = handlesRef.current
    if (!wrap || !overlay || !handles || !canAnimatePointer()) return

    let raf = 0
    let running = false
    let mx = 0
    let my = 0
    let progress = 0
    let target = 0

    const frame = () => {
      progress += (target - progress) * 0.16
      if (target === 0 && progress < 0.02) {
        progress = 0
        running = false
        overlay.style.clipPath = "inset(50% 50% 50% 50% round 200px)"
        handles.style.opacity = "0"
        onFrameRef.current?.(0, 0, 0)
        return
      }
      const { width, height } = wrap.getBoundingClientRect()
      const s = size * (0.1 + 0.9 * progress)
      const h = s / 2
      const top = my - h
      const left = mx - h
      const radius = 18 + (1 - progress) * 150
      overlay.style.clipPath = `inset(${top}px ${width - (mx + h)}px ${height - (my + h)}px ${left}px round ${radius}px)`
      Array.from(handles.children).forEach((el, i) => {
        const [cx, cy] = corners[i]
        ;(el as HTMLElement).style.transform = `translate3d(${left + cx * s - 9}px, ${top + cy * s - 9}px, 0) scale(${0.4 + 0.6 * progress})`
      })
      onFrameRef.current?.((mx - width / 2) / width, (my - height / 2) / height, progress)
      raf = requestAnimationFrame(frame)
    }

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
      target = 1
      overlay.style.opacity = "1"
      handles.style.opacity = "1"
      if (!running) {
        running = true
        raf = requestAnimationFrame(frame)
      }
    }
    const onLeave = () => {
      target = 0
    }

    wrap.addEventListener("mousemove", onMove)
    wrap.addEventListener("mouseleave", onLeave)
    return () => {
      wrap.removeEventListener("mousemove", onMove)
      wrap.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [size])

  return (
    <div ref={wrapRef} data-hide-cursor className={`relative overflow-hidden ${padding} ${className}`}>
      {render(false)}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[#0d0d0d] opacity-0 transition-opacity duration-200"
        style={{ clipPath: "inset(0 100% 100% 0)", ...overlayStyle }}
      >
        <div className={padding}>{render(true)}</div>
      </div>
      <div
        ref={handlesRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 opacity-0 transition-opacity duration-200"
      >
        {corners.map((_, i) => (
          <span key={i} className="absolute left-0 top-0 block h-[18px] w-[18px] bg-[#0d0d0d] will-change-transform" />
        ))}
      </div>
    </div>
  )
}

export default LensReveal
