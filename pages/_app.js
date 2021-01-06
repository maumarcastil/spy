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
                    outline: none;
                    width: 100%;
                    border: 1px solid rgba(209, 213, 219);
                    border-radius: .2rem;
                    padding: .3rem;
                    color: ${colors.primary}
                }

                button {
                    width: 100%;
                    padding: .4rem;
                    outline: none;
                    font-size: 1.2rem;
                    font-weight: 600;

                    color: white;
                    background-color: ${colors.primary};
                    border: 1px solid rgba(209, 213, 219);
                    border-radius: .2rem;
                    transition: background-color .7s;
                    
                }

                button:hover {
                        color: ${colors.primary};
                        background-color: white;
                        outline: none;
                }

            `}</style>
    </>
  )
}

export default MyApp
