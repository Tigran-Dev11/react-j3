import React from "react";
// import "./App.css"
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Destinations from "./components/Destinations/Destinations";
import Guide from "./components/Guide/Guide";
import Spomsors from "./components/Sponsors/Spomsors";
import Footer from "./components/Footer/Footer";



function App() {
  return(
    <div>
      
      <Header/>
       <Home/>
      <Categories/>
     <Destinations/>
       <Guide/>
    <Spomsors/>
      <Footer/> 
    </div>
  )
}

export default App;



