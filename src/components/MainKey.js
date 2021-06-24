import React from "react"
import "../style/main_key.css"

export default function MainKey() {
  return (
    <div className="main-key">
      <div className="main-key-block">
        <h3 className="key-text">Enhance key competecies</h3>
        <p>The programm enhance capabilities of students in the 5 Key compotencies identified in New Zealand Curriculum</p>
        <div className="key-lines">
          <div className="key-logo">
            <img src="icon_start.png" alt="" />
          </div>
          <div className="lines-content">
            <h3>THINKING</h3>
            <p>In particular the programme focuesd on problem solving, design thinking and computational thinking.</p>
          </div>
        </div>
        <div className="key-lines">
          <div className="key-logo">
            <img src="icon_start.png" alt="" />
          </div>
          <div className="lines-content">
            <h3>DISCERNING CODES</h3>
            <p> Analyzing language,symbols and in order to understand and make sense of the codes in which knowledge is expressed.</p>
          </div>
        </div>
        <div className="key-lines">
          <div className="key-logo">
            <img src="icon_start.png" alt="" />
          </div>
          <div className="lines-content">
            <h3>SELF-MANAGEMENT</h3>
            <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</p>
          </div>
        </div>
        <div className="key-lines">
          <div className="key-logo">
            <img src="icon_start.png" alt="" />
          </div>
          <div className="lines-content">
            <h3>RELATIONSHIPS WITH PEERS</h3>
            <p>
              The programme is designed with unplugged sessions where students interacts in a range of different solutions,including things like being able to listen well, recognise different <br /> points of view and share ideas.
            </p>
          </div>
        </div>
        <div className="key-lines">
          <div className="key-logo">
            <img src="icon_start.png" alt="" />
          </div>
          <div className="lines-content">
            <h3>PARTICIPATION AND COLOBORATION</h3>
            <p>The programme encourages students to be involved in communities</p>
          </div>
        </div>
      </div>
    </div>
  )
}
