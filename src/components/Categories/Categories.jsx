import React from "react";
 import "./Categories.scss";
import sateligh from "../../assets/sateligh.jpg";
import rek from "../../assets/rec.jpg";
import rex from "../../assets/rev.png"
const Categories=()=>{
    return(
        <div className="Categories contaner section">
        <div className="secHeader">
            <span>Category</span>
            <h2>
                wo offer best services
            </h2>
        </div>
        <div className="secContaner grid">
        <div className="singleCard grid">
            <div className="imgDev">
                <img src={sateligh} alt=""className="mainImagr"/>
                <span>Calculated Weather</span>
            <p>bulit Wicket longer admire do borton vanity 
                itsels do in it.
            </p>
                 <img src={rek}alt=""className="design"/> 
                 <span>Calculated Weather</span>
            <p>bulit Wicket longer admire do borton vanity 
                itsels do in it.
            </p>
            <img src={rex}alt="" className="desig"/>
            <span>Calculated Weather</span>
            <p>bulit Wicket longer admire do borton vanity 
                itsels do in it.
            </p>
            </div>
              </div> 
                 </div>
        </div>
    )
}

export default Categories