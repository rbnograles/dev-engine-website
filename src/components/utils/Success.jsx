import React, { Component, Fragment } from "react";
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

export class Success extends Component {
  render() {
    const { success, closeToast, successmsg } = this.props;
    return (
      <Fragment>
        <div className={`stack-toast ${success ? "show" : ""}`}>
          <FaRegCheckCircle />
          <div className="toast-body">
            <p>{successmsg[0]}</p>
            <span>{successmsg[1]}</span>
            <span>{successmsg[2]}</span>
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

export default Success;
