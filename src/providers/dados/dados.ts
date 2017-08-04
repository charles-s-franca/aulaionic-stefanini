import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DadosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DadosProvider {

  constructor(public http: Http) {
    console.log('Hello DadosProvider Provider');
  }

  getUsers(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
        this.http.get("http://rtmessage-api.azurewebsites.net/api/user").subscribe(data=>{
          resolve(data);
        }, error =>{
          reject(error)
        })
    });
    
  }

}
