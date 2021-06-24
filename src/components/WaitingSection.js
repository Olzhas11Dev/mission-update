import React from "react"
import "../style/waiting_section.css"

export default function WaitingSection() {
  return (
    <div className="wating-section">
      <div className="waitLeft">
        <img src="teachers_kids.png" alt="" />
      </div>
      <div className="waitRight">
        <h2>What are you waiting for?</h2>
        <h4>Start teaching Digital Technologies today</h4>
        <p>If you need more information,we are happy to answer any questions you may have.</p>
        <div className="btn-wait">
          <button>ENQUIRE NOW</button>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}
