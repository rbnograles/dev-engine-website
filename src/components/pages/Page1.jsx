import React, { useState, Fragment } from "react";
import DesktopRegistrationForm from "../utils/DesktopRegistrationForm";
import MobileRegistrationForm from "../utils/MobileRegistrationForm";

const Page1 = ({
  registerAccount,
  handleChange,
  forSubmittion,
  onSubmit,
  clicked,
  errors,
}) => {
  const [showMobileRegistration, setShowMobileRegistration] = useState(false);

  const handleShowMobileRegistration = (e) => {
    e.preventDefault();
    setShowMobileRegistration(!showMobileRegistration);
  };

  return (
    <Fragment>
      <div className="page-container page-cover-main" id="Home">
        <div className="page-content">
          <div className="upper-content">
            <span className="content-header">Stack Webinar</span>
            <div className="line"></div>
            <h1 className="font-title-resize">I.T. Strategy during COVID-19</h1>
            <p className="support-content">
              Introducing our first-ever webinar, with special guests
            </p>
            <p className="emphasize">
              Xavier <span>School</span>
            </p>
            <p className="support-content">
              on September 1, Tuesday at 4-4:45pm
            </p>
          </div>
          <div className="lower-content">
            <h2>
              <span>Registration Deadline :</span>
            </h2>
            <h2>
              <span>August 30, 12 noon</span>
            </h2>
          </div>
          <button
            className="mt-60 stack-btn btn-rounded"
            onClick={handleShowMobileRegistration}
          >
            <div className="button-content">
              <span>Register Now</span>
            </div>
          </button>
        </div>
        <div
          className={`pos-fixed overlay-effect ${
            !showMobileRegistration ? "close" : "open"
          }`}
        >
          <MobileRegistrationForm
            showMobileRegistration={showMobileRegistration}
            funcShowMobileRegistration={setShowMobileRegistration}
            registerAccount={registerAccount}
            handleChange={handleChange}
            onSubmit={onSubmit}
            clicked={clicked}
            errors={errors}
          />
        </div>
        <DesktopRegistrationForm
          registerAccount={registerAccount}
          handleChange={handleChange}
          onSubmit={onSubmit}
          clicked={clicked}
          errors={errors}
        />
        <div className="page-overlay"></div>
      </div>
    </Fragment>
  );
};

export default Page1;
