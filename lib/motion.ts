// Pointer-driven effects only run for mouse users who haven't asked for less motion.
export const canAnimatePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
