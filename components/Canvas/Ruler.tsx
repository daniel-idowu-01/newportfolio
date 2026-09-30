import { useEffect, useRef } from "react"

const TICK = 130
const COUNT = 26

// A design-tool ruler. When `live`, it slides with the page scroll (and nudges with
// the pointer) so the numbers read as the current scroll position.
const Ruler = ({ live = false, className = "" }: { live?: boolean; className?: string }) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!live) return
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return

    let raf = 0
    let lastBlock = -1
    let mouseX = 0

    const update = () => {
      const offset = window.scrollY - mouseX
      const block = Math.floor(offset / TICK)
      track.style.transform = `translate3d(${-(offset - TICK * block)}px, 0, 0)`
      if (block !== lastBlock) {
        lastBlock = block
        labelRefs.current.forEach((el, i) => {
          if (el) el.textContent = String((block + i) * 100)
        })
      }
      raf = 0
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      schedule()
    }
    const onLeave = () => {
      mouseX = 0
      schedule()
    }
    const fine = window.matchMedia("(pointer: fine)").matches

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    if (fine) {
      wrap.addEventListener("mousemove", onMove, { passive: true })
      wrap.addEventListener("mouseleave", onLeave)
    }
    return () => {
      window.removeEventListener("scroll", schedule)
      if (fine) {
        wrap.removeEventListener("mousemove", onMove)
        wrap.removeEventListener("mouseleave", onLeave)
      }
      if (raf) cancelAnimationFrame(raf)
    }
  }, [live])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`relative h-9 select-none overflow-hidden border-b border-black/10 bg-white ${className}`}
    >
      <div ref={trackRef} className="flex h-full will-change-transform">
        {Array.from({ length: COUNT }, (_, i) => (
          <div key={i} className="relative h-full w-[130px] flex-shrink-0">
            <span
              ref={(el) => {
                labelRefs.current[i] = el
              }}
              className="absolute bottom-1 left-0 -translate-x-1/2 font-mono text-[10px] tabular-nums text-gray-400"
            >
              {i * 100}
            </span>
            <span className="absolute left-0 top-0 h-2.5 w-px bg-gray-300" />
            {[26, 52, 78, 104].map((l) => (
              <span key={l} className="absolute top-0 h-1.5 w-px bg-gray-200" style={{ left: l }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ruler
