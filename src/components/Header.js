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
      <div>
        <div className="header-flags">
          <div className="header-lang">LANG</div>
          <img src="NzFlag.png" alt="" />
          <img src="MaoriFlag.png" alt="" />
        </div>
        <div className="header-reg">
          <img src="icon_header_user.png" alt="" />
          Register | Login{" "}
        </div>
      </div>
    </div>
  )
}
