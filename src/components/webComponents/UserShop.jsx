import { ItemContext } from "@/context/ItemContext";
import ItemComponent from "../shopComponents/ItemComponent";
import { useContext } from "react";

export default function UserShop() {
  const { itemList } = useContext(ItemContext);

  return (
    <div>
      {itemList.map((item) => (
        <ItemComponent item={item} key={item.itemId} />
      ))}
    </div>
  );
}
