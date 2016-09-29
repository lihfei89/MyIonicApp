import { Component } from '@angular/core';
import {NavController,  ModalController,ToastController ,LoadingController } from 'ionic-angular';

import { Page3 } from '../page3/page3';

@Component({
  templateUrl: 'build/pages/usercenter/usercenter.html'
})

export class UserCenter {
	
	public user = {
    username: "1",
    password: "",
    headface:"1"    
 };  
  
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,
  	public loadingCtrl: LoadingController,
  	public modalCtrl: ModalController) {
  	 this.navCtrl = navCtrl;   
  	 
	  if (JSON.parse(localStorage.getItem("doLogin"))) {
      //已经登陆的状态
      this.user.headface = localStorage.getItem("username");    
      
    } else {
      //没有登陆,打开登陆界面
       let modal = this.modalCtrl.create(Page3);
       modal.onDidDismiss(data=>{
       	this.user.headface=data;
       });
        modal.present();
    }
  }  
     logout() {		
     	localStorage.clear();
	      let modal = this.modalCtrl.create(Page3);
	       modal.onDidDismiss(data=>{
       	this.user.headface=data;
       });
        modal.present();
        
    }
     
  }
