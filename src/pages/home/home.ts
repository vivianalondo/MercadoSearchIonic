import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavParams, NavController } from 'ionic-angular';
import { MercadoLibreServiceProvider } from '../../providers/mercadolibre-service/mercadolibre-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  product:string = "";
  results: any[] = [];

  constructor(
  	public navParams: NavParams,
  	public MercadoLibreServiceProvider: MercadoLibreServiceProvider,
  	public navCtrl: NavController) {}

  	buscar(product:string){
      console.log(this.product)
      console.log("Era el producto")
      this.MercadoLibreServiceProvider.getProduct(product)
      .then(data => {
        this.results = data.results;
        console.log(this.results)
      })
      .catch(error =>{
        console.error(error);
      })
  }

}
