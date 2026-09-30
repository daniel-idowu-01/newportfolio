import Lenis from "lenis"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "../../lib/motion"

const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (prefersReducedMotion()) return
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -110 } })
    lenisRef.current = lenis
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const onDone = (url: string) => {
      if (!url.includes("#")) lenisRef.current?.scrollTo(0, { immediate: true })
    }
    router.events.on("routeChangeComplete", onDone)
    return () => router.events.off("routeChangeComplete", onDone)
  }, [router.events])

  return null
}

export default SmoothScroll
