import React from "react";
 import "./Home.scss"
 import aeropians from "../../assets/plane.jpg"
 import mainImage from "../../assets/main.jpg"
import {FaPlay} from "react-icons/fa"
const Home=()=>{
    return(
        <div className="Home contaner section">
            <div className="textDiv">
                <span className="redText">Best Destinstions around the
                world</span>
                <h2>Travel, enjoy and live a new and full lifr </h2>
                <p>buile wicket langer admire do barton vanity iself do in it.
                    Preferred to sportsmen it engrossed listening. park gate sell
                    they went hard for 
                    the season. </p>
                   <div className="buttons flrx">
                   <button className="btn">Find more</button>
                   <div className="playBtn flex">
                    <FaPlay className="icon"/>
                    <span>Play Demo</span>
                   </div>
                   </div>
            </div>
       
        <div className="imgDiv flex">
        <img src={mainImage}alt="MainImage"/>
        </div>
        <img src={aeropians}alt="aeropians Imge"className="aeropians"/>
         </div>
    )
}

export default Home