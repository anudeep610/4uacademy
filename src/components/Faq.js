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
                    <label for="q1" class="panel-title"> Lorem ipsum dolor sit amet consectetur? </label>
                    <div class="panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque similique ea libero, cum natus ipsa et veniam, incidunt exercitationem cumque impedit harum aperiam fuga nulla laborum rem aliquam eaque.</div>
                </div>
                <div class="faq-question">
                    <input id="q2" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q2" class="panel-title"> Lorem ipsum dolor sit amet ? </label>
                    <div class="panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque similique ea libero, cum natus ipsa et veniam, incidunt exercitationem cumque impedit harum aperiam fuga nulla laborum rem aliquam eaque.</div>
                </div>
                <div class="faq-question">
                    <input id="q3" type="checkbox" class="panel"/>
                    <div class="plus">+</div>
                    <label for="q3" class="panel-title"> Lorem ipsum dolor sit amet adipisicing elit ? </label>
                    <div class="panel-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque similique ea libero, cum natus ipsa et veniam, incidunt exercitationem cumque impedit harum aperiam fuga nulla laborum rem aliquam eaque.</div>
                </div>
            </div>
        </section>
    )
}
