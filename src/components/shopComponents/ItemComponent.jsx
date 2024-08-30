import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";

export default function ItemComponent({ item }) {
  const { currentShop , deleteItem} = useContext(ShopContext);

  return (
    <div className="bg-blue-300">
      <h1>{item._name}</h1>
      <h2>{item._price}</h2>
      <p>{item._description}</p>
      {currentShop === "admin" && (
        <button className="bg-red-200 rounded-md" onClick={deleteItem}>Delete</button>
      )}
    </div>
  );
}