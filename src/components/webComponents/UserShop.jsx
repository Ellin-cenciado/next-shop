import { ItemContext, ItemContextProvider } from "@/context/ItemContext";
import { ShopContext } from "@/context/ShopContext";
import ItemComponent from "../shopComponents/ItemComponent";
import { useContext } from "react";
import ItemCreator from "@/components/webComponents/ItemCreator.jsx";

export default function UserShop() {
  const { itemList } = useContext(ItemContext);
  const { currentShop } = useContext(ShopContext);
  return (
    <div>
      {currentShop === "admin" && <ItemCreator />}
      {itemList.map((item) => (
        <ItemComponent item={item} key={item.itemId} />
      ))}
      
    </div>
  );
}
