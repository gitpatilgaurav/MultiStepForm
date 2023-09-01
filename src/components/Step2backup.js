import React, { useState } from "react";
import "./StepTwo.css";
import img1 from "./assets/images/icon-arcade.svg";
import img2 from "./assets/images/icon-advanced.svg";
import img3 from "./assets/images/icon-pro.svg";

export default function StepTwo(props) {
  const [selected, setSelected] = useState("Arcade");
  
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  

  const toggleBillingFrequency = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const monthPlan = [9, 12, 15];
  const yearPlan = [90, 120, 150];

  const prices = isYearlyBilling ? yearPlan : monthPlan;
  const priceSuffix = isYearlyBilling ? "/yr" : "/mo";

  

  function selectCard1() {
    setSelected("Arcade");
    props.setFormData((prevData) => ({
      ...prevData,
      planPrice: prices[0],
    }));
  }
  
  function selectCard2() {
    setSelected("Advanced");
    props.setFormData((prevData) => ({
      ...prevData,
      planPrice: prices[1],
    }));
  }
  
  function selectCard3() {
    setSelected("Pro");
    props.setFormData((prevData) => ({
      ...prevData,
      planPrice: prices[2],
    }));
  }
  
  return (
    <div className="stp step2">
      <div className="header">
        <h1 className="title">Select your plan</h1>
        <p className="exp">You have the option of monthly or yearly billing.</p>
      </div>
      <form>
        <div className="fixCss">
        <div
          className={`plan-card ${selected === "Arcade" ? "selected" : ""}`}
          onClick={selectCard1}
        >
          <img src={img1} alt="card1image" />
          <div className="plan-info chosen">
            <b>Arcade</b>
            <span className="plan-priced">${prices[0]}{priceSuffix}</span>
            {isYearlyBilling && <p className="free">2 months free</p>}
          </div>
        </div>
        <div
          className={`plan-card ${selected === "Advanced" ? "selected" : ""}`}
          onClick={selectCard2}
        >
          <img src={img2} alt="card2image" />
          <div className="plan-info">
            <b>Advanced</b>
            <span className="plan-priced">${prices[1]}{priceSuffix}</span>
            {isYearlyBilling && <p className="free">2 months free</p>}
          </div>
        </div>
        <div
          className={`plan-card ${selected === "Pro" ? "selected" : ""}`}
          onClick={selectCard3}
        >
          <img src={img3} alt="card3image" />
          <div className="plan-info">
            <b>Pro</b>
            <span className="plan-priced">${prices[2]}{priceSuffix}</span>
            {isYearlyBilling && <p className="free">2 months free</p>}
          </div>
        </div>
        </div>
      <div className="switcher">
        <p className={`monthly ${!isYearlyBilling ? "sw-active" : ""}`}>
          Monthly
        </p>
        <label className="switch">
          <input
            type="checkbox"
            checked={isYearlyBilling}
            onChange={toggleBillingFrequency}
          />
          <span className="slider round"></span>
        </label>
        <p className={`yearly ${isYearlyBilling ? "sw-active" : ""}`}>Yearly</p>
      </div>
  
      <div className="btns">
        <button className="prev-stp" onClick={props.onPrev}>
          Go Back
        </button>
        <button className="next-stp" onClick={props.onNext}>
          Next Step
        </button>
      </div>
      </form>
    </div>
  );
}
