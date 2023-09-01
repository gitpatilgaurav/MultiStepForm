import React from "react";
import "./StepFour.css";

export default function StepFour(props) {
  const priceSuffix = props.isYearlyBilling ? "(Yearly)" : "(Monthly)";
  const EndSuffix = props.isYearlyBilling ? "(per Year)" : "(per Month)";
  const shortSuffix = props.isYearlyBilling ? "/yr" : "/mo";

  const handleStepTwoLinkClick = () => {
    props.onStepChange(2);
  };

  return (
    <div className="stp step-4">
      <div className="header">
        <h1 className="title">Finishing up</h1>
        <p className="exp">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="selection-box">
        <div className="selection-container">
          <div className="selected-plan">
            <p className="plan-name">
              {props.selected}
              {priceSuffix}
            </p>
            <p className="plan-price">
              ${props.planPrice}
              {shortSuffix}
            </p>
          </div>
          <a href="#" className="link" onClick={handleStepTwoLinkClick}>
            change
          </a>
          <hr />
          <div className="addons">
            {props.onlineAddon > 0 && (
              <div className="selected-addon">
                <span className="service-name">{props.onlineAddonName}</span>
                <span className="servic-price">
                  ${props.onlineAddon} {shortSuffix}
                </span>
              </div>
            )}
            {props.largeAddon > 0 && (
              <div className="selected-addon">
                <span className="service-name">{props.largeAddonName}</span>
                <span className="servic-price">
                  ${props.largeAddon} {shortSuffix}
                </span>
              </div>
            )}

            { props.customizeAddon > 0 && (
              <div className="selected-addon">
                <span className="service-name">{props.customizeAddonName}</span>
                <span className="servic-price">
                  ${props.customizeAddon} {shortSuffix}
                </span>
              </div>
            )}
          </div>
        </div>
        <p className="total">
          Total {EndSuffix}{" "}
          <b>
            
            ${props.planPrice + props.customizeAddon + props.largeAddon + props.onlineAddon}
            {shortSuffix}
          </b>
        </p>
      </div>
      <div className="btns">
        <button className="prev-stp" type="button" onClick={props.onPrev}>
          Go Back
        </button>
        <button className="next-stp" type="submit" onClick={props.onNext}>
          Submit
        </button>
      </div>
    </div>
  );
}
