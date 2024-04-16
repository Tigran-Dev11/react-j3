
import React, {useState} from "react";
import "./Header.scss"
 import { AiFillCloseCircle } from "react-icons/ai";
 
 import { TbGridDots } from "react-icons/tb";
const Header=()=>{
 const [active,setActive] = useState("menu");
 const showNavbar=()=>{
  setActive("menu showMenu")
 }
  const remeveShoWNavbar=()=>{
    setActive("menu")
  }
  const[transparent,setTransparent]=useState("Navbar")
  const addBg=()=>{
    if (window.scrollY>=10){
      setTransparent("Navbar activeHeader")
    }else{
      setTransparent("Navbar")
    }
  }
  window.addEventListener("scroll",addBg)
return (
        <div className={transparent}>
     <div className="logoDiv">
             <h2 className="logo">Yago</h2> 
                </div>
                 <div className={active}>
              <div className="list flex">
                <li>
                    <a href="">Destinations</a>
                </li>
                <li>
                    <a href="">Hotels</a>
                </li>
              <li>
                    <a href="">Flights</a>
                </li>
                <li>
                    <a href="">Bookings</a>
                </li>
                </div>
                <div className="btn-flex">
                <button className="btn">Login</button>
                
                <button className="btn">signUp</button>
               <select className="lang">
                  <option value="">EN</option>
                  <option value="">FR</option>
                  <option value="">SP</option>
                </select>
              </div> 
              <div className="closeIcon"onClick= {remeveShoWNavbar} >
                <AiFillCloseCircle className="icom"/>
              </div>
            </div>
            <div className="teggleIcon" onClick={showNavbar}>
                <TbGridDots className="icon"/>
            </div>
        </div>
       
    )
}

export default Header
// 