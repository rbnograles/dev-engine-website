import React, { Component, Fragment } from "react";
import { FaRegTimesCircle, FaTimes } from "react-icons/fa";

export class Error extends Component {
  render() {
    const { error, closeToast } = this.props;
    return (
      <Fragment>
        <div className={`stack-toast-error ${error === false ? "show" : ""}`}>
          <FaRegTimesCircle />
          <div className="toast-body">
            <p>Oops!</p>
            <span>Its seems we ran into a problem.</span>
            <span>Please check your given information.</span>
          </div>
          <FaTimes
            className="times"
            onClick={(e) => {
              closeToast();
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default Error;
