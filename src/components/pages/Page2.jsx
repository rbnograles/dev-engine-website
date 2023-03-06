import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// utilities
import Row from "../utils/Row";
import CardBlog from "../utils/CardBlog";
// img, svg, data image

const Page2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="content-centered" id="Blog">
      <h2 className="page-title">Page Title</h2>
      <Row>
        <CardBlog
          aosclasses="fade-right"
          date="Aug 25 2000"
          imageLink="https://i0.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1"
          presentor="Bob Sunga | Data Analyst"
          tags={["I.T", "Strategy", "Logic"]}
          cardTitle="Title goes in here!"
          cardContent="Content goes in this part of the card!"
        />
        <CardBlog
          aosclasses="fade-left"
          date="Aug 25 2000"
          imageLink="https://i0.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1"
          presentor="Dave Gan | Data Analyst"
          tags={["I.T", "Strategy", "Sales"]}
          cardTitle="Title goes in here!"
          cardContent="Content goes in this part of the card!"
        />
      </Row>
    </div>
  );
};

export default Page2;
