import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./css/Reviews.css";

export default function Reviews() {
    return (
        <section className="reviews" id="testimonial">
            <h1 className="section-heading">What our Students say...</h1>
            <div class="rbd-core-ui">
                <div class="rbd-review-slider">
                    <div class="rbd-review-container">
                    <Carousel className='carousel' autoPlay={true} interval={2500} infiniteLoop={true} showIndicators={false} showStatus={false} showArrows={true}>
                        <div class="rbd-review review1.1 ">
                            <h3 class="rbd-heading">Review</h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=1OWsHzg_gQwffNTgwZE2aSgnU3MDVJmVj"/>I was in the first batch of java class. The classes were very lively and all the concepts were taught from scratch. As everyone knows first programming language is tough to grasp. But here they make it simple and easy. Daily assignments will also help in understanding the approach and brings confidence.</div>
                            <div class="rbd-review-meta">Written by Shivaraj Karjagi</div>
                        </div>
                        <div class="rbd-review review1.2 ">
                        <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=1P8DspVo-7BYKu3mJ8D1YB0BGFuES9BOt"/>It's really a beneficial thing that I got to know about 4U academy and I joined it to learn Java initially. 4U is a unique academy which I have seen where we will be learning courses for our professional excellence. The way of teaching is completely different and easily understandable. So I am glad to take up few more courses from the academy. </div>
                            <div class="rbd-review-meta">Written by Chandana R</div>
                        </div>
                        <div class="rbd-review review1.3">
                            <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=11dKwRJmbW5-ItE-dREPN2T-QYgr-5EcK"/>I enrolled in JAVA course. I really enjoyed this course. Narendra is a great instructor and I felt I learnt a lot in this course.Great teacher. The teaching of the material was really good</div>
                            <div class="rbd-review-meta">Written by Hitesh Kumawat </div>
                        </div>
                        <div class="rbd-review review1.4">
                            <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=1jDdhpSuwv6CyTHO_SpG3hXy4tuP2Ci7k"/>JAVA is a new language for me. Since I didn't knew anything about it, I was like, can I learn??But as I took up this course eventually I came to understand about its importance .Overall this course is excellent-each day:discussion of doubts,completion of planned part of topic with some good examples, questions that can be asked  for Interview from that particular topic and so on. </div>
                            <div class="rbd-review-meta">Written by S. P. Deepika </div>
                        </div>
                        <div class="rbd-review review1.5">
                            <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=1IksVEZxvHLTFzHpABGdmfIX10pFFPcxC"/>The course was really helpful. Instructor is very dedicated and passionate person clears all our doubts and make sure that we understand every concept clearly. </div>
                            <div class="rbd-review-meta">Written by Usha V G</div>
                        </div>
                        <div class="rbd-review review1.6">
                            <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=1ntkEWBYLReP2xdBAVobrXzrilKgH5O4I"/>I bought this course because I was not consistent in learning the programming language. This course helped me in strengthen the basics  and build logical thinking with consistent solving of assignments. The OOPs concept is taught in a very easy manner. </div>
                            <div class="rbd-review-meta">Written by Nikhil J </div>
                        </div>
                        <div class="rbd-review review1.7">
                            <h3 class="rbd-heading">Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://drive.google.com/uc?id=13sBFeNiyv4WM1G4po2PPLsV38_NjGL3d"/>This course is different from other online courses.The way they interact is too good. This course helped me to start my placements preparation.</div>
                            <div class="rbd-review-meta">Written by Kona Chandra Kiran </div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
