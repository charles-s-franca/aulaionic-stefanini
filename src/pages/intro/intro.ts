import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosProvider } from "../../providers/dados/dados";

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [
    DadosProvider
  ]
})
export class IntroPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _dadosProvider: DadosProvider
  ) {
      _dadosProvider.getUsers().then(data=>{
        console.log(data);
      }).catch(error=>{
        console.log(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
