import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./css/Reviews.css";

export default function Reviews() {
    return (
        <section className="reviews">
            <h1 className="section-heading">What our Students say...</h1>
            <div class="rbd-core-ui">
                <div class="rbd-review-slider">
                    <div class="rbd-review-container">
                    <Carousel className='carousel' showArrows={false} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>
                        <div class="rbd-review review1.1 ">
                            <h3 class="rbd-heading">Test Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://www.gravatar.com/avatar/ee304528491d860812f73d7d5cd0dc72?s=256"/>I'm a big fan of this test company. They really do the best work around, and their prices just can't be beat! I hear that Alex is a pretty cool guy…</div>
                            <div class="rbd-review-meta">Written by Anonymous. on Feb. 18, 2018</div>
                        </div>
                        <div class="rbd-review review1.2 ">
                        <h3 class="rbd-heading">Test Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://www.gravatar.com/avatar/ee304528491d860812f73d7d5cd0dc72?s=256"/>I'm a big fan of this test company. They really do the best work around, and their prices just can't be beat! I hear that Alex is a pretty cool guy…</div>
                            <div class="rbd-review-meta">Written by Anonymous. on Feb. 18, 2018</div>
                        </div>
                        <div class="rbd-review review1.3">
                            <h3 class="rbd-heading">Test Review </h3>
                            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
                            <div class="rbd-content"><img alt="" class="rbd-gravatar" src="https://www.gravatar.com/avatar/ee304528491d860812f73d7d5cd0dc72?s=256"/>I'm a big fan of this test company. They really do the best work around, and their prices just can't be beat! I hear that Alex is a pretty cool guy…</div>
                            <div class="rbd-review-meta">Written by Anonymous. on Feb. 18, 2018</div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
