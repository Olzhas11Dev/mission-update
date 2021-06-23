import React from "react"
import "../style/main_block.css"

export default function MainBlock() {
  return (
    <div className="main-block">
      <h3>Teaching kids programming and digital skills is MORE than just writing code</h3>
      <div className="card-section">
        <div className="main-card">
          <div className="main-pic">
            <div className="main-mask"></div>
            <img src="main_girl.png" alt="" />
          </div>
          <div className="main-logo">
            <img src="main_icon_idea.png" alt="" />
          </div>
          <p>Creativity @ Individuality</p>
        </div>
      </div>
    </div>
  )
}
