import React from 'react'
import './ThankYou.css'
import img1 from './assets/images/icon-thank-you.svg'

export default function ThankYou() {
  return (
    <div className="stp step-5">
    <img src={img1} alt="" />
    <div className="header">
      <h1 className="title">Thank you!</h1>
      <p className="exp">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to
        email us at support@loremgaming.com.
      </p>
    </div>
    <button className="next-stp"></button>
  </div>
  )
}
