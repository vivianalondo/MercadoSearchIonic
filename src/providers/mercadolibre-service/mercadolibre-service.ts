import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MercadoLibreServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoLibreServiceProvider {
  linkApi:any = "https://api.mercadolibre.com/sites/MCO/"
  constructor(public http: Http) {
    
  }

  
  getProduct(product:string) {
    var link:string = this.linkApi + "search?q=" + product
	  return this.http.get(link)
	  .map(res => res.json())
	  .toPromise();
	}

}
