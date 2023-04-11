"use client"

import Button from "@/components/ui/Button"
import { signOut } from "next-auth/react"

const Home = () => {
  return (
    <button onClick={() => signOut()}>Sign out</button>
  )
}

export default Home