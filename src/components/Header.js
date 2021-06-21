import React from "react"
import "../style/header.css"

export default function Header() {
  return (
    <div className="header">
      <div>Logo</div>
      <div className="header-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Teachers</a>
      </div>
      <div>Registrations</div>
    </div>
  )
}
