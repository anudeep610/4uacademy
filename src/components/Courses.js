import React from 'react';
import "./css/Courses.css";
import Java from "../assets/images/java.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFloppyDisk} from "@fortawesome/free-regular-svg-icons";
import {faFile, faCircleCheck, faCodeMerge} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Courses() {

    return (
        <section className="courses">
            <span className='section-heading-container'><h1 className="section-heading">Our courses</h1></span>
            <div className="course-cards-container">
                <div className="course-card">
                    <div className="course-card-header">
                        <h3 className="course-card-heading">Complete Java placement course</h3>
                        <FontAwesomeIcon icon={faFile}/>
                    </div>
                    <div className="course-card-body">
                        <div className="course-requirments">
                            <FontAwesomeIcon className='course-requirments-icon' icon={faCircleCheck}/>
                            <h6 className='course-requirements-sentence'>No prior coding knowledge required</h6>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">Course Outcomes</h6>
                            <p className="course-outcomes-content">Ace all your placement interviews in style. </p>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">What you'll learn?</h6>
                            <p className="course-outcomes-content"> Java basics, coditional statements, loops, patterns, recursion, strings, arrays ,oops ,exception handling  ... and much more!!</p>
                        </div>
                        <div className="course-learn-more">
                            <Link className='course-link' to="/coursepage/java">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-card-header purple">
                        <h3 className="course-card-heading">Data structures and algorithms</h3>
                        <FontAwesomeIcon icon={faCodeMerge}/>
                    </div>
                    <div className="course-card-body">
                        <div className="course-requirments">
                            <FontAwesomeIcon className='course-requirments-icon' icon={faCircleCheck}/>
                            <h6 className='course-requirements-sentence'>Basic Coding knowledge in java </h6>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">Course Outcomes</h6>
                            <p className="course-outcomes-content"> Learn the nitty gritty of data structures. </p>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">What you'll learn?</h6>
                            <p className="course-outcomes-content"> Complextiy Analysis, Stacks, Queues, Linked Lists, Trees, Tries, dynamic programming, greddy techniques... and much more!!</p>
                        </div>
                        <div className="course-learn-more">
                            <a className='course-link' href="http://">Coming Soon</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
