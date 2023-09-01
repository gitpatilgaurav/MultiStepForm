import React, { useState, useEffect } from "react";
import "./StepOne.css";

export default function StepOne(props) {
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [contactErr, setContactErr] = useState("");

  const getName = (event) => {
    const name = event.target.value;
    props.setFormData({ ...props.formData, name });

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name) || name === "") {
      setNameErr("Name can only contain alphabets and spaces");
    } else {
      setNameErr("");
    }
  };

  const getEmail = (event) => {
    const email = event.target.value;
    props.setFormData({ ...props.formData, email });

    if (email === "") {
      setEmailErr("Enter Email Address");
    } else {
      setEmailErr("");
    }
  };

  const getContact = (event) => {
    const contact = event.target.value;
    props.setFormData({ ...props.formData, contact });

    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact) || contact.length < 10) {
      setContactErr("Contact number must be a 10-digit number");
    } else {
      setContactErr("");
    }
  };

  const onNextClick = () => {
  const namePattern = /^[A-Za-z\s]+$/;
  const contactPattern = /^\d{10}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!props.formData.name && !props.formData.email && !props.formData.contact) {
    setNameErr("Name is required");
    setEmailErr("Email is required");
    setContactErr("Contact number is required");
  } else {
    setNameErr("");
    setEmailErr("");
    setContactErr("");

    if (!namePattern.test(props.formData.name) || props.formData.name === null) {
      setNameErr("Name can only contain alphabets and spaces");
    } else if (!emailPattern.test(props.formData.email) || props.formData.email === null) {
      setEmailErr("Invalid email address");
    } else if (!contactPattern.test(props.formData.contact) || props.formData.contact.length ===null) {
      setContactErr("Contact number must be a 10-digit number");
    }

    if (!nameErr && !emailErr && !contactErr) {
      props.onNext();
    }
  }
};

  

  return (
    <div className="stp step1">
      <div className="header">
        <h1 className="title">Personal info</h1>
        <p className="exp">Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <div className="label">
          <label htmlFor="name">Name</label>
          <p className="error">{nameErr}</p>
        </div>
        <input
          type="text"
          id="name"
          placeholder="e.g. John Smith Doe"
          value={props.formData.name}
          onChange={getName}
          required
        />
        <div className="label">
          <label htmlFor="email">Email Address</label>
          <p className="error">{emailErr}</p>
        </div>
        <input
          type="email"
          required
          id="email"
          placeholder="e.g. John.doe@gmail.com"
          onChange={getEmail}
          value={props.formData.email}
        />
        <div className="label">
          <label htmlFor="phone">Phone Number</label>
          <p className="error">{contactErr}</p>
        </div>
        <input
          type="text"
          inputMode="numeric"
          required
          pattern="\d*"
          id="phone"
          placeholder="e.g. 1234567890"
          onChange={getContact}
          value={props.formData.contact}
        />
        <div className="error-message">
        </div>
        <div className="btns">
          <button type="button" className="next-stp onestep" onClick={onNextClick}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}