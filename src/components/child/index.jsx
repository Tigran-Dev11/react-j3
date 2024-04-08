/* eslint-disable react/prop-types */

import { memo } from "react";

const Child = ({ chidNumber, setChildNumber, todos }) => {
  console.log("render child");

  const changeNumber = () => {
    setChildNumber(Math.random());
  };

  console.log("chid render");
  return (
    <div>
      <button onClick={changeNumber}>change children number</button>
      <h1>ChildrenNumber - {chidNumber}</h1>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h1>{String(item.status)}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Child);
