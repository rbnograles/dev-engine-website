import React, { Component, Fragment } from 'react';
// image
import ArthurGregory from '../assets/Arthur.png';
import DannieSoh from '../assets/Dannie.png';
// utilities
import Row from '../utils/Row';
import Card from '../utils/CardMessage';

export class Page7 extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-centered-page-7">
                    <h2 className="page-title">Testimonials</h2>
                    <div className="testimonial-content">
                        <Row>
                            <div className="col-item" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out">
                                <img src={ArthurGregory} alt="Profile testimony" className="testimonila-image" />
                                <p className="name">Arthur - School Administrator (Singapore)</p>
                                <Card 
                                    aosclasses="fade-up"
                                    aosDelay="300"
                                    status=""
                                    classNames="card-blog"
                                    message="Following the demo last March 2020, my school has begun working with Team Stack to integrate their Enrolment system into our school."
                                    message2="Great, down-to-earth individuals with a vision for the future."
                                />
                            </div>
                            <div className="col-item" data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
                                <img src={DannieSoh} alt="Profile testimony" className="testimonila-image" />
                                <p className="name">Dannie - Student</p>
                                <Card 
                                    classNames="card-blog"
                                    message="Since my school started adopting Stack, we went paperless and now I can access things from my phone really easily!"
                                />
                            </div>
                        </Row>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Page7
