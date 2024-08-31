import itemList from "@/app/ShopList/shopItems.js";
import ItemComponent from "../shopComponents/ItemComponent";

export default function UserShop() {
  return (
    <div>
      {itemList.map((item) => (
        <ItemComponent item={item} key={item.itemId} />
      ))}
    </div>
  );
}
