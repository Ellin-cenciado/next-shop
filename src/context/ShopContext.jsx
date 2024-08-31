import { createContext, useState} from "react";

export const ShopContext = createContext();

export function ShopContextProvider(props) {
  const [currentShop, setCurrentShop] = useState("user");

  const updateShop = (shop) => {
    setCurrentShop(shop);
  }
  
  const deleteItem = (item) => {
    
  }

  return (
    <ShopContext.Provider value={{ currentShop, updateShop , deleteItem}}>
      {props.children}
    </ShopContext.Provider>
  );
}
