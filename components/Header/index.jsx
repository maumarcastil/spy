import Head from "next/head"
import Link from "next/link"

// Imports firebase
import { singOut } from "firebase/client"

const Header = ({ user }) => {

  const handleClick = () =>{
    singOut()
      
  }

  return (
    <>
      <header className="flex justify-between items-center h-16 font-mono p-4 shadow-lg">
        <div className="text-2xl font-bold tracking-wide text-primary">
          <a href="">Spy</a>
        </div>

        <div className="grid grid-flow-col gap-3 text-lg font-bold text-primary">
          <div>
              <label
              onClick={handleClick}
              >Logout</label>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
