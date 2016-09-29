import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ ContactDetails } from "../contactdetails/contactdetails";

@Component({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
	
	public contacts=[
	{"contactid":1,"contactname":"张三","contacttext":"1111"},
	{"contactid":2,"contactname":"李四","contacttext":"1111"},
	{"contactid":3,"contactname":"王五","contacttext":"1111"},
	{"contactid":5,"contactname":"李四","contacttext":"1111"},
	{"contactid":6,"contactname":"王五","contacttext":"1111"}];
	
  constructor(public navCtrl: NavController) {
  	 this.navCtrl=navCtrl;
  }
  
  itemClick(event,contact){   	
  	//点击时 加载详情列表页面  	
  	console.log("contactdetail");
  	this.navCtrl.push(ContactDetails,{item:contact });
  	
  	
  }
  
}


