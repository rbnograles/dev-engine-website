import React, { useEffect, Fragment } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
// utilities
import Row from '../utils/Row';
import Card from '../utils/Card';

const Page4 = ()  => {

    useEffect(() => {
        Aos.init({duration: 1000 })
    },[]); {

        return (
            <Fragment>
                <div className="content-centered-page-4" id="Suite">
                    <h2 className="page-title">The Stack Suite</h2>
                    <Row>
                        <div className="col-item">
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="300"
                                status=""
                                cardTitle="Gradebook"
                                classNames="card-blog bg1"
                                cardContent="Manage. Report. Analyze."
                                cardContentSub="All-In-One."
                            />
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="600"
                                status="Latest"
                                cardTitle="Enrollment"
                                classNames="card-blog bg2"
                                cardContent="Forms, transcripts and records."
                                cardContentSub="Seamlessly automated."
                            />
                        </div>
                        <div className="col-item">
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="900"
                                status=""
                                cardTitle="Finance"
                                classNames="card-blog bg3"
                                cardContent="Every receipt and transaction."
                                cardContentSub="Minus the hassle."
                            />
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="1200"
                                status="Latest"
                                cardTitle="SENTRY"
                                classNames="card-blog bg4"
                                cardContent="Storms? Brownouts? COVID-19?"
                                cardContentSub="We got you covered!"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-item">
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="300"
                                status=""
                                cardTitle="Attendance"
                                classNames="card-blog bg5"
                                cardContent="Log present, absent, tardy & disciplinary."
                                cardContentSub="With just 3 clicks."
                            />
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="600"
                                status=""
                                cardTitle="Inventory"
                                classNames="card-blog bg6"
                                cardContent="For all things big and small."
                                cardContentSub="What is borrowed must be returned."
                            />
                        </div>
                        <div className="col-item">
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="900"
                                status=""
                                cardTitle="ID and Security"
                                classNames="card-blog bg7"
                                cardContent="Verify everyone. Even visitors and pets."
                                cardContentSub="No cameras though (unless requested)."
                            />
                            <Card 
                                aosclasses="fade-up"
                                aosDelay="1200"
                                status=""
                                cardTitle="Website and CMS"
                                classNames="card-blog bg8"
                                cardContent="Get a stunning website."
                                cardContentSub="Just like ours."
                            />
                        </div>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Page4
