import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  public qtyOfItem:number=1;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addItem(qty){
    qty++;
    this.qtyOfItem = qty;
    this.childEvent.emit(qty);
  }

  reduceItem(qty){
    if(qty == 1 ){
      return false;
    } else {
      qty--;
      this.qtyOfItem = qty;
      this.childEvent.emit(qty);
    }    
  }

}
