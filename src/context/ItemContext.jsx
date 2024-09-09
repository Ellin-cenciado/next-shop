import { createContext, useEffect, useState } from "react";
import {itemList as data} from "@/app/ShopList/shopItems.js"
export const ItemContext = createContext();

export function ItemContextProvider(props) {
  const [itemList, setItemList] = useState([]);

  const createItem = (item) => {
    setItemList([...itemList, item]);
    console.log("item created: \n", item);
    console.log("itemList: \n", itemList);
  };

  const removeItem = (itemId) => {
    setItemList([...itemList].filter((item) => itemId != item.itemId));
  };

  useEffect(() => {
    setItemList(data);
  }, []);

  return (
    <ItemContext.Provider value={{ itemList, createItem, removeItem }}>
      {props.children}
    </ItemContext.Provider>
  );
}
