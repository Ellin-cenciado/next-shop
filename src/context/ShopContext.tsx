'use client'
import React, { createContext,ReactNode } from "react";
import { ShopItem } from "../app/ShopList/shopItems";

//Context contains functions

type ShopContextType = {
  handleBuy: (item: ShopItem) => void;
};
//Create the context
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

//Context Provider

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider = ({ children }: ShopProviderProps) => {

  const handleBuy = (item: ShopItem) => {
    console.log(`Added item ${item.getName()}`);
  };

  return (
    <ShopContext.Provider value={{ handleBuy }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;

/* export const useShop = () =>{
    const context = useContext(ShopContext);
    if(!context){
        throw new Error("useShop must be used within a shopProvider");
    };
    return context;
} */
