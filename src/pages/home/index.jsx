import { useState } from "react";
import {Link , NavLink} from 'react-router-dom'
import { ROUTES } from "../../utils/constants";

const Home = ({value ,alertText}) => {
  let initialValue = 0;

  const [number, setNumber] = useState(value);

 // alertText()

  return (
    <div>
      {number}
      <button
        onClick={() => {
          setNumber((prev)=> prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>

      <NavLink to={ROUTES.product}>Product</NavLink>
         <br /> <br />
      <NavLink to={ROUTES.aboutAs}>About us</NavLink>
      <br /> <br />
      <NavLink to={ROUTES.contactUs}>contactUs</NavLink>
    </div>
  );
};

export default Home;
