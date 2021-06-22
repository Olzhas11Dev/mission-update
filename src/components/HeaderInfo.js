import React from "react"
import "../style/header_info.css"

export default function HeaderInfo() {
  return (
    <div className="header-info">
      <div className="left-header">
        <h1>What we offer</h1>
        <div>The creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New-Zealand leading IT industry experts and schools</div>
        <h2>What will student create?</h2>
        <div className="icons-header-info">
          <div className="card-header">
            <img src="icon_frame.png" alt="" />
            <p>Animation</p>
          </div>
          <div className="card-header">
            <img src="icon_joystick.png" alt="" />
            <p>Games</p>
          </div>
          <div className="card-header">
            <img src="icon_robotic.png" alt="" />
            <p>Chatbox</p>
          </div>
          <div className="card-header">
            <img src="icon_ai.png" alt="" />
            <p>Augmented reality</p>
          </div>
        </div>
      </div>
      <div className="right-header">
        <img src="projects02.png" width="400px" />
        <div className="btn-radio">
          <input type="radio" name="radio" />
          <input type="radio" name="radio" />
          <input type="radio" name="radio" />
          <input type="radio" name="radio" />
        </div>
      </div>
    </div>
  )
}
