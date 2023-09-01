import React from "react";

export default function SideBar(props) {
  const goToStep = (step) => {
    props.onStepChange(step);
  };
  
  function step1(){
   goToStep(1)
  }
  function step2(){
    goToStep(2)
   }
   function step3(){
    goToStep(3)
   }
   function step4(){
    goToStep(4)
   }

  return (
    <div className="form-sidebar">
      <div
        className={`step ${props.currentStep === 1 ? "active" : ""}`}
        onClick={step1}
      >
        <div className="circle">1</div>
        <div className="step-content">
          <span>Step 1</span>
          <b>Your info</b>
        </div>
      </div>
      <div
        className={`step ${props.currentStep === 2 ? "active" : ""}`}
        onClick={step2}
      >
        <div className="circle">2</div>
        <div className="step-content">
          <span>Step 2</span>
          <b>Select plan</b>
        </div>
      </div>
      <div
        className={`step ${props.currentStep === 3 ? "active" : ""}`}
        onClick={step3}
      >
        <div className="circle">3</div>
        <div className="step-content">
          <span>Step 3</span>
          <b>Add-ons</b>
        </div>
      </div>
      <div
        className={`step ${props.currentStep === 4 ? "active" : ""}`}
        onClick={step4}
      >
        <div className="circle">4</div>
        <div className="step-content">
          <span>Step 4</span>
          <b>Summary</b>
        </div>
      </div>
    </div>
  );
}
