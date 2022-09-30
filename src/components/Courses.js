import React from 'react';
import "./css/Courses.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCodeMerge} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';
import {faJava } from '@fortawesome/free-brands-svg-icons';

export default function Courses() {

    return (
        <section className="courses" id="course">
            <span className='section-heading-container'><h1 className="section-heading">Our courses</h1></span>
            <div className="course-cards-container">
                <div className="course-card">
                    <div className="course-card-header">
                        <h3 className="course-card-heading">Complete Java placement course</h3>
                        <FontAwesomeIcon icon={faJava}/>
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
                            <h6 className="course-outcomes-heading">Next Batch</h6>
                            <p className="course-outcomes-content">last week of october</p>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">What you'll learn?</h6>
                            <p className="course-outcomes-content"> Java basics, coditional statements, loops, patterns, recursion, strings, arrays ,oops ,exception handling  ... and much more!!</p>
                        </div>
                        <div className="course-learn-more">
                            {/* <HashLink className='course-link' to="/coursepage/java/#top">Explore Course &rarr;</HashLink> */}
                            <p className='course-link'>Coming Soon</p>
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
                            <h6 className="course-outcomes-heading">Batch Starts On</h6>
                            <p className="course-outcomes-content"> 5th October </p>
                        </div>
                        <div className="course-outcomes">
                            <h6 className="course-outcomes-heading">What you'll learn?</h6>
                            <p className="course-outcomes-content"> Complextiy Analysis, Stacks, Queues, Linked Lists, Trees, Tries, dynamic programming, greedy techniques... and much more!!</p>
                        </div>
                        <div className="course-learn-more">
                            <HashLink className='course-link' to="/coursepage/dsa/#top">Explore Course &rarr;</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
