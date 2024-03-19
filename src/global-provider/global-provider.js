import { createContext, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  console.log(basketItems);

  return (
    <GlobalContext.Provider value={{ setBasketItems, basketItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
