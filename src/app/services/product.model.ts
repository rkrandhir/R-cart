export class Product{
    public id: number;
    public name: string;
    public price: number;
    public size: any;
    public qty: number;
    public getQty: number;
    public totalPrice: number;
    public imagePath: string;

constructor(
    id: number,name: string,price: number,size: any,qty: number, getQty: number,totalPrice: number,imagePath: string
    )
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
        this.qty = qty;
        this.getQty = getQty;
        this.totalPrice = totalPrice;
        this.imagePath = imagePath;
    }
}