import { useRef } from "react";

const ContactUs = () => {
  const searchRef = useRef();

  const coutRef = useRef(0);

  const focusInput = () => {
    searchRef.current.focus();
    console.log(coutRef.current);
  };


  console.log(coutRef.current);

  return (
    <div>
      <input type="text" value="hello" id="search-input" ref={searchRef} />
      <button onClick={focusInput}>focus input</button>

      <button onClick={() => coutRef.current--}>-</button>
      <button onClick={() => coutRef.current++}>+</button>
    </div>
  );
};

export default ContactUs;
