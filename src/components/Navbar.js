import React from 'react'
import "./css/Navbar.css";
import logo from "../assets/images/logo-removebg.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='header'>
        <div className="branding">
            <img src={logo} alt="logo" srcset="" />
            <h1>4U Academy</h1>
        </div>
        <div className="sections">
          <a href="#hero" className='section-name'>Home</a>
          <Link className='section-name' to='/about'>About</Link>
          <a href="#course" className='section-name'>Courses</a>
          <a href="#testimonial" className='section-name'>Testimonials</a>
          <a href="#blog" className='section-name'>Blog</a>
        </div>
    </header>
  )
}
