import React from 'react'
import calculatorLogo from "../../../../src/assets/investment-calculator-logo.png";
const Header = () => {
  return (
   <header id="header">
    <img src={calculatorLogo}>
    </img>
    <h1>Investment calculator</h1>
   </header>
  )
}

export default Header