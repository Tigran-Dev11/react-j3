import { useRef } from "react";
import { useGlobalContext } from "../../hooks/use-global-context";

const ContactUs = () => {
  const { title } = useGlobalContext();

  const searchRef = useRef();

  const coutRef = useRef(0);

  const focusInput = () => {
    searchRef.current.focus();
    console.log(coutRef.current);
  };

  console.log(coutRef.current);

  return (
    <div>
      <h2>{title}</h2>
      <input type="text" value="hello" id="search-input" ref={searchRef} />
      <button onClick={focusInput}>focus input</button>

      <button onClick={() => coutRef.current--}>-</button>
      <button onClick={() => coutRef.current++}>+</button>
    </div>
  );
};

export default ContactUs;
