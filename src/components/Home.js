import React from "react"
import Header from "./Header"
import HeaderInfo from "./HeaderInfo"
import HeaderBaby from "./HeaderBaby"
import MainBlock from "./MainBlock"

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderBaby />
      <HeaderInfo />
      <MainBlock />
    </div>
  )
}
