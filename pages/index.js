import { useState, useEffect } from "react"
import { useRouter } from "next/router"

/* import firebase */
import { recoveryLoginWithGithub } from "firebase/client"

// imports components
import FormularioLogin from "components/FormularioLogin"

export default function Home() {
  const [user, setUser] = useState(undefined)
  const [spinner, setSpinner] = useState(true)
  const router = useRouter()

  useEffect(() => {
    recoveryLoginWithGithub(setUser)
    if (user !== undefined || user !== null) {
      setTimeout(() => {
        setSpinner(false)
      }, 2000);
    }
  }, [])

  useEffect(() => {
    user && router.replace("/Home")
  }, [user])

  return (
    <main className="container h-screen flex justify-center items-center">
      <div className="w-full p-20">
      <FormularioLogin setUser={setUser} />
        {/* {spinner ? <Spinner /> : <FormularioLogin setUser={setUser} />} */}
      </div>
    </main>
  )
}
