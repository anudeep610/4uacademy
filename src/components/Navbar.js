import React from 'react'
import "./css/Navbar.css";
import logo from "../assets/images/logo-removebg.png";
import { NavHashLink, HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <header className='header'>
        <div className="branding">
            <img src={logo} alt="logo" srcset="" />
            <HashLink className='brand' to="/#hero">4U Academy</HashLink>
        </div>
        <div className="sections">
          <NavHashLink to="/#hero" smooth activeStyle={{ color: 'orange' }} className='section-name'>Home</NavHashLink>
          <HashLink className='section-name' to='/about'>About</HashLink>
          <NavHashLink to="/#course" smooth activeStyle={{ color: 'orange' }} className='section-name'>Courses</NavHashLink>
          <NavHashLink to="/#testimonial" smooth activeStyle={{ color: 'orange' }} className='section-name'>Testimonials</NavHashLink>
          <NavHashLink to="/#blog" smooth activeStyle={{ color: 'orange' }} className='section-name'>Blog</NavHashLink>
        </div>
    </header>
  )
}
