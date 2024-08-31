import { createContext, useEffect, useState } from "react";
import {itemList as data} from "@/app/ShopList/shopItems.js"
export const ItemContext = createContext();

export function ItemContextProvider(props) {
  const [itemList, setItemList] = useState([]);

  const createItem = (item) => {
    item.itemId = [...itemList].length;
    setItemList([...itemList, item]);
    //!To fix, if i delete one item, and add another it makes two childs with the same key error
    //!Doesnt add the item to the page
  };

  const removeItem = (itemId) => {
    setItemList([...itemList].filter((item) => itemId != item.itemId));
  };

  useEffect(() => {
    setItemList(data);
  },[]);

  return (
    <ItemContext.Provider value={{ itemList, createItem, removeItem }}>
      {props.children}
    </ItemContext.Provider>
  );
}
