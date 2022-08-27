import React from 'react';
import "./css/Courses.css";
import Java from "../assets/images/java.png";

export default function Courses() {

    return (
        <section className="courses">
            <h1 className="section-heading">Our courses</h1>
            <div class="carousel-course-card">
                <div class="carousel-course-card-cell">
                    <div class="card-cell-thumbnail">
                        <img src={Java} alt="java"/>
                    </div>
                    <div class="card-cell-content">
                        <div class="card-cell-text">
                            <h2>Java Fundamentals</h2>
                            <h3>Beginner Course</h3>
                        </div>
                        <div class="card-cell-info-container">
                            <div class="card-cell-info">
                                <i class="fas fa-file-video"></i>
                                <h4>7.5 hours of on-demand video</h4>
                            </div>
                            <div class="card-cell-info">
                                <i class="fas fa-file-download"></i>
                                <h4>8 downloadable resources</h4>
                            </div>
                            <div class="card-cell-info">
                                <i class="fas fa-award"></i>
                                <h4>fundamentals certificate</h4>
                            </div>
                        </div>
                    </div>
                    {/* <div class="card-cell-button">
                        <a href="#">LEARN MORE</a>
                    </div> */}
                </div>

                <div class="carousel-course-card-cell">
                    <div class="card-cell-thumbnail">
                        <img src={Java} alt="Achology Fundamentals of NLP Neuro Linguistic Programming"/>
                    </div>
                    <div class="card-cell-content">
                        <div class="card-cell-text">
                            <h2>Java DSA</h2>
                            <h3>Advanced Course</h3>
                        </div>
                        <div class="card-cell-info-container">
                            <div class="card-cell-info">
                                <i class="fas fa-file-video"></i>
                                <h4>7.5 hours of on-demand video</h4>
                            </div>
                            <div class="card-cell-info">
                                <i class="fas fa-file-download"></i>
                                <h4>8 downloadable resources</h4>
                            </div>
                            <div class="card-cell-info">
                                <i class="fas fa-award"></i>
                                <h4>fundamentals certificate</h4>
                            </div>
                        </div>
                    </div>
                    {/* <div class="card-cell-button">
                        <a href="#">LEARN MORE</a>
                    </div> */}
                </div>

                
            </div>
        </section>
    )
}
