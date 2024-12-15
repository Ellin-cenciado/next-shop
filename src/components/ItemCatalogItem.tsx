import { ShopItem } from "../app/ShopList/shopItems";

type ItemCatalogItemProps = {
    currentItem: ShopItem;
}

export default function ItemCatalogItem({currentItem}: ItemCatalogItemProps){
    return (
        <div>
            <title>{currentItem.getName()}</title>
            <h2>{currentItem.getDescription()}</h2>
            <h3>{currentItem.getPrice()}</h3>
        </div>
    )
}