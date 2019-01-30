import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddtocartService } from '../../services/addtocart.service';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  @Input() public getCartItem;
  public qtyOfItem:number=1; 
  //@Output() public childEvent = new EventEmitter();
  constructor(private _AddtocartService: AddtocartService) {
    //this.qtyOfItem = this.getCartItem.qty;
   }

  ngOnInit() {
  }

  increaseItem(){
    this._AddtocartService.increaseCartItem(this.getCartItem);
    this.qtyOfItem = this.getCartItem.qty;
  }

  decreaseItem(){
    this._AddtocartService.decreaseCartItem(this.getCartItem);
    this.qtyOfItem = this.getCartItem.qty;
  }

}
