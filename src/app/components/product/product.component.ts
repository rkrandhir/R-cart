import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];
  id:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProductDetails();
  }

  loadProductDetails(){
    //this.product = this.route.snapshot.data['productList'];
    const product = this.route.snapshot.data.productItem;
    this.id = product.id
    console.log(product)
  }

  

}
