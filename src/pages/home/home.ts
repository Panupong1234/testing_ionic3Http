import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  public datenews : dataNew[];

  constructor(public navCtrl: NavController, private ser: ServiceProvider) {
    this.ser.getNews().subscribe(res=>{
      this.datenews = res.articles;
      console.log(this.datenews);

    });
  }

}

export interface dataNew {
  // articles:{ 
    title:string;
    urlToImage:string;
  // }
}
