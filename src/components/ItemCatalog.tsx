import { ShopItem } from "../app/ShopList/shopItems"
import ItemCatalogItem from "./ItemCatalogItem"

type ItemCatalogProps = {
    itemProps: ShopItem[];
};

export default function ItemCatalog({itemProps} : ItemCatalogProps){
    return (
        <div>
            {itemProps.map((item) => (
                <ItemCatalogItem currentItem={item} key={item.getId()} />
            ))}
        </div>
    )
}