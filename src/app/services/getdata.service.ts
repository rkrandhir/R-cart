import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private _url:string = '/assets/data/product.json';

  constructor(private http:HttpClient) { }
  
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }
}
