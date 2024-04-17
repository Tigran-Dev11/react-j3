import React from "react";
import "./Sponsors.scss";
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

const Spomsors = () => {
  return (
    <div className="Spomsors">
      <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo3} alt="" />
      </div>
      <div className="logos">
        <img src={logo2} alt="" />
        <img src={logo4} alt="" />
      </div>
    </div>
  );
};

export default Spomsors;
