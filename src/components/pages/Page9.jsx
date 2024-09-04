import React from "react";

const Page9 = (props) => {
  const {
    contactInformation,
    handleChangeContact,
    onSubmitContactUs,
    errorsContact,
  } = props;

  return (
    <React.Fragment>
      <div className="content-centered-page-9 " id="Contact">
        <div className="card contactForm">
          <div className="contactBody">
            <div className="form-title" id="card-title">
              Get in touch
            </div>
            <div className="row">
              <div className="left">
                <div className="form-input">
                  <div className="input-holder">
                    <input
                      type="text"
                      onChange={handleChangeContact("firstName")}
                      value={contactInformation.firstName || ""}
                      required
                    />
                    <label>
                      {errorsContact
                        ? errorsContact.firstName
                          ? errorsContact.firstName + "!"
                          : "First Name"
                        : "First Name"}
                    </label>
                  </div>
                </div>
                <div className="form-input">
                  <div className="input-holder">
                    <input
                      type="text"
                      onChange={handleChangeContact("lastName")}
                      value={contactInformation.lastName || ""}
                      required
                    />
                    <label>
                      {errorsContact
                        ? errorsContact.lastName
                          ? errorsContact.lastName + "!"
                          : "Last Name"
                        : "Last Name"}
                    </label>
                  </div>
                </div>
                <div className="form-input">
                  <div className="input-holder">
                    <input
                      type="text"
                      className="not-capetalize"
                      onChange={handleChangeContact("emailAddress")}
                      value={contactInformation.emailAddress || ""}
                      required
                    />
                    <label>
                      {errorsContact
                        ? errorsContact.emailAddress
                          ? errorsContact.emailAddress + "!"
                          : "Email Address"
                        : "Email Address"}
                    </label>
                  </div>
                </div>
                <div className="form-input">
                  <div className="input-holder">
                    <input
                      type="text"
                      onChange={handleChangeContact("topic")}
                      value={contactInformation.topic || ""}
                      placeholder={
                        errorsContact
                          ? errorsContact.topic
                            ? "Please tell us what you want to talk about."
                            : ""
                          : ""
                      }
                      required
                    />
                    <label>Topic</label>
                  </div>
                </div>
                <div className="form-input">
                  <div className="input-holder">
                    <textarea
                      type="text"
                      onChange={handleChangeContact("content")}
                      value={contactInformation.content || ""}
                      placeholder={
                        errorsContact
                          ? errorsContact.content
                            ? "Please say hi to us."
                            : ""
                          : ""
                      }
                      required
                    />
                    <label>What's on your mind?</label>
                  </div>
                </div>
                <button
                  className="devengine-btn"
                  id="btn-submit"
                  onClick={(e) => {
                    onSubmitContactUs();
                  }}
                >
                  {" "}
                  Send Message
                </button>
              </div>
              <div className="right">
                <div id="card-title">
                  You can contact us through the following details.
                </div>
                <div className="info-holder">
                  <div className="card mb-4">
                    <div className="card-body subForm">
                      <div className="info">
                        <p>
                          <i className="fa fa-phone icon-color"></i> +63 917 830
                          2866
                        </p>
                        <p>
                          <i className="fa fa-phone icon-color"></i> +44 7397
                          7736 77
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body subForm">
                      <div className="info">
                        <p>
                          <i className="fa fa-envelope-open-text icon-color"></i>{" "}
                          team@devengineschool.dev
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body subForm">
                      <div className="info">
                        <p>
                          <i className="fa fa-globe icon-color"></i>{" "}
                          <span>www.devengineschool.dev</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page9;
