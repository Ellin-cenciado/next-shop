import { ShopItem } from "../app/ShopList/shopItems";
import ItemCatalog from "./ItemCatalog";


export default function Catalog(){

    let item1 = new ShopItem(2000,'Item1','Item1Desc');
    let item2 = new ShopItem(3450,'Item2','Item2Desc');
    let itemList = [item1,item2];

    return (
        <ItemCatalog itemProps={itemList}/>
    )
}