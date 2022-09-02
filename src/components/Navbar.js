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
          <Link className='section-name' to='/'>Home</Link>
          <Link className='section-name' to='/about'>About</Link>
          <Link className='section-name' to='/'>Courses</Link>
          <Link className='section-name' to='/'>Testimonials</Link>
        </div>
    </header>
  )
}
