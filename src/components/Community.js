import React from 'react'
import commImage from "../assets/images/community.jpg";
import "./css/Community.css";

export default function Community() {
    return (
        <section className="community">
            <h1 className="section-heading">Our Community</h1>
            <div className="community-content">
                <div className="community-details">
                    <p className='community-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur obcaecati sequi accusamus facilis asperiores autem iusto quaerat ducimus aspernatur natus vel, dolorum rerum laboriosam cumque placeat dignissimos ut cum doloremque? Provident hic dolorem temporibus eum quibusdam autem quisquam quidem sunt aspernatur, incidunt repellendus, accusantium adipisci nobis? Ipsa debitis ipsum earum?</p>
                </div>
                <div className="community-image">
                    <img src={commImage} alt="community" srcset="" />
                </div>
            </div>
            <a href="http://" className='community-button'>Join Our Community</a>
        </section>
    )
}
