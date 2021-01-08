import "../styles/globals.css";
import Head from "next/head";
import { colors } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>spy</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        .bg-primary {
          background-color: ${colors.primary};
        }

        .text-primary {
          color: ${colors.primary};
        }

        label {
          color: ${colors.primary};
        }

        input {
          outline: none;
          width: 100%;
          border: 1px solid rgba(209, 213, 219);
          border-radius: 0.2rem;
          padding: 0.3rem;
          color: ${colors.primary};
        }

        .button {
          width: 100%;
          padding: 0.4rem;
          outline: none;
          font-size: 1.2rem;
          font-weight: 600;

          color: white;
          background-color: ${colors.primary};
          border: 1px solid rgba(209, 213, 219);
          border-radius: 0.2rem;
          transition: background-color 0.5s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .animacion:hover {
          color: ${colors.primary};
          background-color: white;
          outline: none;
        }

        .animacion-github:hover {
          color: #000;
          background-color: white;
          outline: none;
        }

        button > svg {
          display: inline-block;
          fill: #fff;
          margin-right: 0.5rem;
        }

        .animacion-github:hover > svg {
          fill: #000;
        }

        .separator {
          color: #999;
          font-size: 0.875em;
          width: 100%;
          text-align: center;
          padding: 0;
          margin-bottom: 12px;
          height: 12px;
        }

        .separator span {
          color: ${colors.primary};
        }

        .bg-github {
          background: #000000;
        }
      `}</style>
    </>
  );
}

export default MyApp;
