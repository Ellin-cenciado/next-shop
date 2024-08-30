"use client";
import ShopSelector from "@/components/webComponents/ShopSelector.jsx";
import Link from "next/link";
import { ShopContextProvider } from "@/context/ShopContext";

export default function NavBar() {
  return (
    <nav className="bg-red-200 flex-auto">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}
