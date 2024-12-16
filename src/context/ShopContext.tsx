'use client'
import { createContext, ReactNode, useContext } from "react";
import { ShopItem } from "../app/ShopList/shopItems";

//Context contains functions

type ShopContextType = {
  handleBuy: (item: ShopItem) => void;
};
//Create the context
const ShopContext = createContext<ShopContextType | undefined>(undefined);

//Context Provider

type ShopProviderProps = {
  children: ReactNode;
};

export const ShopProvider = ({children} : ShopProviderProps) => {
    const handleBuy = (item: ShopItem) => {
        console.log(`Added item ${item.getName()}`);
        //TODO: Implement logic to add a cart
    }

    return (
        <ShopContext.Provider value={{handleBuy}}>
            {children}
        </ShopContext.Provider>
    )

}
/* export const useShop = () =>{
    const context = useContext(ShopContext);
    if(!context){
        throw new Error("useShop must be used within a shopProvider");
    };
    return context;
} */

export default ShopContext;
