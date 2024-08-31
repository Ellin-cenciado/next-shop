"use client";
import ShopSelector from "@/components/webComponents/ShopSelector";
import UserShop from "@/components/webComponents/UserShop.jsx";
import { ShopContextProvider } from "@/context/ShopContext";
import { ItemContextProvider } from "@/context/ItemContext";

export default function Shop() {
  return (
    <div>
      <ShopContextProvider>
        <ShopSelector />
        <ItemContextProvider>
          <UserShop />
        </ItemContextProvider>
      </ShopContextProvider>
    </div>
  );
}
