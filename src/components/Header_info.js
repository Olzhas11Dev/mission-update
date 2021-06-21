import React from "react"
import "../style/header_info.css"

export default function Header_info() {
  return (
    <div className="header-info">
      <div className="left-header">
        <h1>What we offer</h1>
        <div>The creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New-Zealand leading IT industry experts and schools</div>
        <h2>What will student create?</h2>
      </div>
      <div className="right-header">
        <img src="projects02.png" width="400px" />
      </div>
    </div>
  )
}
