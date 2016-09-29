import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contactdetails/contactdetails.html'
})
export class ContactDetails {
	
      item;
	constructor(public navCtrl: NavController,public params: NavParams) {
  	 this.navCtrl=navCtrl;  	
  	 this.item= this.params.data.item;
  }
}