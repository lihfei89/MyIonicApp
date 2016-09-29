import { Component } from '@angular/core';
import {NavController,  ModalController,ToastController ,LoadingController,ViewController } from 'ionic-angular';

//ViewController , LoadingController,  AlertController, ToastController ,

import {RegisterPage} from '../register/register';

@Component({
  templateUrl: 'build/pages/page3/page3.html'
})

export class Page3 {
	
	public user = {
    username: "1",
    password: "",
    headface:"images/1.jpg"
  };
  
  //public alertCtrl: AlertController,public loadingCtrl: LoadingController,public toastCtrl: ToastController,public modalCtrl: ModalController, public viewCtrl: ViewController
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  	 this.navCtrl = navCtrl;  
  	  this.viewCtrl=viewCtrl;
  }
  
  doLogin(){
  	 //用户登录信息验证
    if (!this.user.username) {
       let toast = this.toastCtrl.create({
		    message: '用户名不能为空!',
		    duration: 3000,
		    position: 'top'
      });
      toast.present();
    } else if (!this.user.password) {
      let toast = this.toastCtrl.create({
	    message: '密码不能为空!',
	    duration: 3000,
	    position: 'top'
      });
      toast.present();      
    } else {    	
     
    	 let loading = this.loadingCtrl.create({
         content: 'Please wait...'        
       });

       loading.present();

       if(this.user.password="1")
       {       	
       	 //保存数据信息
        localStorage.setItem("username", this.user.username);       
        localStorage.setItem("doLogin", JSON.stringify(true));
        
       	 setTimeout(() => {
       	 	
       	 	 this.viewCtrl.dismiss(this.user.username);
          loading.dismiss();
       
         }, 2000);      
       
       }else{
       	
       	 let toast = this.toastCtrl.create({
			    message: '登录失败!',
			    duration: 3000,
			    position: 'top'
		      });
		      toast.present();    
       }
     
    } 
  }
  
     doRegister() {		 	    
	      let modal = this.modalCtrl.create(RegisterPage);
        modal.present();        
    }
     
  }
