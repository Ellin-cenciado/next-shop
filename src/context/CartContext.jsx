import { createContext, useState } from "react";
import { ShopItem } from "@/app/ShopList/shopItems";
export const CartContext = createContext();

export function CartContextProvider(props){
    const [cartList,setCartList] = useState([]);
    const [cartTotalPrice,setCartTotalPrice] = useState(0);

    const addToCart = (item) => {
        setCartList([...cartList,item]);
        setCartTotalPrice(cartTotalPrice+=item.getPrice());
        console.log("Item added to cart");

    }

}