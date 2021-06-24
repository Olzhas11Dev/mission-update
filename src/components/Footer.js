import React from "react"
import "../style/footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <div className="footer-left">
          <div className="footer-card">
            <div className="footer-title">Company</div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Partners</div>
          </div>
          <div className="footer-card">
            <div className="footer-title">Company</div>
            <div>Register</div>
            <div>Login</div>
            <div>Projects</div>
            <div>Parents</div>
            <div>Resourses</div>
          </div>
          <div className="footer-card">
            <div className="footer-title">Company</div>
            <div>FAQs</div>
            <div>Helpdesk</div>
            <div>Contact Us</div>
          </div>
          <div className="footer-card">
            <div className="footer-title">Company</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Careers</div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-title">LevelUp Works</div>
          <p>LevelUp Works is an Auckland based enterprise dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologies & Hangarau Matihiko.</p>
          <div>alan@levelupworks.com</div>
          <div>(021) 668 185</div>
        </div>
      </div>
    </div>
  )
}
