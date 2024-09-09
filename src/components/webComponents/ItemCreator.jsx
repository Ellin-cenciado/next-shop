import { ItemContext } from "@/context/ItemContext";
import { ShopItem } from "@/app/ShopList/shopItems.js";
import { useContext, useState } from "react";

export default function ItemCreator() {
  const { createItem } = useContext(ItemContext);

  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newItem = new ShopItem(price, title, description)
    createItem(newItem);
    setTitle("");
    setDescription("");
    setPrice(0);
    const element = document.getElementById("title-input");
    element.focus();
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          id="title-input"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          id="description-input"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
        id="price-input"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
          }}
        ></input>
        <button>Add Item</button>
      </form>
    </div>
  );
}
