import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AddtocartService {
cartItemListChanged = new Subject<Product[]>();
private cartItemList : Product[] = [];
private totalPrice   : number = 0;
getTotalPrice(){
    this.totalPrice = 0;
    for(var i=0; i < this.cartItemList.slice().length; i++){
        this.totalPrice += Number(this.cartItemList[i].price);
    }
}

getCartItem(){
    return this.cartItemList.slice();
}

addToCart(item: Product){
    this.cartItemList.push(item);
    this.getTotalPrice();
    console.log(this.totalPrice);
    this.cartItemListChanged.next(this.cartItemList.slice());
}

/** Remove cart Item **/
removeCartItem(item){
    let index = this.cartItemList.indexOf(item);
      if(index > -1) {
        this.cartItemList.splice(index,1);
      }
      this.cartItemListChanged.next(this.cartItemList.slice());
    } 
    

}