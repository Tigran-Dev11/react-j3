import React from "react";
  import "./Sponsors.scss"
 import logo1 from "../../Assets/logo1.jpg"
 import logo2 from "../../Assets/logo2.png"
 import logo3 from "../../Assets/logo3.png"
 import logo4 from "../../Assets/logo4.png"
const Spomsors=()=>{
    return(
        <div className="Spomsors">
            <div className="logos">
                <img src={logo1} alt=""/>
                <img src={logo3} alt=""/>
                <div className="logos1">
                <img src={logo2} alt=""/>
                <img src={logo4} alt=""/>
                </div>
                
            </div>
        </div>
    )
}

export default Spomsors