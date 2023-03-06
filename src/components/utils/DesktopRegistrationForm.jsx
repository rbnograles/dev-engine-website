import React, { Fragment } from "react";

const DesktopRegistrationForm = (props) => {
  const { handleChange, registerAccount, onSubmit, errors } = props;
  return (
    <Fragment>
      <div className="page-content-form">
        <h2>Register for free below!</h2>
        <div className="form-input">
          <div className="input-holder">
            <input
              type="text"
              onChange={handleChange("firstName")}
              value={registerAccount.firstName || ""}
              required
            />
            <label>
              {errors
                ? errors.firstName
                  ? errors.firstName + "!"
                  : "First Name"
                : "First Name"}
            </label>
          </div>
        </div>
        <div className="form-input">
          <div className="input-holder">
            <input
              type="text"
              onChange={handleChange("lastName")}
              value={registerAccount.lastName || ""}
              required
            />
            <label>
              {errors
                ? errors.lastName
                  ? errors.lastName + "!"
                  : "Last Name"
                : "Last Name"}
            </label>
          </div>
        </div>
        <div className="form-input">
          <div className="input-holder">
            <input
              type="email"
              className="not-capetalize"
              onChange={handleChange("emailAddress")}
              value={registerAccount.emailAddress || ""}
              required
            />
            <label>
              {errors
                ? errors.emailAddress
                  ? errors.emailAddress + "!"
                  : "Email Address"
                : "Email Address"}
            </label>
          </div>
        </div>
        <div className="form-input last">
          <div className="input-holder">
            <input
              type="text"
              onChange={handleChange("school")}
              value={registerAccount.school || ""}
              required
            />
            <label>
              {errors
                ? errors.school
                  ? errors.school + "!"
                  : "School Name"
                : "School Name"}
            </label>
          </div>
        </div>
        <div className="form-checkbox">
          <div className="content-holder">
            <p>Data Policy Agreement</p>
            <span>
              In submitting this form, I agree to authorise <b>Stack</b> to
              store and process my information in accordance to the Data Privacy
              Act of 2012.
            </span>
          </div>
        </div>
        <button
          type="button"
          className="mt-60 stack-btn btn-success btn-rounded"
          onClick={(e) => {
            onSubmit();
          }}
        >
          <div className="button-content">
            <span>Register Now</span>
          </div>
        </button>
      </div>
    </Fragment>
  );
};

export default DesktopRegistrationForm;
