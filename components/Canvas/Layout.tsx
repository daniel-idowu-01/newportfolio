import type { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Ruler from "./Ruler"
import SelectionToolbar from "./SelectionToolbar"
import SmoothScroll from "./SmoothScroll"
import YouCursor from "./YouCursor"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="canvas-grid min-h-screen text-ink">
    <SmoothScroll />
    <SelectionToolbar />
    <Header />
    <YouCursor />
    <div className="pt-[64px]">
      <Ruler live className="sticky top-[64px] z-[90]" />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

export default Layout
