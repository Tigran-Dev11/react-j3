import { useState } from "react"
// import {HiMenuAlt3} from "react-icons/hi";
 import {MdCilose} from "react-icons/md";
import {TbGridDots} from "react-icons/tb";


const Navbar=()=>{
    const [dropdown, setDropdown]= useState(false);
    const showDropdown = ()=>{
        showDropdown(!dropdown);
    }

    return(
       <nav>
      <div>
        <div>
                <div>
                    <span>GOTO</span>
                    <h1>EGYPT.</h1>
                 </div>
                 <ul>
                     <a href="">Home</a>
                     <a href="">Explore</a>
                     <a href="">Articles</a>
                     <a href="">Galries</a>
                     <a href="">Contact</a>
                 </ul>
                 <div>
                 { <TbGridDots/> }
                </div>
                 {dropdown ?(
                     <div >
                        <MdCilose/>
                          </div>
                  ):""} 
             </div>  
             {dropdown ?(
                <div onClick={showDropdown}>
                    <div>
                    <ul>
                     <a href="">Home</a>
                     <a href="">Explore</a>
                     <a href="">Articles</a>
                     <a href="">Galries</a>
                     <a href="">Contact</a>
                 </ul>  
                    </div>
                    </div>
             ):nall}
         </div>  
      </nav> 
     
    )
    
} 
export default Navbar