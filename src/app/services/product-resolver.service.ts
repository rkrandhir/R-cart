import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product } from "./product.model";
import { GetdataService } from "./getdata.service";
import { Observable } from "rxjs";
import { map, take }  from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()

export class productResolverService implements Resolve<Product[]>{
  //private id:number;
  constructor (private _getDataService: GetdataService ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>{

    const id = route.paramMap.get('id');
    console.log('route.paramMap');
    console.log(route.paramMap);
    return this._getDataService.getProduct(id)/* .pipe(
      take(1),
      map(product => {
        if (product) {
          return product;
        } else { // id not found
          console.error('id not found');
          return null;
        }
      })
    ); */
  }
}