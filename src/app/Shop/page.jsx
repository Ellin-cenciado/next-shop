"use client";
import ShopSelector from "@/components/webComponents/ShopSelector";
import UserShop from "@/components/webComponents/UserShop.jsx";
import { ShopContextProvider } from "@/context/ShopContext";

export default function Shop() {
  return (
    <div>
      <ShopContextProvider>
        <ShopSelector />
        <UserShop />
      </ShopContextProvider>
    </div>
  );
}
