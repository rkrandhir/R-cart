import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddtocartService } from '../../services/addtocart.service';
import { Product } from '../../services/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private cartItemList: Product[];
  private showMiniCart:boolean = false;
  public totalPrice:number=0;
  public totalItemPrice:number=0;
  public getQty:number = 1;
  private subscription: Subscription;
  constructor(private _AddtocartService: AddtocartService) {
  }
    
  ngOnInit() {
  this.cartItemList = this._AddtocartService.getCartItem();  
  this.subscription = this._AddtocartService.cartItemListChanged.subscribe(
    (data:Product[]) => {this.cartItemList = data}
    );
  this.calcTotalPrice();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  toggleMiniCart(){
    this.calcTotalPrice();
    this.showMiniCart = !this.showMiniCart;
  }

  calcTotalPrice(){
    this.totalPrice = 0;
    for (let i=0; i < this.cartItemList.length; i++) {      
      if((this.cartItemList[i].getQty) == NaN || (this.cartItemList[i].getQty) == undefined){ // in case of single quantity product
        this.totalPrice += (this.cartItemList[i].price) * (this.cartItemList[i].qty);
      } else {
        this.totalPrice += (this.cartItemList[i].price) * (this.cartItemList[i].getQty); //multiply with updated qty
      }
    }
  }

  removeCartItem(item){
    this._AddtocartService.removeCartItem(item);
    this.updatePrice(item);
  }

  hideMiniCart() {
    this.showMiniCart = false;
  }

  updatePrice(cartItem){
    cartItem.totalItemPrice = cartItem.price * cartItem.getQty;
    /* let x;
    this.totalItemPrice = 0;
    for (let i=0; i < this.cartItemList.length; i++) {
      this.cartItemList[i].totalItemPrice = (Math.round(this.cartItemList[i].price) * Math.round(this.cartItemList[i].getQty));
      this.totalPrice += this.cartItemList[i].totalItemPrice;
    } */
   this.calcTotalPrice();
  }

  /* updateCartItem(){
    this._AddtocartService.updateCartItem(this.itemAdded);
    console.log(this.totalPrice);
  } */
}
