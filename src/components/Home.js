import React from "react"
import Header from "./Header"
import HeaderInfo from "./HeaderInfo"
import HeaderBaby from "./HeaderBaby"
import MainBlock from "./MainBlock"
import MainKey from "./MainKey"
import WaitingSection from "./WaitingSection"
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
      <Header />
      {/* <HeaderBaby /> */}
      <HeaderInfo />
      <MainBlock />
      <MainKey />
      <WaitingSection />
      <Footer />
    </div>
  )
}
