import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public title = "Pagina Home";
  public cards = new          Array<any>();
  
  constructor(public navCtrl: NavController) {
      this.cards = [{
        titulo: "Teste 1",
        descricao: "descricao 1"
      },
    {
        titulo: "Teste 2",
        descricao: "descricao 1"
      },{
        titulo: "Teste 3",
        descricao: "descricao 1"
      }]
  }

  digaOi(){
    alert("oi");
  }

}