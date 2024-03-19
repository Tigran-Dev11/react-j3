const array =[1,2,3];
const [basketItems, setBasketItems] = useState([])

console.log(basketItems);


return <GlobalContext.Provider value={{array , title, setTitle,setBasketItems,basketItems}}> {children}
</GlobalContext.Provider>