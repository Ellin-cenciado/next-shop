export default class ShopItem{
    static ItemCounter = 0;
    constructor(price,name,description){
        this.itemId = ShopItem.ItemCounter++;
        this._price = price;
        this._name = name;
        this._description = description;
    }
    get price(){
        return this._price;
    }
    set price(value){
        this.price = value;
    }
    getName(){
        return this.name;
    }
    set name(value){
        this._name = value;
    }
    getDescription(){
        return this._description;
    }
    setDescription(value){
        this._description = value;
    }
    getId(){
        return this.itemId;
    }
}
