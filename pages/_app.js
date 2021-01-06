import '../styles/globals.css'
import Head from 'next/head'
import { colors } from "../styles/theme"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>spy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
                .bg-primary{
                    background-color: ${colors.primary}
                }

                .text-primary{
                    color: ${colors.primary}
                }

                label {
                  color: ${colors.primary}
                }

                input {
                  color: ${colors.primary}
                }

            `}</style>
    </>
  )
}

export default MyApp
