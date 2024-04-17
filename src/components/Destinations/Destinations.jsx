import React from "react";
 import "./Destinations.scss"
 import srk from "../../assets/dastination.jpg"
 import { FaLocationArrow } from "react-icons/fa";
const Destinations=()=>{
    return(
        <div className="Destinations constainer section">
            <div className="secHeader">
            <span>Top Selling</span>
            <h2>Top Dastinations</h2 >
          </div>
          <div className="secContaner grind">
            <div className="singleCard grind">
                <div className="imgDiv">
                    <img src={srk} alt="dastination"className=""/>

                </div>
                <div className="infoDiv">
                  <div className="upperSpan flex" >
                    <span className="location">Reme, Italy</span>
                    <span className="amount">$5.43k</span>

                    </div> 
                    <div className="lowerSpan flex">
                        <FaLocationArrow className="icon"/>
                        <span className="distance">10 Days Trip</span>

                    </div>
                </div>
            </div>
          </div>

           

            
        </div>
    )
}

export default Destinations