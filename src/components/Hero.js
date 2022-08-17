import React from 'react'
import "./css/Hero.css";
import laptop from "../assets/images/laptop.png";
import intro from "../assets/videos/intro.mp4";


export default function Hero() {
  return (
    <section className='hero'>
        <div className="main-heading">
            <div className="type-container">
                <h1 className='heading typed-out anime-1'>Java </h1>
            </div>
        
            <div className="type-container">
                <h1 className='heading typed-out anime-2'>Placement</h1>
            </div>

            <div className="type-container">
            <h1 className='heading typed-out anime-3'>Course..</h1>
            </div>
            
        </div>
        <div className="video-container">
            <div className="laptop">
                <img src={laptop} alt="laptop" srcset="" />
                <video src={intro} controls></video>
            </div>
        </div>
    </section>
  )
}
