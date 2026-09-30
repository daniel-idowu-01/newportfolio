type P = { size?: number; className?: string }

export const HomeIcon = ({ size = 17 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3L12 3z" />
  </svg>
)

export const UserIcon = ({ size = 17 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2.2" />
    <path d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const GridIcon = ({ size = 17 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="3" width="8" height="8" rx="4" />
    <rect x="3" y="13" width="8" height="8" rx="4" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
)

export const MailIcon = ({ size = 17 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 5h20v14H2V5zm2 2.4V17h16V7.4l-8 5.3-8-5.3zM5.6 7l6.4 4.2L18.4 7H5.6z" />
  </svg>
)

export const DownloadIcon = ({ size = 14 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11 3h2v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V3zM4 19h16v2H4v-2z" />
  </svg>
)

export const FolderIcon = ({ size = 15 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 5h8l2 2.5h10V20H2V5z" />
  </svg>
)

// Pointer arrow used on the floating pills.
export const PointerIcon = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M4 2l6 17 3-7 7-3L4 2z" fill={color} stroke="var(--ink)" strokeWidth="1.6" />
  </svg>
)

// Double chevron that slides through the round button on hover.
export const Chevrons = () => (
  <svg width="21" height="21" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M0 0h5l8 9-8 9H0l8-9L0 0z" fill="currentColor" />
    <path d="M5 0h5l8 9-8 9H5l8-9L5 0z" fill="currentColor" />
  </svg>
)

export const Target = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="inline-block align-[-4px]">
    <circle cx="17" cy="17" r="14" stroke="var(--c-green)" strokeWidth="3" />
    <circle cx="17" cy="17" r="8" stroke="var(--c-green)" strokeWidth="3" />
    <circle cx="17" cy="17" r="3" fill="var(--c-green)" />
  </svg>
)

export const Spinner = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="inline-block animate-roll-360 align-[-3px]">
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4
      const x = 15 + 9.2 * Math.cos(a)
      const y = 15 + 9.2 * Math.sin(a)
      return (
        <g key={i}>
          <path d={`M15 15L${x} ${y}`} stroke="var(--c-pink)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="3.5" fill="var(--c-pink)" />
        </g>
      )
    })}
  </svg>
)

// Hand-drawn double underline under the script labels.
export const Scribble = ({ width = 150 }: { width?: number }) => (
  <svg width={width} height="18" viewBox="0 0 150 18" fill="none" aria-hidden="true" className="-mt-0.5">
    <path d="M6 6c36-3 76-3.5 138-.5" stroke="var(--c-pink)" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M18 12.5c30-2.2 64-2.6 112-.4" stroke="var(--c-pink)" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)
