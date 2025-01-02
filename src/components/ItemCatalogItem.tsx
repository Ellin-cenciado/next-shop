
import { ShopItem } from "../app/ShopList/shopItems";
import {ShopContext} from "../context/ShopContext";
import React,{ useContext } from "react";

type ItemCatalogItemProps = {
    currentItem: ShopItem;
    handleBuy: (item: ShopItem) => void;
}

export default function ItemCatalogItem({currentItem}: ItemCatalogItemProps){
    const { handleBuy } = useContext(ShopContext);
    
    return (
        <div>
            <title>{currentItem.getName()}</title>
            <h2>{currentItem.getDescription()}</h2>
            <h3>{currentItem.getPrice()}</h3>
            <button onClick={() => handleBuy(currentItem)}>Buy</button>
        </div>
    )
}