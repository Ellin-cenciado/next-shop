import { ShopContext } from "@/context/ShopContext";
import { ItemContext } from "@/context/ItemContext";
import { useContext } from "react";

export default function ItemComponent({ item }) {
  const { currentShop } = useContext(ShopContext);
  const { removeItem } = useContext(ItemContext);
  return (
    <div className="bg-blue-300">
      <h1>{item._name}</h1>
      <h2>{item._price}</h2>
      <p>{item._description}</p>
      {currentShop === "admin" &&
          (
        <button className="bg-red-200 rounded-md" onClick={() => removeItem(item.itemId)}>
          Delete Id: {item.itemId}
        </button> 
      )}
    </div>
  );
}
