import React from "react";
 import "./Footer.scss"
 import { AiFillInstagram, } from "react-icons/ai";
 import { AiFillTwitterCircle } from "react-icons/ai";
 import {BsYoutube,} from "react-icons/bs";
 import {BiLogoFacebookCircle} from "react-icons/bi";
 import asd1 from "../../assets/app.png";
 import asd2 from "../../assets/appe.png";
const Footer=()=>{
    return(
        <div className="Footer contaner">
            <div className="secContaner grind">
                <div className="singlSection">
                    <h2>Yago</h2>
                    <p>Book your trip in minute, 
                         grt full Control for much longer.</p>     
                </div>
                <div className="singleSection">
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Support</li>
                </div>
                <div className="singleSection">
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Support</li>
                </div>
                <div className="singleSection">
                    <h3>More</h3>
                    <li>Guidlines</li>
                    <li>Insurance</li>
                    <li>Hotels</li>
                </div> 
              <div className="singleSection">
                  <div className="socials flex" >
                    <AiFillInstagram className="icon"/> 
                 <BiLogoFacebookCircle className="icon"/> 
               <AiFillTwitterCircle className="icon"/> 
                    <BsYoutube className="icon"/>  
                     </div> 
                     <span className="text">Discover our app</span> 
                     <span className="flex">
                     <img src={asd1 }alt="" className="box"/>
                     <img src={asd2} alt="" className="box"/>
                     </span>
               </div> 

             </div> 
            

        </div>
    )
}

export default Footer