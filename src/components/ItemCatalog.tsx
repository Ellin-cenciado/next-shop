import { useContext } from "react";
import { ShopItem } from "../app/ShopList/shopItems";
import { ShopProvider , ShopContext } from "../context/ShopContext";
import ItemCatalogItem from "./ItemCatalogItem";

type ItemCatalogProps = {
  itemProps: ShopItem[];
};

export default function ItemCatalog({ itemProps }: ItemCatalogProps) {
  const handleBuy = useContext(ShopContext).handleBuy;
  return (
    <div>
      <ShopProvider>
        {itemProps.map((item) => (
          <ItemCatalogItem currentItem={item} key={item.getId()} handleBuy={handleBuy} />
        ))}
      </ShopProvider>
    </div>
  );
}
