import React from "react"
import "../style/header.css"

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src="icon_star.png" alt="" width="100px" />
      </div>
      <div className="header-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Teachers</a>
      </div>
      <div>Registrations</div>
    </div>
  )
}
