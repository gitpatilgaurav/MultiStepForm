import React, { useState} from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepFour from "./components/StepFour";
import StepThree from "./components/StepThree";
import ThankYou from "./components/ThankYou";

export default function App() {
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [addon, setAddon] = useState({
    online: false,

    large: false,

    customize: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selected, setSelected] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [onlineAddonName, setOnlineAddonName] = useState("");
  const [largeAddonName, setLargeAddonName] = useState("");
  const [customizeAddonName, setCustomizeAddonName] = useState("");
  const [onlineAddonValue, setOnlineAddon] = useState("");
  const [largeAddonValue, setLargeAddon] = useState("");
  const [customizeAddonValue, setCustomizeAddon] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    planPrice: "",
    planName: "",
    onlineAddon: "",
    largeAddon: "",
    customizeAddon: "",
  });
 

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
 

  return (
    <div className="form">
      <div className="form-container">
        <SideBar currentStep={currentStep} onStepChange={setCurrentStep} />
        {currentStep === 1 && (
          <StepOne
            onNext={handleNextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            formData={formData}
            setFormData={setFormData}
            isYearlyBilling={isYearlyBilling}
            setIsYearlyBilling={setIsYearlyBilling}
            selected={selected}
            planPrice={planPrice}
            setPlanPrice={setPlanPrice}
            setSelected={setSelected}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            isYearlyBilling={isYearlyBilling}
            setIsYearlyBilling={setIsYearlyBilling}
            formData={formData}
            addon={addon}
            setAddon={setAddon}
            setFormData={setFormData}
            onlineAddon={onlineAddonValue}
            setOnlineAddon={setOnlineAddon}
            largeAddon={largeAddonValue}
            setLargeAddon={setLargeAddon}
            customizeAddon={customizeAddonValue}
            setCustomizeAddon={setCustomizeAddon}
            onlineAddonName={onlineAddonName}
            largeAddonName={largeAddonName}
            customizeAddonName={customizeAddonName}
            setOnlineAddonName={setOnlineAddonName}
            setLargeAddonName={setLargeAddonName}
            setCustomizeAddonName={setCustomizeAddonName}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onStepChange={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
            selected={selected}
            isYearlyBilling={isYearlyBilling}
            onlineAddon={onlineAddonValue}
            largeAddon={largeAddonValue}
            customizeAddon={customizeAddonValue}
            planPrice={planPrice}
            onlineAddonName={onlineAddonName}
            largeAddonName={largeAddonName}
            customizeAddonName={customizeAddonName}
          />
        )}
        {currentStep === 5 && <ThankYou />}
      </div>
    </div>
  );
}
