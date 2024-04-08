import { useCallback, useMemo, useState } from "react";
import Child from "./components/child";

function App() {
  const [chidNumber, setChildNumber] = useState(0);
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState(false);

  const changeChildren = useCallback((number) => setChildNumber(number), []);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const todos = useMemo(
    () => [
      {
        id: 1,
        name: "React",
        status: status
      }
    ],
    [status]
  );

  console.log("parent render");

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <Child
        chidNumber={chidNumber}
        setChildNumber={changeChildren}
        todos={todos}
      />
      <button onClick={changeNumber}>change Number</button>
      <h1>Number is : {number}</h1>
      <button onClick={changeStatus}>change Status</button>
    </div>
  );
}

export default App;
