import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {
  }

  getNews(){
    const url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8b0ef4a446442af93ffb23d0790ffb3";
    return this.http.get(url).map((res)=> res.json());
  }

}
