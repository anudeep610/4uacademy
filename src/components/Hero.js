import React from 'react'
import "./css/Hero.css";
import laptop from "../assets/images/laptop.png";
import intro from "../assets/videos/intro.mp4";
import boy from "../assets/images/boy.png"


export default function Hero() {
  return (
    <section className='hero'>
        <div className="hero-container">
            <div className="hero-content">
                <h2 className="hero-heading">Boost Your Career With Us </h2>
                <p className="hero-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil maiores ex non iure ratione id dicta quaerat? Error explicabo suscipit rerum quos inventore magnam, in ullam assumenda ad! Repellat, delectus? In doloribus dolor porro sit eum, voluptates incidunt quasi quaerat animi maxime similique explicabo ipsam, iusto ea quos qui.</p>
                <a href="#" class="btn btn--shimmer">Explore More </a>
            </div>
            <div className="hero-image">
                <img src={boy} alt="confused boy" />
            </div>
        </div>
        <div className="info-box">
                <h5 className="info">Batch starting soon!!!</h5>
        </div>
        {/* <div className="main-heading">
            <div className="type-container">
                <h1 className='heading typed-out anime-1'>Java</h1>
            </div>
        
            <div className="type-container">
                <h1 className='heading typed-out anime-2'>Placement</h1>
            </div>

            <div className="type-container">
            <h1 className='heading typed-out anime-3'>Course..</h1>
            </div>
            
        </div> */}
        {/* <div className="video-container">
            <div className="laptop">
                <img src={laptop} alt="laptop" srcset="" />
                <video src={intro} controls></video>
            </div>
        </div> */}
    </section>
  )
}
