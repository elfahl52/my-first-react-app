import React from 'react'
import './Nav.css' // Import the CSS file for styling
function Nav() {
  return (
    <div className="nav">
      <a href="#" className="logo">Logo</a>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav
