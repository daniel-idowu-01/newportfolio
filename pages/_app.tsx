import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { LazyMotion, domAnimation } from "framer-motion"
import { Instrument_Serif, Spline_Sans_Mono } from "next/font/google"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
})

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${serif.variable} ${mono.variable} font-mono`}>
      <LazyMotion features={domAnimation} strict>
        <Header />
        <Component {...pageProps} />
        <ContactIconsMobile />
        <ContactIcons />
      </LazyMotion>
    </div>
  )
}

export default MyApp
