import React from "react";
import "./Guide.scss"
import ren from "../../assets/iconss.png"
import renn from "../../assets/iconsss.png"
import rennn from "../../assets/iconssss.png"
import rem from "../../assets/toee.jpg"
const Guide=()=>{
    return(
        <div className="Guide contaner section">
            <div className="SecContaner flex">
                <div className="rextDiv grid">
                    <div className="secHeader">
                        <span>Easy and Fast</span>
                        <h2>Book Your Naxt Trip</h2>
                    </div>
                    <div className="secContant grind">
                        <div className="singleSection flex">
                              
                            
                            <img src={ren}alt="" className="iconn"/>
                            <div className="text">
                                <span>Make a choice</span>
                                <p>Loren ipsum dolor sit amet consectetur adipisicing elit.</p>
                         
                       </div>
                    
                 </div> 
                 <div className="secContant grind">
                        <div className="singleSection flex">
                              
                            
                            <img src={renn}alt="" className="iconn"/>
                            <div className="text">
                                <span>Make a choice</span>
                                <p>Loren ipsum dolor sit amet consectetur adipisicing elit.</p>
                         
                       </div>
                    
                 </div> 
                  <div className="secContant grind">
                        <div className="singleSection flex">
                              
                            
                            <img src={rennn}alt="" className="iconn"/>
                            <div className="text">
                                <span>Make a choice</span>
                                <p>Loren ipsum dolor sit amet consectetur adipisicing elit.</p>
                         
                       </div>
                    
             
                       </div>
            </div>
        </div>
                       </div>

        </div>
        <div className="imgDiv">
         <img src={rem}/>
        </div>
            </div>
        </div>
    )
}

export default Guide