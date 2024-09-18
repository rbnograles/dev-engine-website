import React, { useState, useEffect } from "react";
// stylesheets
import "../scss/defaults.scss";
import "../scss/buttons.scss";
import "../scss/_positions.scss";
import "../scss/margins.scss";
import "../scss/Page1.scss";
import "../scss/Page2.scss";
import "../scss/Page3.scss";
import "../scss/Page4.scss";
import "../scss/Page5.scss";
import "../scss/Page6.scss";
import "../scss/Page7.scss";
import "../scss/Page8.scss";
import "../scss/Page9.scss";
import "../scss/Footer.scss";
import "../scss/success.scss";
import "../scss/errors.scss";
// components
import Page1 from "./Page1";
// import Page2 from './Page2';
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Wrapper from "../utils/Wrapper";
import Navbar from "../utils/Navbar";
import Footer from "./Footer";

const MainPage = (props) => {
  const FAQ = {
    isMinimized: false,
    isToggleOpen: false,
    FAQItems: [
      {
        question: "What is devengine?",
        content:
          "devengine is a suite of school-specific apps, designed to support teachers in daily task management. Our goal is to recenter the passion for teaching by letting teachers do what they do best: TEACH.",
        aosclasses: "fade-right",
        aosDelay: "300",
      },
      {
        question: "Who is in Team devengine?",
        content:
          "We are university students and recent graduates, who have previously experienced annoying and clunky systems. We recently turned 1 in 2020, won 4 university-level competitions, and are mentored by industry leaders, both in the Philippines and abroad.",
        aosclasses: "fade-left",
        aosDelay: "600",
      },
      {
        question: "How is devengine different from my current solution?",
        content:
          "Product, service and price. We pride ourselves in delivering school-specific solutions through better technology and shorter response times, while giving clients value for their money.",
        aosclasses: "fade-right",
        aosDelay: "900",
      },
      {
        question: "How do we use devengine?",
        content:
          "Easy! Either using our website (www.devengineschool.dev/login) or from your local server, whichever your school prefers.",
        aosclasses: "fade-left",
        aosDelay: "1200",
      },
      {
        question: "How does your 24/7 customer service work?",
        content:
          "We have teams that work round-the-clock customer service to reduce delays to your service. All queries are answered by our amazing devengine Technology team, you know, the same people who built your system.",
        aosclasses: "fade-right",
        aosDelay: "1500",
      },
      {
        question: "How do you guarantee data protection and security?",
        content:
          "We are compliant with the 2012 Philippine Data Protection Act (and 2016 GDPR for Europe), which is outlined in our Privacy Notice. On security, we use the latest SSL & TLS encryption, recognized by global organizations.",
        aosclasses: "fade-left",
        aosDelay: "1800",
      },
    ],
  };

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (window.screen.width > 992) {
      setIsMinimized(false);
    }
    const handleResize = () => {
      const isMinimized = window.screen.width > 992;
      setIsMinimized(!isMinimized);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openHamburgerMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const {
    registerAccount,
    handleChange,
    clicked,
    onSubmit,
    contactInformation,
    handleChangeContact,
    onSubmitContactUs,
    errors,
    errorsContact,
  } = props;

  return (
    <>
      <Wrapper
        openHamburgerMenu={openHamburgerMenu}
        isToggleOpen={isToggleOpen}
      >
        <Navbar
          isToggleOpen={isToggleOpen}
          openHamburgerMenu={openHamburgerMenu}
        />
        <Page1
          errors={errors}
          registerAccount={registerAccount}
          handleChange={handleChange}
          onSubmit={onSubmit}
          clicked={clicked}
        />
        {/* <Page3 /> */}
        <Page4 />
        <Page5 isMinimized={isMinimized} />
        <Page6 />
        <Page7 />
        <Page8 values={FAQ.FAQItems} />
        <Page9
          errorsContact={errorsContact}
          contactInformation={contactInformation}
          handleChangeContact={handleChangeContact}
          onSubmitContactUs={onSubmitContactUs}
        />
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainPage;
