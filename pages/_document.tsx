import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Marks JS as available before first paint so scroll reveals can start hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
