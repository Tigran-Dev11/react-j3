import {createContext, useState} from "react";
const GlobalContext = createContext({})
const GlobalProvider  = ({children})=>{
    const [title, setTitle] = useState('Title - 1')
    const array =[1,2,3];

    const [basketItems, setBasketItems] = useState([])
    console.log(basketItems);
    return <GlobalContext.Provider value={{array , title, setTitle,setBasketItems,basketItems}}>
       {children}
    </GlobalContext.Provider>
}
export {GlobalProvider, GlobalContext}