import Head from 'next/head'

//para convertir en SPA 
import Link from "next/link"

//imports components
import Header from "../components/Header"


export default function Home() {
  return (
    <div >
      <main >
        {/* Header de la pagina principal */}
        <Header />
      </main>
    </div>
  )
}
