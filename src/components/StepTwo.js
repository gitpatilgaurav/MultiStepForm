  import React, { useState } from "react";
  import "./StepTwo.css";
  import img1 from "./assets/images/icon-arcade.svg";
  import img2 from "./assets/images/icon-advanced.svg";
  import img3 from "./assets/images/icon-pro.svg";

  export default function StepTwo(props) {
    const [error, setError] = useState("");
   
    const isCardSelected = props.selected !== "";
  
    const toggleBillingFrequency = () => {
      props.setIsYearlyBilling(!props.isYearlyBilling);
     
    };

    const monthPlan = [9, 12, 15];
    const yearPlan = [90, 120, 150];

    const prices = props.isYearlyBilling ? yearPlan : monthPlan;
    const priceSuffix = props.isYearlyBilling ? "/yr" : "/mo";

    

    function selectCard1() {
      props.setPlanPrice (prices[0])
      props.setSelected("Arcade");
      props.setFormData((prevData) => ({
        ...prevData,
        planPrice:props.planPrice,
        planName : props.selected
      }));
    }
    
    function selectCard2() {
      props.setPlanPrice (prices[1])
      props.setSelected("Advanced");
      props.setFormData((prevData) => ({
        ...prevData,
        planPrice:props.planPrice,
        planName : props.selected
      }));
    }
    
    function selectCard3() {
      props.setPlanPrice (prices[2])
      props.setSelected("Pro");
      props.setFormData((prevData) => ({
        ...prevData,
        planPrice:props.planPrice,
        planName : props.selected
      }));
    }

    function onNextPage() {
      const isCardSelected = props.selected !== "";
      
     
      if (!isCardSelected) {
        setError("Please select a plan card.");
      } else {
        setError("");
        props.onNext();
      }
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
            className={`plan-card ${props.selected === "Arcade" ? "selected" : ""}`}
            onClick={selectCard1}
          >
            <img src={img1} alt="card1image" />
            <div className="plan-info chosen">
              <b>Arcade</b>
              <span className="plan-priced">${prices[0]}{priceSuffix}</span>
              {props.isYearlyBilling && <p className="free">2 months free</p>}
            </div>
          </div>
          <div
            className={`plan-card ${props.selected === "Advanced" ? "selected" : ""}`}
            onClick={selectCard2}
          >
            <img src={img2} alt="card2image" />
            <div className="plan-info">
              <b>Advanced</b>
              <span className="plan-priced">${prices[1]}{priceSuffix}</span>
              {props.isYearlyBilling && <p className="free">2 months free</p>}
            </div>
          </div>
          <div
            className={`plan-card ${props.selected === "Pro" ? "selected" : ""}`}
            onClick={selectCard3}
          >
            <img src={img3} alt="card3image" />
            <div className="plan-info">
              <b>Pro</b>
              <span className="plan-priced">${prices[2]}{priceSuffix}</span>
              {props.isYearlyBilling && <p className="free">2 months free</p>}
            </div>
          </div>
          </div>
        <div className="switcher">
          <p className={`monthly ${!props.isYearlyBilling ? "sw-active" : ""}`}>
            Monthly
          </p>
          <label className="switch">
            <input
              type="checkbox"
              checked={props.isYearlyBilling}
              onChange={toggleBillingFrequency}
            />
            <span className="slider round"></span>
          </label>
          <p className={`yearly ${props.isYearlyBilling ? "sw-active" : ""}`}>Yearly</p>
        </div>
        <center><p className="error">{error}</p></center>
        <div className="btns">
          <button className="prev-stp" onClick={props.onPrev}>
            Go Back
          </button>
          <button className="next-stp" type="button" onClick={onNextPage} >
            Next Step
          </button>
        </div>
        </form>
      </div>
    );
  }
