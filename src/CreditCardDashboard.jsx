import React from 'react'
import { Typography } from "@mui/material";
import "./creditcard.css"
import logo from "./images/logo.png"
import chip from "./images/chip.png"
import { useRecoilValue } from 'recoil';
import { creditCardNumberSelector, expiryDateSelector } from "./store/selectors/RecoilSelectors";

const CreditCardDashboard = () => {

  return (
    <>
      <div className='dashboardStyles'>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" style={{ color: "#22168d", fontWeight: 'bold' }}>Credit Card</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="container">
            <header>
              <span className="logo">
                <img src={logo} alt="" />
                <h5>Master Card</h5>
              </span>
              <img src={chip} alt="" className="chip" />
            </header>
            <div className="card-details">
              <CardNumber />
              <ExpiryDate />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CardNumber() {
  const creditCardNumber = useRecoilValue(creditCardNumberSelector);

  return <div className="name-number">
    <h6>Card Number</h6>
    <h5 className="number">{creditCardNumber}</h5>
    <h5 className="name">Mahesh A</h5>
  </div>
}

function ExpiryDate() {
  const expiryDate = useRecoilValue(expiryDateSelector);

  return <div/*  className="valid-date" */>
    <h6>Valid Thru</h6>
    <h5>{expiryDate}</h5>
  </div>
}

export default CreditCardDashboard