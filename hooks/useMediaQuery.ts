import { useCallback, useSyncExternalStore } from "react"

export function useMediaQuery(query: string): boolean {
  const getSnapshot = useCallback((): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  }, [query])

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined") {
        return () => {}
      }

      const matchMedia = window.matchMedia(query)

      if (matchMedia.addEventListener) {
        matchMedia.addEventListener("change", onChange)
      } else {
        matchMedia.addListener(onChange)
      }

      return () => {
        if (matchMedia.removeEventListener) {
          matchMedia.removeEventListener("change", onChange)
        } else {
          matchMedia.removeListener(onChange)
        }
      }
    },
    [query],
  )

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
