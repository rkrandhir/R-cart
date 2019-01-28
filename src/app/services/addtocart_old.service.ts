import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  public dummyValue : boolean = false;
  dummyValueUpdate : Subject<boolean> = new Subject<boolean>();
  public cartItemList:any = [];
  public totalPrice : number = 0;
  isSidebarVisible: boolean = true;
  shopCartItemUpdate: Subject<any> = new Subject<any>();
  sidebarVisibilityChange: Subject<number> = new Subject<number>();


  constructor() { 
    this.sidebarVisibilityChange.subscribe((value) => {
      this.totalPrice = value
    });
    //this.dummyValueUpdate.subscribe(value => this.dummyValue = value);
  }


  updateShopCartItem() {
    this.shopCartItemUpdate.next(this.cartItemList);
    console.log("service");
    console.log(this.cartItemList);
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange.next(this.totalPrice);
  }

addCartItem(item) {
  // check id only if product already exists
  //var index = this.cartItemList.findIndex(alreadyListedItem => alreadyListedItem.id === item.id);
  let index = this.cartItemList.indexOf(item);
  if (index < 0) { // if no item found having id same as current hit item
    this.cartItemList.push(item);
    this.totalPrice += parseInt(item.price);
    //console.log(this.cartItemList);
  }
}

removeCartItem(item){
  let index = this.cartItemList.indexOf(item);
    if(index > -1) {
      this.cartItemList.splice(index,1);
      this.totalPrice -= parseInt(item.price);
    }
  } 

updateCartItem(item){
  let x;
  this.totalPrice = 0;
    for (x in item) {
      console.log("Price = " + parseInt(item[x].price) + "    Qty = " +  parseInt(item[x].getQty))
      this.totalPrice += (parseInt(item[x].price) * parseInt(item[x].getQty));
    }
    console.log("Total Price " + this.totalPrice);
  }
}


