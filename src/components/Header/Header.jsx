import React from "react";
 import "./Header.css"
 import { AiFillCloseCircle } from "react-icons/ai";
 
 import { TbGridDots } from "react-icons/tb";
const Header=()=>{
  `const  [active,setActive] = useState("menu");
  const showNavBar = ()=>{
    setActive("menu showMenu");
  }; 
 const removsShowNavBar=()=>{
    setActive"menu") 
  }
  const[transparent,setTransparent]=useState("Navbar");
  const addBg=()=>{
    if(window.scrollY>=10)
    setTransparent("Navbar activeHeader")
  }
  }
  `
return (
        <div className="Navbar">
     <div className="logoDiv">
            <h2 className="logo">Yago</h2>
                </div>
                 <div className="active">
              <div className="list">
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
              <div className="closeIcon" >
                <AiFillCloseCircle className="icom"/>
              </div>
            </div>
            <div className="teggleIcon" >
                <TbGridDots className="icon"/>
            </div>
        </div>
       
    )
}

export default Header
// onClick={removsShowNavBar}onClick={ShowNavBar}