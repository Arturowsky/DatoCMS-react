import React, { useContext, useEffect, useState } from "react";

import "../scss/settings.scss";
import "../scss/index.scss";
import telefon from "../assets/telefon.svg"

const Hero = () => {

    return (<div className="hero">
    <div className="intro-name">
      <h1 className="my-name">
        artur<span>lewandowicz</span>
      </h1>
      <p>Freelance front end developer 👋</p>
    </div>
    <div>
      <img src={telefon} alt="tel" />
    </div>
  </div>)
}
export default Hero;