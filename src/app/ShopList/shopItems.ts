export class ShopItem{
    
    //Declare constructor stuff
    private itemId:number;
    private _price:number;
    private _description:string;
    private _name: string;
    private static ItemCounter = 0;

    constructor(price: number,name: string,description:string){
        this.itemId = ShopItem.ItemCounter++;
        this._price = price;
        this._name = name;
        this._description = description;
    }
    getPrice(){
        return this._price;
    }
    setPrice(value){
        this._price = value;
    }
    getName(){
        return this._name;
    }
    setName(value){
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