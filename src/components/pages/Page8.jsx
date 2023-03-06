import React from "react";
import Row from "../utils/Row";

const Page8 = ({ values }) => {
  return (
    <div className="content-centered-page-8" id="FAQ">
      <h2 className="page-title">Frequently Asked Questions</h2>
      <Row>
        {values.map((data, index) => {
          return (
            <div
              key={index}
              className="card-blog"
              data-aos={data.aosclasses}
              data-aos-delay={data.aosDelay}
              data-aos-easing="ease-in-out"
            >
              <p className="header">{data.question}</p>
              <span className="content">{data.content}</span>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Page8;
