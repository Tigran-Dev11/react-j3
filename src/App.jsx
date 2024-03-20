
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Router from "./routest/routest";

function App() {
  return (
    <div>
        <header>
         <NavLink to={ROUTES.basket}>Go basket</NavLink>
      </header>
     <Router/>
    </div>
  );
}

export default App;
