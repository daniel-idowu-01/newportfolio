import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Bitcount_Prop_Single, Caveat, IBM_Plex_Mono, Instrument_Sans } from "next/font/google"
import Layout from "../components/Canvas/Layout"

const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" })
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono-base",
})
const pixel = Bitcount_Prop_Single({
  subsets: ["latin"],
  variable: "--font-pixel",
  fallback: ["monospace"],
  adjustFontFallback: false,
})
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand" })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${body.style.fontFamily};
          --font-mono-base: ${mono.style.fontFamily};
          --font-pixel: ${pixel.style.fontFamily};
          --font-hand: ${hand.style.fontFamily};
        }
      `}</style>
      <div className="font-sans">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
