import itemClass from "@/app/ShopList/shopItems.js";
import ItemComponent from "../shopComponents/ItemComponent";

export default function UserShop() {
  const item1 = new itemClass(3000, "item1", "description1");
  const item2 = new itemClass(2000, "item3", "description3");
  const itemList = [item1,item2];

  return (
    <div>
      {itemList.map((item) => (
        <ItemComponent item={item} key={item.itemId} />
      ))}
    </div>
  );
}
