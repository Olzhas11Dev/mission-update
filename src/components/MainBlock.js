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
          <p>
            Creativity <br />& Individuality
          </p>
        </div>
        <div className="main-card">
          <div className="main-pic">
            <div className="main-mask"></div>
            <img src="main_markus.png" alt="" />
          </div>
          <div className="main-logo">
            <img src="main_icon_brain.png" alt="" />
          </div>
          <p>
            Creativity <br />& Individuality
          </p>
        </div>
        <div className="main-card">
          <div className="main-pic">
            <div className="main-mask"></div>
            <img src="main_two_girls.png" alt="" />
          </div>
          <div className="main-logo">
            <img src="main_icon_team.png" alt="" />
          </div>
          <p>
            Creativity <br />& Individuality
          </p>
        </div>
        <div className="main-card">
          <div className="main-pic">
            <div className="main-mask"></div>
            <img src="main_annie.png" alt="" />
          </div>
          <div className="main-logo">
            <img src="main_icon_atom.png" alt="" />
          </div>
          <p>
            Creativity <br />& Individuality
          </p>
        </div>
      </div>
      <div className="teach-section">
        <h1>How our programme helps teachers and schools</h1>
        <div className="btn-teach">
          <button>LEARNING PATHWAYS</button>
          <button>DIGITAL TECHNOLOGIES</button>
          <button>KEY COPETENIES</button>
          <button>IR4.0</button>
        </div>
      </div>
    </div>
  )
}
