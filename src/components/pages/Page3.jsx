import React from "react";
import { Link } from "react-scroll";

const Page3 = () => {
  return (
    <div className="page-container page-cover-secondary d-flex" id="Sentry">
      <div className="page-content-secondary">
        <h1 className="page-introduction">Introducing SENTRY</h1>
        <div className="line"></div>
        <span className="page-subIntro">Our Response to COVID-19</span>
        <div className="btn-group">
          <button className="devengine-btn btn-rounded">
            <Link to="Suite" spy={true} smooth={true} offset={0} duration={500}>
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="rightContent">
        <div className="bg-laptop-content"></div>
      </div>
    </div>
  );
};

export default Page3;
