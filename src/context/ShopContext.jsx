import { createContext, useState} from "react";

export const ShopContext = createContext();

export function ShopContextProvider(props) {
  const [currentShop, setCurrentShop] = useState("user");

  const updateShop = (shop) => {
    setCurrentShop(shop);
  }

  return (
    <ShopContext.Provider value={{ currentShop, updateShop}}>
      {props.children}
    </ShopContext.Provider>
  );
}
