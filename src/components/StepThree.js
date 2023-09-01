import React, { useState } from "react";
import "./StepThree.css";

export default function StepThree(props) {
  const monthAddon = [1, 2, 2];
  const yearAddon = [10, 20, 20];
  const priceSuffix = props.isYearlyBilling ? "/yr" : "/mo";
  const addonPrices = props.isYearlyBilling ? yearAddon : monthAddon;

  function onlineChange(e) {
    props.setOnlineAddonName("Online service");
    const isChecked = e.target.checked;
    const onlineAddonValue = isChecked ? parseInt(e.target.value) : 0;
    props.setOnlineAddon(onlineAddonValue);
    props.setFormData((prevData) => ({
      ...prevData,
      onlineAddon: onlineAddonValue,
    }));
  }

  function largeChange(e) {
    props.setLargeAddonName("Large storage");
    const isChecked = e.target.checked;
    const largeAddonValue = isChecked ? parseInt(e.target.value) : 0;
    props.setLargeAddon(largeAddonValue);
    props.setFormData((prevData) => ({
      ...prevData,
      largeAddon: largeAddonValue,
    }));
  }

  function customizeChange(e) {
    props.setCustomizeAddonName("Customize Profile");
    const isChecked = e.target.checked;
    const customizeAddonValue = isChecked ? parseInt(e.target.value) : 0;
    props.setCustomizeAddon(customizeAddonValue);
    props.setFormData((prevData) => ({
      ...prevData,
      customizeAddon: customizeAddonValue,
    }));
  }

  return (
    <div className="stp step3">
      <div className="header">
        <h1 className="title">Pick add-ons</h1>
        <p className="exp">Add-ons help enhance your gaming experience.</p>
      </div>
      <form>
        <div className={`box ${props.onlineAddon>0 ? "selected" : ""}`}>
          <input
            type="checkbox"
            id="online"
            value={addonPrices[0]}
            checked={props.onlineAddon > 0}
            onChange={onlineChange}
          />
          <div className="description">
            <label htmlFor="online">Online service</label>
            <small>Access to multiplayer games</small>
          </div>
          <p className="price">
            +${addonPrices[0]}
            {priceSuffix}
          </p>
        </div>
        <div className={`box ${ props.largeAddon>0? "selected" : ""}`}>
          <input
            type="checkbox"
            id="larger"
            value={addonPrices[1]}
            checked={props.largeAddon > 0}
            onChange={largeChange}
          />
          <div className="description">
            <label htmlFor="larger">Larger storage</label>
            <small>Extra 1TB of cloud save</small>
          </div>
          <p className="price">
            +${addonPrices[1]}
            {priceSuffix}
          </p>
        </div>
        <div className={`box ${props.customizeAddon ? "selected" : ""}`}>
          <input
            type="checkbox"
            id="profile"
            value={addonPrices[2]}
            checked={props.customizeAddon > 0}
            onChange={customizeChange}
          />
          <div className="description">
            <label htmlFor="profile">Customizable Profile</label>
            <small>Custom theme on your profile</small>
          </div>
          <p className="price">
            +${addonPrices[2]}
            {priceSuffix}
          </p>
        </div>
      </form>
      <div className="btns">
        <button className="prev-stp" type="button" onClick={props.onPrev}>
          Go Back
        </button>
        <button className="next-stp" type="submit" onClick={props.onNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}
