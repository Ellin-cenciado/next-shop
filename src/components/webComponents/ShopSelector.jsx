"use client";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

export default function ShopSelector() {
  const {updateShop} = useContext(ShopContext);
  
  function handleSelect(e) { 
    updateShop(e.target.value);
  }

  return (
    <select onChange={handleSelect} id="admin-selector">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  );
}
