
import { ShopItem } from "../app/ShopList/shopItems";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";

type ItemCatalogItemProps = {
    currentItem: ShopItem;
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