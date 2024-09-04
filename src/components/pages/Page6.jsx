import React from "react";
// utilities
import Row from "../utils/Row";
import Card from "../utils/CardPricing";
// icons
import { FaCube, FaCubes, FaCrown } from "react-icons/fa";
import { Link } from "react-scroll";

const Page6 = () => {
  return (
    <div className="content-centered-page-6 bg-liner-image" id="Subscription">
      <h2 className="page-title">Subscription Tiers</h2>
      <Row>
        <div className="col-item">
          <Card
            aosclasses="fade-up"
            aosDelay="300"
            status=""
            cardTitle={
              <div className="card-title">
                <FaCube className="card-icon" /> <span>Basic</span>
              </div>
            }
            classNames="card-blog"
            allowable={[1]}
            apps="1 - 2"
            users="1-149"
          />
          <Card
            aosclasses="fade-up"
            aosDelay="600"
            status=""
            cardTitle={
              <div className="card-title">
                <FaCubes className="card-icon devengine" />{" "}
                <span>Standard</span>
              </div>
            }
            classNames="card-blog"
            allowable={[2]}
            apps="3 - 4"
            users="150 - 499"
          />
          <Card
            aosclasses="fade-up"
            aosDelay="900"
            status=""
            cardTitle={
              <div className="card-title">
                <FaCrown className="card-icon gold" /> <span>Premium</span>
              </div>
            }
            classNames="card-blog"
            allowable={[2, 3, 4, 5]}
            apps="5 or more"
            users="500 or more"
          />
        </div>
      </Row>
      <div className="subscription-footer">
        <p>
          We customize our offer to fit your school's need and requirements.
        </p>
        <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
          <span>Contact us now.</span>
        </Link>
      </div>
    </div>
  );
};

export default Page6;
