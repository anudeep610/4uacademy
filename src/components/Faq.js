import React from 'react'
import "./css/Faq.css";

export default function Faq() {
    return (
        <section className='faq'>
            <h1 className="section-heading">Frequently Asked Questions</h1>
            <div class="faq-content">
                <div class="faq-question">
                    <input id="q1" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q1" class="panel-title"> How are the classes conducted online, offline or recorded sessions will be provided ?</label>
                    <div class="panel-content">Classes will be online on zoom & recorded sessions will be provided with notes .</div>
                </div>
                <div class="faq-question">
                    <input id="q2" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q2" class="panel-title"> Why choose java over other languages ?</label>
                    <div class="panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque similique ea libero, cum natus ipsa et veniam, incidunt exercitationem cumque impedit harum aperiam fuga nulla laborum rem aliquam eaque.</div>
                </div>
                <div class="faq-question">
                    <input id="q3" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q3" class="panel-title">Duration of the Java Course ? </label>
                    <div class="panel-content">45 Days.</div>
                </div>
                <div class="faq-question">
                    <input id="q4" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q4" class="panel-title">How many classes per week ?</label>
                    <div class="panel-content">3 classes per week</div>
                </div>
                <div class="faq-question">
                    <input id="q5" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q5" class="panel-title">What is the total Java course fee ?</label>
                    <div class="panel-content">Total fee is 2k Inr but there is a discount of 500 on payment in the 1st week of the course.</div>
                </div>
                <div class="faq-question">
                    <input id="q6" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q6" class="panel-title">What are the processes involved in Company placement (on campus) ? </label>
                    <div class="panel-content">Pre-placement talk, Scrutiny of resume, Aptitude Test ,Group discussions,Personal interviews and Final selection!!! </div>
                </div>
                <div class="faq-question">
                    <input id="q7" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q7" class="panel-title"> How does 4U academy help us for our placement preparations ? </label>
                    <div class="panel-content"> First of all we teach students all required technical skills like essential programming languages asked in interviews, DSA etc. We conduct mock interviews. We also help students to build their resume in a better way. </div>
                </div>
            </div>
        </section>
    )
}
