import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// utilities
import Row from "../utils/Row";
import Card from "../utils/AdvantageCard";

const Page5 = ({ isMinimized }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  {
    return (
      <div className="content-centered-page-5" id="Advantage">
        <h2 className="page-title">The Stack Advantage</h2>
        <Row>
          <div className="col-item">
            <Card
              aosclasses="fade-right"
              aosDelay="300"
              status=""
              cardTitle="Optimized for Mobile"
              classNames="card-blog bg1"
              cardContent="For on-the-go access."
            />
            <Card
              aosclasses="fade-up"
              aosDelay="600"
              status=""
              cardTitle="Cloud & Server Ready"
              classNames="card-blog bg2"
              cardContent="Empowering better, collaborative management."
            />
          </div>
          <div className="col-item">
            <Card
              aosclasses="fade-left"
              aosDelay="900"
              status=""
              cardTitle="Single Sign-On"
              classNames="card-blog bg3"
              cardContent="One username, one password."
              cardContentSub="All of Stack."
            />
            {isMinimized ? (
              <Card
                aosclasses="fade-right"
                aosDelay="300"
                status=""
                cardTitle="24/7 Customer Service"
                classNames="card-blog bg5"
                cardContent="Professional and responsive support, round the clock."
              />
            ) : (
              ""
            )}
          </div>
        </Row>
        <Row>
          <div className="col-item-flex">
            <Card
              aosclasses="fade-right"
              aosDelay="300"
              status=""
              cardTitle="School-Specific Build"
              classNames="card-blog bg4"
              cardContent="Features built for you, by you."
            />
            {isMinimized ? (
              ""
            ) : (
              <Card
                aosclasses="fade-up"
                aosDelay="600"
                status=""
                cardTitle="24/7 Customer Service"
                classNames="card-blog bg5"
                cardContent="Professional and responsive support, round the clock."
              />
            )}
          </div>
          <div className="col-item">
            <Card
              aosclasses="fade-left"
              aosDelay="900"
              status=""
              cardTitle="Cost & Time Savings"
              classNames="card-blog bg6"
              cardContent="Because one system is all you need."
            />
          </div>
        </Row>
      </div>
    );
  }
};

export default Page5;
