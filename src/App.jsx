
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <div>
        <header>
         <NavLink to={ROUTES.basket}>Go basket</NavLink>
      </header>
     
    </div>
  );
}

export default App;
