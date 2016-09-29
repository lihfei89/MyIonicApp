import { Component } from '@angular/core';
import { NavController ,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  	
  }
  
  dismiss(){
  	this.viewCtrl.dismiss();
  }
}
