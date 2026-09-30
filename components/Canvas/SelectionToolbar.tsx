import { useEffect, useRef, useState } from "react"

// Floating "Copy" pill that appears above any text the visitor selects.
const SelectionToolbar = () => {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const textRef = useRef("")

  useEffect(() => {
    const onUp = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("[data-selection-toolbar]")) return
      // Let the browser finalise the selection first.
      setTimeout(() => {
        const sel = window.getSelection()
        const text = sel?.toString().trim() ?? ""
        if (!sel || !text || sel.rangeCount === 0) {
          setVisible(false)
          return
        }
        const rect = sel.getRangeAt(0).getBoundingClientRect()
        textRef.current = text
        setPos({
          x: rect.left + rect.width / 2 + window.scrollX - 34,
          y: rect.top + window.scrollY - 40,
        })
        setVisible(true)
      }, 0)
    }
    const onDown = (e: MouseEvent) => {
      if (!(e.target as Element | null)?.closest?.("[data-selection-toolbar]")) setVisible(false)
    }
    document.addEventListener("mouseup", onUp)
    document.addEventListener("mousedown", onDown)
    return () => {
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("mousedown", onDown)
    }
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(textRef.current)
      window.getSelection()?.removeAllRanges()
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setVisible(false)
      }, 1400)
    } catch {}
  }

  return (
    <div
      data-selection-toolbar
      data-hide-cursor
      role="button"
      tabIndex={-1}
      aria-label="Copy selected text"
      onMouseDown={(e) => e.preventDefault()}
      onClick={copy}
      style={{
        position: "absolute",
        top: pos.y,
        left: pos.x,
        zIndex: 9998,
        pointerEvents: visible ? "all" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(4px) scale(0.95)",
        transition: "opacity 0.15s ease, transform 0.15s ease",
        userSelect: "none",
      }}
      className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium shadow-lg shadow-black/20 ${
        copied
          ? "border-orange-400 bg-orange-500 text-white"
          : "border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
      }`}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 4V2.5A1.5 1.5 0 0 0 6.5 1H2.5A1.5 1.5 0 0 0 1 2.5v4A1.5 1.5 0 0 0 2.5 8H4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Copy
        </>
      )}
    </div>
  )
}

export default SelectionToolbar
