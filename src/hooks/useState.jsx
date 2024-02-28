import { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState({count: 0});
  // const [name , setName]= useState(null)

  const increment = () => {

    setNumber((prevState)=> {
        return {count: prevState.count + 1};
    } )

    console.log(number.count);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      USE state
      <br />
      {number.count}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseState;
