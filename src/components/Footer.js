import React from 'react'
import "./css/Footer.css";
import logo from "../assets/images/logo-removebg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer">
                <div className="container">
                    <div className="branding">
                        <img src={logo} alt="logo" />
                        <h2>academy_4u</h2>
                    </div>
                    <p className='tagline'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div className="container">
                    <h3 className='footer-conatainer-heading'>Useful Links</h3>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>About Us</a>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Courses</a>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Terms of Use</a>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Refund Policy</a>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Privacy Policy</a>
                </div>
                <div className="container">
                    <h3 className='footer-conatainer-heading'>Get in Touch</h3>
                    <a className='link-name' href='/'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>4uacademy@gmail.com</a>
                </div>
                <div className="container">
                    <h3 className='footer-conatainer-heading'>Follow us on</h3>
                    <a className='link-name' href='/'> <FontAwesomeIcon icon={faInstagram} className="brands"/>Instagram</a>
                    <a className='link-name' href='/'> <FontAwesomeIcon icon={faFacebookF} className="brands"/> Facebook</a>
                    <a className='link-name' href='/'> <FontAwesomeIcon icon={faTelegram} className="brands"/>Telegram</a>
                    <a className='link-name' href='/'> <FontAwesomeIcon icon={faYoutube} className="brands"/>Youtube</a>
                </div>
            </div>
            <div className="copyright"> <FontAwesomeIcon icon={faCopyright}/> copyrights 2022</div>
        </footer>   
    )
}
