import { createContext } from "react";
import itemClass from "@/app/ShopList/shopItems.js";
const ItemContext = createContext();

export const ItemContextProvider = ({ props }) => {


    return <ItemContext.Provider>{props.childen}</ItemContext.Provider>;
};
