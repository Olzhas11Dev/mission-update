import React from "react"
import "../style/header_baby.css"

export default function HeaderBaby() {
  return (
    <div className="header-baby">
      <div className="header-baby-pic">
        <img src="kid_ballon.png" alt="" width="100%" />
      </div>

      <div className="baby-left">
        <h1>
          Prepare young minds for a better <span>future</span>
        </h1>
        <p>Let us help you andvance students in Digital Technoloies and other learning areas with our project-based learning programme</p>
        <div className="baby-btn">
          <button>LEARN MORE</button>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}
