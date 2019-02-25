import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private _url: string = '/assets/data/product.json';
  private subscription: Subscription;
  public _getProductList: any = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

 /*  getProductList() {
    this.subscription = this.getProducts().subscribe(
      (data) => {
        this._getProductList = data;
        console.log(this._getProductList);
      });
  } */


  /** Get Product item - individual **/
  getProduct(id): Observable<Product[]> {    
    return of(this._getProductList.find(item => item.id === id));
  }
  
  
}
