import React from 'react'
import "./css/Navbar.css";
import logo from "../assets/images/logo-removebg.png";

export default function Navbar() {
  return (
    <header className='header'>
        <div className="branding">
            <img src={logo} alt="logo" srcset="" />
            <h1>academy_4u</h1>
        </div>
        <div className="sections">
          <a className='section-name' href='/'>Home</a>
          <a className='section-name' href='/'>About</a>
          <a className='section-name' href='/'>Courses</a>
          <a className='section-name' href='/'>Testimonials</a>
        </div>
    </header>
  )
}
