import Catalog from "../../components/Catalog";
import { ShopProvider } from "../../context/ShopContext";

export default function Shop() {
  return (
    <div>
      <ShopProvider>
        <Catalog />
      </ShopProvider>
    </div>
  );
}
