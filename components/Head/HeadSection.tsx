import Head from "next/head"

type Props = {
  title: string
  page: string
}

const HeadSection = ({ title, page }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={`${page} — David Idowu, Data Analyst based in Manchester, United Kingdom.`}
      />
      <meta
        name="keywords"
        content={`David Idowu, Data Analyst, Python, SQL, Excel, Power BI, Tableau, Azure, Manchester, ${page}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={"David Idowu"} />
      <meta
        property="og:description"
        content={`${page} — David Idowu, Data Analyst based in Manchester, United Kingdom.`}
      />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/icons/logo.svg" />
    </Head>
  )
}

export default HeadSection
